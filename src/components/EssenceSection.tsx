import profileEssence from "@/assets/profile-essence.jpg";

const EssenceSection = () => {
  return (
    <section className="py-20 lg:py-32 bg-cream-dark">
      <div className="section-container">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Left Column - Title & Image */}
          <div className="space-y-8">
            <div>
              <h2 className="section-title text-mocha">NOSSA</h2>
              <p className="section-title-accent italic">ESSÊNCIA</p>
            </div>

            <div className="relative max-w-md mx-auto lg:mx-0">
              <div className="image-rounded aspect-square shadow-2xl overflow-hidden">
                <img
                  src={profileEssence}
                  alt="Daniela Leal em seu consultório"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* Right Column - Mission & Vision */}
          <div className="space-y-12 lg:pt-24">
            <div className="space-y-4">
              <h3 className="font-heading text-2xl text-mocha border-b border-mocha/30 pb-2 inline-block">
                Missão
              </h3>
              <p className="text-base leading-relaxed text-foreground">
                Promover a saúde emocional e psicológica por meio de um
                atendimento humano, acolhedor e individualizado, auxiliando cada
                pessoa a lidar com seus desafios, desenvolver-se pessoalmente e
                alcançar uma vida mais equilibrada.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="font-heading text-2xl text-mocha border-b border-mocha/30 pb-2 inline-block">
                Visão
              </h3>
              <p className="text-base leading-relaxed text-foreground">
                Ser um modelo de excelência em saúde mental, reconhecido por
                oferecer um ambiente seguro e acolhedor, contribuindo para a
                formação de uma sociedade mais consciente, equilibrada e
                emocionalmente saudável.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EssenceSection;
