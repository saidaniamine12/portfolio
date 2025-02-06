import { Language, useLanguage } from "./language-select-provider";
import { SelectTrigger } from "@radix-ui/react-select";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectValue,
} from "@/components/ui/select";
import { ChevronDown } from "lucide-react";

const LanguageSelectButton = () => {
  const { language, setLanguage } = useLanguage();
  return (
    <Select
      onValueChange={(e) => {
        setLanguage(e as Language);
      }}
    >
      <SelectTrigger className="flex flex-row hover:bg-sidebar-accent rounded-md p-1">
        <div className="pl-1">
          <SelectValue placeholder={language} />
        </div>

        <ChevronDown strokeWidth={1} />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Languages</SelectLabel>
          <SelectItem value="EN">EN</SelectItem>
          <SelectItem value="FR">FR</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};

export default LanguageSelectButton;
