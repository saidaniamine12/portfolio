import { useLanguage } from "./language-select-provider";
import { Check, ChevronDown } from "lucide-react";
import {
  Button,
  Menu,
  MenuHandler,
  MenuItem,
  MenuList,
} from "@material-tailwind/react";

const LanguageSelectButton = () => {
  const { language, setLanguage } = useLanguage();

  return (
    <Menu>
      <MenuHandler className="flex flex-row hover:bg-sidebar-accent rounded-md p-1 bg-transparent shadow-none">
        <Button
          placeholder="Select-language"
          className=""
          onPointerEnterCapture={() => {}}
          onPointerLeaveCapture={() => {}}
        >
          <span className="pt-[2px] pl-1 font-semibold"> {language}</span>

          <ChevronDown strokeWidth={1} />
        </Button>
      </MenuHandler>
      <MenuList
        className=""
        placeholder="Menu-List"
        onPointerEnterCapture={() => {}}
        onPointerLeaveCapture={() => {}}
      >
        <span className="pl-1">Languages</span>
        <MenuItem
          placeholder="EN"
          onPointerEnterCapture={() => {}}
          onPointerLeaveCapture={() => {}}
          onClick={() => setLanguage("EN")}
          className="mt-2"
        >
          <div className="flex flex-row gap-1">
            <Check
              size={14}
              className={` ${
                language === "EN" ? "visible  pt-1" : "invisible"
              }`}
            />
            <span>EN</span>
          </div>
        </MenuItem>
        <MenuItem
          placeholder="FR"
          onPointerEnterCapture={() => {}}
          onPointerLeaveCapture={() => {}}
          onClick={() => setLanguage("FR")}
        >
          <div className="flex flex-row gap-1">
            <Check
              size={14}
              className={`${language === "FR" ? "visible pt-1" : "invisible"}`}
            />
            <span>FR</span>
          </div>
        </MenuItem>
      </MenuList>
    </Menu>
  );
};

export default LanguageSelectButton;
