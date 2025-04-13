import LinkButton from "@/components/LinkButton";

export default function ContactStaticContent() {
  return (
    <section className="sr-only">
      <h1>Contact Information</h1>
      <p>Leon Gabriel Sauer</p>
      <p>E-Mail: sauer.leongabriel@gmail.com</p>
      <h2>Socials</h2>
      <ul>
        <li key="github">
          <LinkButton url="https://github.com/Lon3035" label="Github" />
        </li>
        <li key="linkedin">
          <LinkButton
            url="https://www.linkedin.com/in/leon-gabriel-sauer-242b73225/"
            label="LinkedIn"
          />
        </li>
      </ul>
    </section>
  );
}
