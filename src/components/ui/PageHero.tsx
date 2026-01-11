interface PageHeroProps {
  title: string;
  subtitle?: string;
  backgroundImage?: string;
}

export default function PageHero({ title, subtitle, backgroundImage }: PageHeroProps) {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      {backgroundImage && (
        <>
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${backgroundImage})` }}
          />
          <div className="absolute inset-0 bg-dark-950/80" />
        </>
      )}
      {!backgroundImage && (
        <div className="absolute inset-0 bg-gradient-to-b from-dark-900 to-dark-950" />
      )}

      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-1/4 w-96 h-96 bg-turf-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -right-1/4 w-96 h-96 bg-gold-500/10 rounded-full blur-3xl" />
      </div>

      <div className="container-custom mx-auto px-4 md:px-8 relative z-10">
        <div className="max-w-3xl">
          <h1 className="font-display font-bold text-4xl md:text-5xl lg:text-6xl text-white mb-6 animate-slide-up">
            {title}
          </h1>
          {subtitle && (
            <p className="text-xl md:text-2xl text-dark-300 leading-relaxed animate-slide-up">
              {subtitle}
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
