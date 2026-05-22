import { useState } from "../node_modules/nuxt/dist/app/composables/state.mjs";
function useDarkMode() {
  const isDarkMode = useState("isDarkMode", () => false);
  const setDarkMode = () => {
    (void 0).documentElement.classList.add("dark-mode");
    (void 0).documentElement.classList.remove("light-mode");
    (void 0).cookie = "colorMode=dark; path=/; max-age=31536000";
    isDarkMode.value = true;
  };
  const setLightMode = () => {
    (void 0).documentElement.classList.add("light-mode");
    (void 0).documentElement.classList.remove("dark-mode");
    (void 0).cookie = "colorMode=light; path=/; max-age=31536000";
    isDarkMode.value = false;
  };
  const checkColorMode = () => {
    var _a;
    const cookies = (void 0).cookie.split(";");
    const colorMode = (_a = cookies.find((cookie) => cookie.trim().startsWith("colorMode="))) == null ? void 0 : _a.split("=")[1];
    if (colorMode === "dark") {
      setDarkMode();
      isDarkMode.value = true;
    } else if (colorMode === "light") {
      setLightMode();
      isDarkMode.value = false;
    } else {
      if ((void 0).matchMedia("(prefers-color-scheme: dark)").matches) {
        setDarkMode();
      } else {
        setLightMode();
      }
    }
  };
  return { setLightMode, checkColorMode, setDarkMode, isDarkMode };
}
export {
  useDarkMode as default
};
//# sourceMappingURL=useDarkMode.mjs.map
