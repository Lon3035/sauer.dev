interface AscciArtProps {
  art: string[];
}

export default function AsciiArt({ art }: AscciArtProps) {
  return (
    <div>
      {art.map((row, index) => (
        <pre key={index} className="my-[-10px]">
          {row}
        </pre>
      ))}
    </div>
  );
}
