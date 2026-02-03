import contactTherapy from "@/assets/contact-therapy.jpg";
import { Instagram, Mail, MapPin } from "lucide-react";

const ContactSection = () => {
  const instagramUrl = "https://www.instagram.com/daniela.leal.psi/";
  const whatsappUrl = "https://wa.me/5581999372466";
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
                DANIELA C C LEAL
              </p>
              <p className="text-sm text-cream/70">Psicóloga Clínica</p>
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-4 text-cream/80">
                <Mail className="w-5 h-5" />
                <span className="text-sm">daniela.leal@yahoo.com.br</span>
              </div>

              <div className="flex items-start gap-4 text-cream/80">
                <MapPin className="w-5 h-5 mt-0.5" />
                <span className="text-sm">
                  Av. Governador Agamenon Magalhães, n 2615
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
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
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
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
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
