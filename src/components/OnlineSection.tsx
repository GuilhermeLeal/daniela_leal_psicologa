import onlineTherapy from "@/assets/online-therapy.jpg";

const OnlineSection = () => {
  return (
    <section className="py-20 lg:py-32 bg-cream">
      <div className="section-container">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Column - Content */}
          <div className="space-y-8">
            <h2 className="font-heading text-3xl md:text-4xl text-mocha leading-tight">
              Atendimento Presencial
              <br />
              e Online. Entre em contato
              <br />
              para agendar um horário.
            </h2>

            <a
              href="#contato"
              className="inline-block border-2 border-mocha text-mocha px-8 py-3 text-sm tracking-wider hover:bg-mocha hover:text-cream transition-all duration-300"
            >
              FALE CONOSCO
            </a>
          </div>

          {/* Right Column - Image */}
          <div className="relative max-w-lg mx-auto lg:mx-0 lg:ml-auto">
            <div className="image-rounded aspect-[4/3] shadow-2xl overflow-hidden">
              <img
                src={onlineTherapy}
                alt="Atendimento online"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OnlineSection;
