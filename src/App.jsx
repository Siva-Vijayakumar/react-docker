import Header from "./components/Header";
import Teams from "./components/Teams";
import Matches from "./components/Matches";
import News from "./components/News";
import "./App.css";

function App() {
  return (
    <div className="container">
      <Header />
      <Teams />
      <Matches />
      <News />
    </div>
  );
}

export default App;