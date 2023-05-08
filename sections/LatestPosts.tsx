export interface Props {
  title: string;
}

export default function LatestPosts({ title }: Props) {
  return (
    <div>
      <h1 class="font-bold">{title}</h1>
      <p>VAMO LA</p>
    </div>
  );
}
