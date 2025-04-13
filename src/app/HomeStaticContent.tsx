import AsciiArt from "@/components/AsciiArt";

export default function HomeStaticContent() {
  return (
    <section className="sr-only">
      <h1>Hamepage Leon Sauer</h1>
      <p>Hello World</p>
      <div>
        <AsciiArt art={["  /\\_/\\  ", " ( o.o ) ", "  > ^ <  "]} />
      </div>
      <p>Hi, I&apos;m Leon ^^</p>
      <p>Welcome to my little corner of the internet!</p>
      <p>Feel free to look around and reach out if you’d like to connect!</p>
    </section>
  );
}
