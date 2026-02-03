import heroOcean from "@/assets/hero-ocean.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroOcean}
          alt="Oceano sereno ao pôr do sol"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-mocha/40 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative section-container pt-24">
        <div className="max-w-xl">
          <p className="font-heading text-lg tracking-[0.2em] text-cream/90 mb-2">
            DANIELA LEAL
          </p>
          <p className="text-sm tracking-wider text-cream/80 mb-8">
            Clínica de Psicologia
          </p>

          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl text-cream leading-tight mb-8">
            Cuidar da mente
            <br />
            para viver em
            <br />
            equilíbrio.
          </h1>

          <a
            href="#sobre"
            className="inline-block border border-cream text-cream px-8 py-3 text-sm tracking-wider hover:bg-cream hover:text-mocha transition-all duration-300"
          >
            SAIBA MAIS
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
