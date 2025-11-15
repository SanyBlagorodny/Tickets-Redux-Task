import "./HeaderComponent.scss";
import logo from "@shared/assets/svg/logo.svg";
import { ThemeSwitch } from "@features/theme/ui/ThemeSwitch/ThemeSwitch";

export const HeaderComponent = () => {
  return (
    <div className={"Header"}>
      <div className="Header__brand">
        <img src={logo} alt={"Logo"} className={"Header__logo"} />
        <h1 className={"Header__title"}>Поиск авиабилетов</h1>
      </div>
      <ThemeSwitch />
    </div>
  );
};
