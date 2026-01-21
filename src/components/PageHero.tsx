interface PageHeroProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
}

const PageHero = ({ eyebrow, title, subtitle }: PageHeroProps) => {
  return (
    <section className="pt-32 pb-16 md:pt-40 md:pb-20 px-6 bg-neutral-900">
      <div className="max-w-4xl mx-auto text-center">
        {eyebrow && (
          <span
            data-aos="fade-down"
            className="text-gold-300 text-xs font-medium tracking-[0.25em] uppercase"
          >
            {eyebrow}
          </span>
        )}
        <h1
          data-aos="fade-up"
          data-aos-delay="100"
          className="text-4xl md:text-5xl lg:text-6xl font-serif text-white mt-4 tracking-tight uppercase"
        >
          {title}
        </h1>
        {subtitle && (
          <p
            data-aos="fade-up"
            data-aos-delay="200"
            className="mt-6 text-lg md:text-xl text-neutral-400 max-w-2xl mx-auto leading-relaxed"
          >
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
};

export default PageHero;
