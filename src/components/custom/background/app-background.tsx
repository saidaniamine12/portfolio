import { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { type ISourceOptions } from "@tsparticles/engine";
// import { loadAll } from "@tsparticles/all"; // if you are going to use `loadAll`, install the "@tsparticles/all" package too.
// import { loadFull } from "tsparticles"; // if you are going to use `loadFull`, install the "tsparticles" package too.
import { loadSlim } from "@tsparticles/slim"; // if you are going to use `loadSlim`, install the "@tsparticles/slim" package too.
// import { loadBasic } from "@tsparticles/basic"; // if you are going to use `loadBasic`, install the "@tsparticles/basic" package too.
import nasaDarkTheme from "./nasa-theme-dark.json";
import nasaLightTheme from "./nasa-theme-light.json";
import { useTheme } from "@/components/theme-provider";
const AppBackground = () => {
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
    if (theme === "dark") {
      setThemeLoaded(nasaDarkTheme);
      console.log("dark");
    } else {
      setThemeLoaded(nasaLightTheme);
      console.log("light");
    }
  }, [theme]);

  const options: ISourceOptions = useMemo(() => themeLoaded, [themeLoaded]);

  if (init) {
    return <Particles id="tsparticles" options={options} />;
  }

  return <></>;
};

export default AppBackground;
