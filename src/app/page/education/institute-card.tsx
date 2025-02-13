import { useTheme } from "@/components/theme-provider";

interface InstituteCardProps {
  name: string;
  logoPath: string;
  degree: string;
}
const InstituteCard: React.FC<InstituteCardProps> = ({
  name,
  logoPath,
  degree,
}) => {
  const { theme } = useTheme();
  return (
    <div
      style={{
        backdropFilter: "blur(1px)",
        background: "rgba(255, 255, 255, 0.01)",
      }}
      className={` flex flex-row space-x-4 overflow-hidden rounded-md border p-6 pr-8 ${
        theme === "light" ? "bg-muted/50" : ""
      }`}
    >
      <img
        style={{
          backgroundColor: "white",
        }}
        src={logoPath}
        className="rounded max-w-40 max-h-40 aspect-square"
      ></img>
      <div className="flex flex-col pl-4 pt-2 text-left">
        <span className="flex text-spfg">{degree}</span>
        <span className="flex ">{name}</span>
      </div>
    </div>
  );
};

export default InstituteCard;
