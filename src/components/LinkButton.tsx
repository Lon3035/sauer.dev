interface LinkButtonProps {
  url: string;
  label: string;
}

export default function LinkButton({ url, label }: LinkButtonProps) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="mt-2 inline-block font-mono rounded-md hover:bg-purple-400 hover:text-black transition-colors"
    >
      [ {label} ]
    </a>
  );
}
