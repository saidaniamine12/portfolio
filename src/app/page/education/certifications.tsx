import { useLanguage } from "@/components/custom/language-select.tsx/language-select-provider";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";
import { useState } from "react";
import certificatesData from "./certification-data-en-fr.json";

const ViewCertificateButton: React.FC<{ certificateLink: string }> = ({
  certificateLink,
}) => {
  const { language } = useLanguage();
  const [mouseEnter, setMouseEnter] = useState(false);
  return (
    <Button
      variant="outline"
      className="max-w-[160px]"
      onMouseEnter={() => setMouseEnter(true)}
      onMouseLeave={() => setMouseEnter(false)}
    >
      <a
        target="_blank"
        rel="noopener noreferrer"
        href={certificateLink}
        className="flex flex-row gap-2"
      >
        {language === "EN" ? "View Certificate" : "Voir le certificat"}
        <ExternalLink className={mouseEnter ? "text-spfg" : ""} />
      </a>
    </Button>
  );
};
const Certifications = () => {
  const { language } = useLanguage();
  return (
    <div className="flex flex-col border-l gap-2 text-left gap-4 mt-4">
      <span className="text-l font-semibold tracking-tight pl-2 text-spfg">
        Certifications
      </span>
      <div className="flex flex-col gap-8 pl-4">
        {certificatesData.data.map((certificate, index) => (
          <div data-aos="fade-up" key={index} className="flex flex-row gap-4">
            <div className="flex flex-col self-center">
              <img src={certificate.organizationImgSrc} className="w-20 h-20" />
            </div>
            <div className="flex flex-col gap-1">
              <div className="flex flex-row gap-2">
                <span className="font-semibold">{certificate.title}</span>
                <span className="text-spfg"> - </span>
                <span className="">{certificate.organization}</span>
              </div>
              <span className="text-sm text-gray-500">
                <span>{language === "EN" ? "Issued on:" : "Délivré le:"}</span>{" "}
                {certificate.date[language]}
              </span>
              <ViewCertificateButton
                certificateLink={certificate.certificateLink}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Certifications;
