interface DownloadButtonProps {
  fileName: string;
  downloadUrl: string;
}

export default function DownloadButton({
  fileName,
  downloadUrl,
}: DownloadButtonProps) {
  return (
    <a
      href={downloadUrl}
      download={fileName}
      className="mt-2 inline-block font-mono rounded-md hover:bg-purple-400 hover:text-black transition-colors duration-300"
    >
      [ Download {fileName} ]
    </a>
  );
}
