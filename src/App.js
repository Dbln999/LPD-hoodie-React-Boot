import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import { NavComponent } from "./components/NavComponent";
import { Main } from "./components/Main";
import gilbert from './images/gilbert.png'
import nike from "./images/nike.png";

function App() {
  const listOfHoodie = [
    { id: 0, src: gilbert, title: "Gilbert" },
    { id: 1, src: nike, title: "Nike" },
  ];

  return (
    <div className="App bg-navColor">
      <header>
        <NavComponent />
      </header>
      <main>
           <Main hoodies={listOfHoodie}></Main>;
      </main>
    </div>
  );
}

export default App;
