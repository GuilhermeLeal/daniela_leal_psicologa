import contactTherapy from "@/assets/contact-therapy.jpg";
import { Instagram, MessageCircle, Mail, MapPin } from "lucide-react";

const ContactSection = () => {
  // Replace these with real links
  const instagramUrl = "https://instagram.com/";
  const whatsappUrl = "https://wa.me/5511999999999";

  return (
    <section id="contato" className="bg-mocha">
      <div className="grid lg:grid-cols-2">
        {/* Left Column - Image & Title */}
        <div className="relative min-h-[400px] lg:min-h-[600px]">
          <img
            src={contactTherapy}
            alt="Sessão de terapia"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-mocha/60" />
          <div className="relative h-full flex items-end p-8 lg:p-12">
            <div>
              <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl text-cream">
                ENTRE EM
              </h2>
              <p className="font-heading italic text-4xl md:text-5xl lg:text-6xl text-cream/80">
                CONTATO
              </p>
            </div>
          </div>
        </div>

        {/* Right Column - Contact Info */}
        <div className="p-8 lg:p-12 flex flex-col justify-center">
          <div className="space-y-8">
            <div>
              <p className="font-heading text-lg tracking-[0.2em] text-cream font-semibold">
                DANIELA LEAL
              </p>
              <p className="text-sm text-cream/70">Clínica de Psicologia</p>
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-4 text-cream/80">
                <Mail className="w-5 h-5" />
                <span className="text-sm">ola@danielaleal.com.br</span>
              </div>

              <div className="flex items-start gap-4 text-cream/80">
                <MapPin className="w-5 h-5 mt-0.5" />
                <span className="text-sm">
                  Rua Alegre, 123 - Cidade Brasileira, SP
                </span>
              </div>
            </div>

            <div className="space-y-4">
              <p className="text-cream font-medium">Siga a gente</p>
              <div className="flex gap-4">
                <a
                  href={instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full border-2 border-cream/50 flex items-center justify-center text-cream hover:bg-cream hover:text-mocha transition-all duration-300"
                  aria-label="Instagram"
                >
                  <Instagram className="w-5 h-5" />
                </a>
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full border-2 border-cream/50 flex items-center justify-center text-cream hover:bg-cream hover:text-mocha transition-all duration-300"
                  aria-label="WhatsApp"
                >
                  <MessageCircle className="w-5 h-5" />
                </a>
              </div>
            </div>

            <div className="pt-8 border-t border-cream/20">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-cream text-mocha px-8 py-4 text-sm font-medium tracking-wider hover:bg-cream/90 transition-all duration-300 rounded-lg"
              >
                <MessageCircle className="w-5 h-5" />
                AGENDAR CONSULTA
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
