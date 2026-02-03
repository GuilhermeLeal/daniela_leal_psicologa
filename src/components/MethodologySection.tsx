import methodologyImg from "@/assets/methodology.jpg";

const MethodologySection = () => {
  return (
    <section id="metodologia" className="py-20 lg:py-32 bg-cream">
      <div className="section-container">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Column - Content */}
          <div className="space-y-8 order-2 lg:order-1">
            <div>
              <h2 className="section-title text-mocha">NOSSA</h2>
              <p className="section-title-accent italic">METODOLOGIA</p>
            </div>

            <div className="space-y-6 text-foreground">
              <p className="leading-relaxed">
                <strong className="text-mocha">O que ofereço:</strong>{" "}
                intervenção prática, orientada a resultados, para ajudar a
                reduzir sintomas disfuncionais e melhorar a qualidade de vida.
              </p>

              <p className="leading-relaxed">
                <strong className="text-mocha">Como atuo:</strong> Abordagem
                colaborativa, centrada no paciente, com técnicas estruturadas da
                TCC adaptadas às suas necessidades.
              </p>

              <p className="leading-relaxed">
                <strong className="text-mocha">Objetivo:</strong> Transformar
                pensamentos e comportamentos que impactam seu bem-estar,
                promovendo estratégias reais para o dia a dia.
              </p>
            </div>

            <div className="border-l-4 border-sage pl-6 py-2">
              <p className="text-muted-foreground italic leading-relaxed">
                Se você anda lidando com ansiedade, depressão, transtornos de
                humor, estresse ou outras dificuldades, posso ajudar a
                identificar gatilhos, criar planos simples e eficazes e
                acompanhar o seu progresso rumo a uma vida mais estável e
                funcional.
              </p>
            </div>

            <p className="leading-relaxed text-foreground">
              <strong className="text-mocha">Interessado em começar?</strong>{" "}
              Vamos conversar sobre como podemos reduzir seus sintomas e tornar
              o dia a dia mais manejável. Agende uma avaliação inicial para
              alinharmos objetivos e próximos passos.
            </p>
          </div>

          {/* Right Column - Image */}
          <div className="order-1 lg:order-2">
            <div className="relative max-w-md mx-auto lg:mx-0 lg:ml-auto">
              <div className="image-rounded aspect-square shadow-2xl overflow-hidden">
                <img
                  src={methodologyImg}
                  alt="Sessão de terapia"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Decorative element */}
              <div className="absolute -top-4 -left-4 w-20 h-20 rounded-full bg-ocean/20" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MethodologySection;
