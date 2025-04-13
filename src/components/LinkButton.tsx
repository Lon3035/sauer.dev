interface LinkButtonProps {
  url: string;
  label: string;
  sameTab?: boolean;
}

export default function LinkButton({ url, label, sameTab }: LinkButtonProps) {
  return (
    <a
      href={url}
      target={sameTab ? "_self" : "_blank"}
      rel={sameTab ? undefined : "noopener noreferrer"}
      className="mt-2 inline-block font-mono rounded-md hover:bg-purple-400 hover:text-black transition-colors duration-300"
    >
      [ {label} ]
    </a>
  );
}
