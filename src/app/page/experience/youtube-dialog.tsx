import { useLanguage } from "@/components/custom/language-select.tsx/language-select-provider";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Youtube } from "lucide-react";
import YoutubeClip from "./youtube-clip";

interface YoutubeDialogProps {
  demoVideoLink: string;
}
const YoutubeDialog: React.FC<YoutubeDialogProps> = ({ demoVideoLink }) => {
  const { language } = useLanguage();
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" className="border-sm radius-md">
          <Youtube />
          <a>{language === "EN" ? "Demo" : "Démo"}</a>
        </Button>
      </DialogTrigger>
      <DialogContent className="flex border-none overflow-hidden max-w-[700px] max-h-[500px]">
        <YoutubeClip videoId={demoVideoLink} />
      </DialogContent>
    </Dialog>
  );
};

export default YoutubeDialog;
