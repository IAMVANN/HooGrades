export default function Assignment({ params }: { params: { aid: string } }) {
  return <div>{params.aid}</div>;
}
