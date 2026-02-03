import { Frown, Brain, Users, Moon, Gamepad2 } from "lucide-react";

const TreatmentsSection = () => {
  const treatments = [
    {
      icon: Frown,
      title: "Transtornos de Humor / Ansiedade e depressão",
    },
    {
      icon: Brain,
      title: "Traumas e compulsões",
    },
    {
      icon: Users,
      title: "Fobia Social",
    },
    {
      icon: Moon,
      title: "Transtornos do sono",
    },
    {
      icon: Gamepad2,
      title: "Transtornos do jogo (aposta, jogos)",
    },
    {
      icon: Brain,
      title: "TDAH",
    },
  ];

  return (
    <section id="tratamentos" className="py-20 lg:py-32 bg-cream-dark">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="section-title text-mocha">PRINCIPAIS</h2>
          <p className="section-title-accent italic">TRATAMENTOS</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {treatments.map((treatment, index) => (
            <div key={index} className="card-treatment">
              <div className="card-treatment-icon">
                <treatment.icon className="w-7 h-7" />
              </div>
              <p className="text-sm text-foreground text-center leading-relaxed">
                {treatment.title}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <a
            href="#contato"
            className="inline-block border-2 border-mocha text-mocha px-8 py-3 text-sm tracking-wider hover:bg-mocha hover:text-cream transition-all duration-300"
          >
            OUTROS TRATAMENTOS
          </a>
        </div>
      </div>
    </section>
  );
};

export default TreatmentsSection;
