import profileAbout from "@/assets/profile-about.jpg";
import { Smile, Heart } from "lucide-react";
const AboutSection = () => {
  return <section id="sobre" className="py-20 lg:py-32 bg-cream">
      <div className="section-container">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Column - Title & Image */}
          <div className="space-y-8">
            <div>
              <h2 className="section-title text-mocha">SOBRE</h2>
              <p className="section-title-accent italic">MIM</p>
            </div>

            <div className="relative max-w-md mx-auto lg:mx-0">
              <div className="image-rounded aspect-[4/5] shadow-2xl">
                <img src={profileAbout} alt="Daniela Leal - Psicóloga" className="w-full h-full object-cover" />
              </div>
              {/* Decorative circle accent */}
              <div className="absolute -bottom-4 -right-4 w-24 h-24 rounded-full bg-sage-light opacity-60" />
            </div>
          </div>

          {/* Right Column - Text */}
          <div className="flex items-center">
            <p className="text-lg leading-relaxed text-foreground">
              Sou psicóloga, especializanda em{" "}
              <strong>Terapia Cognitivo-Comportamental (TCC)</strong> com
              práticas baseadas em evidências atuando em diversos transtornos
              mentais.
            </p>
          </div>
        </div>
      </div>
    </section>;
};
export default AboutSection;