import "./App.scss";
import { HeaderComponent } from "@widgets/Header/ui/HeaderComponent.tsx";
import { MainComponent } from "@widgets/Main/ui/MainComponent.tsx";
const App = () => {
  return (
    <div className={"App"}>
      <header>
        <HeaderComponent />
      </header>
      <main>
        <MainComponent />
      </main>
    </div>
  );
};
export default App;
