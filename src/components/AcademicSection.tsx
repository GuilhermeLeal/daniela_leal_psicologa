import { GraduationCap, Award, BookOpen, BadgeCheck } from "lucide-react";

const AcademicSection = () => {
  const achievements = [
    {
      icon: GraduationCap,
      title: "Graduação em Psicologia",
      description: "Bacharel em Psicologia com formação completa em avaliação, diagnóstico e intervenção psicológica.",
    },
    {
      icon: Award,
      title: "Especialização em TCC",
      description: "Especializanda em Terapia Cognitivo-Comportamental, abordagem baseada em evidências científicas.",
    },
    {
      icon: BookOpen,
      title: "Formação Continuada",
      description: "Atualização constante através de cursos, congressos e supervisões em saúde mental.",
    },
    {
      icon: BadgeCheck,
      title: "CRP Ativo",
      description: "Profissional devidamente registrada no Conselho Regional de Psicologia.",
    },
  ];

  return (
    <section id="formacao" className="py-20 lg:py-32 bg-mocha">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="section-title text-cream">FORMAÇÃO</h2>
          <p className="section-title-accent italic text-cream/80">ACADÊMICA</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {achievements.map((item, index) => (
            <div
              key={index}
              className="bg-cream/10 backdrop-blur-sm rounded-2xl p-8 text-center hover:bg-cream/20 transition-colors duration-300"
            >
              <div className="flex items-center justify-center w-16 h-16 mx-auto mb-6 rounded-full border-2 border-cream/50">
                <item.icon className="w-8 h-8 text-cream" />
              </div>
              <h3 className="font-heading text-xl text-cream mb-3">
                {item.title}
              </h3>
              <p className="text-sm text-cream/70 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AcademicSection;
