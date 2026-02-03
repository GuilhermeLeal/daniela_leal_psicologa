import heroOcean from "@/assets/hero-ocean.jpg";
const HeroSection = () => {
  return <section className="relative min-h-screen flex items-center">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img src={heroOcean} alt="Oceano sereno ao pôr do sol" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-mocha/40 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative section-container pt-24">
        <div className="max-w-xl">
          <p className="font-heading text-3xl md:text-4xl tracking-[0.2em] text-cream mb-2 font-bold drop-shadow-lg">DANIELA C C LEAL</p>
          <p className="text-lg md:text-xl tracking-wider text-cream mb-10 font-semibold drop-shadow-md">Psicóloga Clínica</p>

          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl text-cream leading-tight">
            Cuidar da mente
            <br />
            para viver em
            <br />
            equilíbrio.
          </h1>
        </div>
      </div>
    </section>;
};
export default HeroSection;