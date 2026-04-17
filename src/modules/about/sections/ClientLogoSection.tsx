import Section from "@/components/ui/Section";

const logos = [
  "/asset/client/logo1.png",
  "/asset/client/logo2.png",
  "/asset/client/logo3.png",
  "/asset/client/logo4.png",
  "/asset/client/logo5.png",
];

export default function ClientLogoSection() {
  return (
    <Section center>
      <p className="text-muted mb-8">
        Trusted by leading companies worldwide
      </p>

      <div className="flex flex-wrap justify-center items-center gap-8 opacity-70">
        {logos.map((logo, i) => (
          <img
            key={i}
            src={logo}
            alt="client"
            className="h-10 object-contain grayscale hover:grayscale-0 transition"
          />
        ))}
      </div>
    </Section>
  );
}