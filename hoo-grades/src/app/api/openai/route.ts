import OpenAI from "openai";
import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({ message: "Hello, world!" });
}

export async function POST(request: Request) {
  const data = await request.json();
  const assignment_id = data.assignment_id;
  const submission_url = data.submission;
  const rubric = data.rubric;

  const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
  });
  try {
    const completionRead = await openai.chat.completions.create({
      model: "gpt-4-vision-preview",
      messages: [
        {
          role: "user",
          content: [
            {
              type: "text",
              text: "You are a component in an AI autograder that needs to transcribe a student's work into plain text. Please transcribe the image into plaintext. Do not respond with anything else.",
            },
            {
              type: "image_url",
              image_url: {
                url: submission_url,
              },
            },
          ],
        },
      ],
    });
    const response = completionRead.choices[0].message?.content;

    const prompt =
      "You are an AI autograder that takes a students work and a rubric for each question, then reasons about what score to give the student based on how well the work matches the rubric criteria. The work will contain the student's work across all questions (which will be labeled by number), and you must use the appropriate question rubric to evaluate it. The output should be formatted to the JSON schema below where one key grade is the score the student earned as (points divided as the total possible amount of points the student could have earned to make a percentage out of 100), and feedback is your reasoning for why they got that score based on the rubric items.";
    const context = `
    Given this Math problem, 
    Question 1: Solve for x: 1+4=x,  RUBRIC: +5 Points: x = 5; 
    Student Work : 1+4=x; 5 = x; 
    Question 2: Solve for y: 5x + 2y = 7, RUBRIC: +5 Points: y = (7-5y)/2;
    Student Work: 5x + 2y = 7; 2y = 7-5y; y = (7-5y)/2
    Question 3: Solve for z: 3x + 6 = z, RUBRIC: +5 Points: z = 3x + 6;
    Student Work: 3x + 6 = z; z = 3x + 8;
    your response should be {"grade": 66.67, "feedback": "In problem 1, 
    the student correctly solved for x, so they deserve full credit which is 5 points. In problem 2:
    the students solved for y correctly, so they deserve full credit which is 5 points. In problem 3, the student solved for z incorrectly, so they deserve 0 points. In
    total, the student deserves 10 points out of 15. or 66.67%."}
    Another Example is
    Given this Math Problem, 
    Question 1: Solve for X: 5y+x=2, RUBRIC: +5 Points: x = 2-5y;
    Student Work : 5y + x  = 2, 5y = x+2, 5y - 2 = x, 
    Question 2: Solve for 10y^2 + 5x^2 = 2, RUBRIC: +5 Points:  y = ((-5x^2+2)/10)^(.5); 
    +5 Points: Y = -((-5x^2+2)/10)^(.5)
    Student Work : 10y^2 +5x^2 = 2
    10y^2 = -5x^2+2
    y^2 = (-5x^2+2)/10
    Y = ((-5x^2+2)/10)^(.5)
    AND y = Y = -((-5x^2+2)/10)^(.5)
    Question 3: Find the discriminant of x^2 + 5x -2 = 0, RUBRIC: +5 Points:  discriminant = sqrt(33) or 5.745
    Student Work: x^2 + 5x -2 = 0; sqrt(b^2-4ac) = discriminant; sqrt(5^2-4(1)(-2)) = discriminant;
    sqrt(25+8) = discriminant; 
    sqrt(33) = discriminant; 
    your response should be {"grade": 75, "feedback": "In problem 1, the student is on the right track
    but incorrectly solved for x by forgetting the negative sign when subtracting x from both sides, 
    so they deserve no points.  In problem 2: the student solved for y correctly and hit both rubric items, 
    and so they gain 10 points. In problem 3, the student correctly solved for the discriminant, so they gain 5 points.
    In total, they gained 15 out of 20 possible points or 75%."}


    `;
    const schema = `As an example, for the schema
{
    "grade": "99%",
    "feedback: "The student’s work was on the right track, but they forgot the negative on the left when subtracting x from both sides"
} 
the object {"grade": "100%",
        "feedback" : "The student’s answer for problem 1 is correct and fits all criterias of the rubric. "} is a well-formatted 
instance of the schema. 
The object {"grade": {"feedback": ["bar", "baz"]}} is 
not well-formatted.

Here is the output schema:

{
    "grade": "A person's grade out of 100%",
    "feedback": "explanation for why the person gets that grade", 
}`;
    const completionGrade = await openai.chat.completions.create({
      model: "gpt-4-turbo-preview",
      messages: [
        {
          role: "system",
          content: prompt + schema + context,
        },
        {
          role: "user",
          content: `This is the transcribed image ${response} This is the rubric ${rubric}`,
        },
      ],
      temperature: 0.5,
    });

    const graded = completionGrade.choices[0].message?.content;

    const gradedObject = JSON.parse(graded || "");

    const postToAWS = async () => {
      const response = await fetch(
        "https://ajsuccic54.execute-api.us-east-1.amazonaws.com/prod/updateAssignment",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            assignment_id: assignment_id,
            status: gradedObject.grade,
            feedback: gradedObject.feedback,
          }),
        }
      );
      const data = await response.json();
      console.log(data);
    };
    postToAWS();
    return NextResponse.json({ status: "success" });
  } catch (error) {
    console.error(error);
  }
}
