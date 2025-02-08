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
  return (
    <div
      style={{
        backdropFilter: "blur(1px)",
        background: "rgba(255, 255, 255, 0.01)",
      }}
      className=" flex flex-row space-x-4 overflow-hidden rounded-md border p-6 pr-8"
    >
      <img
        style={{
          backgroundColor: "white",
        }}
        src={logoPath}
        className="rounded max-w-40 max-h-40 aspect-square"
      ></img>
      <div className="flex flex-col pl-4 pt-2 text-left">
        <span className=" whitespace-nowrap text-spfg">{degree}</span>
        <span className=" whitespace-nowrap ">{name}</span>
      </div>
    </div>
  );
};

export default InstituteCard;
