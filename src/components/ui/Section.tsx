export default function Section({
  title,
  subtitle,
  children,
  center = false,
}: {
  title?: React.ReactNode;
  subtitle?: React.ReactNode;
  children: React.ReactNode;
  center?: boolean;
}) {
  return (
    <section className="section section-light">
      <div className="container">

        {(title || subtitle) && (
          <div className={center ? "text-center mb-16" : "mb-12"}>
            
            {title && (
              <h2 className="heading">
                {title}
              </h2>
            )}

            {subtitle && (
              <p className="subheading mt-4 max-w-2xl mx-auto">
                {subtitle}
              </p>
            )}

          </div>
        )}

        {children}
      </div>
    </section>
  );
}