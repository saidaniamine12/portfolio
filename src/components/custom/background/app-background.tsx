import { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
// import { loadAll } from "@tsparticles/all"; // if you are going to use `loadAll`, install the "@tsparticles/all" package too.
// import { loadFull } from "tsparticles"; // if you are going to use `loadFull`, install the "tsparticles" package too.
import { loadSlim } from "@tsparticles/slim"; // if you are going to use `loadSlim`, install the "@tsparticles/slim" package too.
// import { loadBasic } from "@tsparticles/basic"; // if you are going to use `loadBasic`, install the "@tsparticles/basic" package too.
import nasaDarkTheme from "./nasa-theme-dark.json";
import nasaLightTheme from "./nasa-theme-light.json";
import { useTheme } from "@/components/theme-provider";

interface AppBackgroundProps {
  setLoaded: (value: boolean) => void;
}
const AppBackground: React.FC<AppBackgroundProps> = ({ setLoaded }) => {
  const [init, setInit] = useState(false);
  const { theme } = useTheme();
  const [themeLoaded, setThemeLoaded] = useState(nasaDarkTheme);

  // this should be run only once per application lifetime
  useEffect(() => {
    initParticlesEngine(async (engine) => {
      // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
      // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
      // starting from v2 you can add only the features you need reducing the bundle size
      //await loadAll(engine);
      //await loadFull(engine);
      await loadSlim(engine);
      //await loadBasic(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);
  useEffect(() => {
    console.log("init", init);
    if (init) {
      setLoaded(true);
    }
  }, [init]);

  useEffect(() => {
    if (theme === "dark") {
      if (themeLoaded !== nasaDarkTheme) {
        setThemeLoaded(nasaDarkTheme);
      }
    } else {
      setThemeLoaded(nasaLightTheme);
    }
  }, [theme]);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const options: any = useMemo(() => themeLoaded, [themeLoaded]);

  if (init) {
    return <Particles id="tsparticles" options={options} />;
  }

  return <></>;
};

export default AppBackground;
