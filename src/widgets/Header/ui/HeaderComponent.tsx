import "./HeaderComponent.scss";
import logo from "@shared/assets/svg/logo.svg";

export const HeaderComponent = () => {
  return (
    <div className={"Header"}>
      <img src={logo} alt={"Logo"} className={"Header__logo"} />
      <h1 className={"Header__title"}>Поиск авиабилетов</h1>
    </div>
  );
};
