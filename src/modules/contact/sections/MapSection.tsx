export default function MapSection() {
  return (
    <section className="section">
      <div className="container">

        <iframe
          src="https://maps.google.com/maps?q=jakarta&t=&z=13&ie=UTF8&iwloc=&output=embed"
          className="w-full h-[400px] rounded-2xl border-0"
          loading="lazy"
        />

      </div>
    </section>
  );
}