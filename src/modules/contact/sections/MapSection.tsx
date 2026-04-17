export default function MapSection() {
  return (
    <section className="relative py-24 overflow-hidden">

      {/* BACKGROUND */}
      <div className="absolute inset-0 bg-[var(--bg)]" />

      {/* RADIAL GLOW */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(14,165,233,0.06),transparent_60%)]" />

      <div className="container relative z-10">

        {/* HEADER */}
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="heading">
            Our <span className="text-[var(--primary)]">Location</span>
          </h2>
          <p className="subheading mt-3">
            Visit our office or connect with us directly
          </p>
        </div>

        {/* MAP WRAPPER */}
        <div className="relative mt-16 rounded-3xl overflow-hidden shadow-xl border border-[var(--border)]">

          {/* MAP */}
          <iframe
            src="https://www.google.com/maps?q=Komando+Building+Cipinang+Indah+Raya+No+1+Jakarta&output=embed"
            className="w-full h-[420px] md:h-[500px]"
            loading="lazy"
          />

          {/* OVERLAY INFO CARD */}
          <div className="
            absolute bottom-4 left-4
            bg-white/90 backdrop-blur-xl
            rounded-xl px-5 py-4
            shadow-lg
            max-w-xs
          ">
            <p className="text-sm font-semibold">
              Fahad Manpower
            </p>
            <p className="text-xs text-gray-600 mt-1">
              Komando Building, Cipinang Indah Raya No.1
              <br />
              East Jakarta 13420
            </p>

            <a
              href="https://maps.google.com/?q=Komando+Building+Cipinang+Indah+Raya+No+1+Jakarta"
              target="_blank"
              className="
                inline-block mt-3 text-xs
                text-[var(--primary)]
                font-medium hover:underline
              "
            >
              Open in Google Maps →
            </a>
          </div>

        </div>

      </div>
    </section>
  );
}