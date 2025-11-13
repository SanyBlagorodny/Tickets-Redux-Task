import "./HeaderComponent.scss";
import logo from "@shared/assets/svg/logo.svg";
import { ThemeToggle } from "@shared/ui/ThemeToggle/ThemeToggle.tsx";

export const HeaderComponent = () => {
  return (
    <div className={"Header"}>
      <img src={logo} alt={"Logo"} className={"Header__logo"} />
      <div className={"Header__center"}>
        <h1 className={"Header__title"}>Поиск авиабилетов</h1>
        <ThemeToggle />
      </div>
    </div>
  );
};
