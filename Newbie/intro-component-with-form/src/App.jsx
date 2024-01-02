import "./App.css";
import Forms from "./components/Form";
import Header from "./components/Header";
import HoldText from "./components/HoldText";

function App() {
  return (
    <main className="main">
      <div className="intro">
        <Header
          headingText="Learn to code by watching others"
          headingStyle="header"
        />
        <HoldText
          paraText={` See how experienced developers solve problems in real-time. Watching scripted tutorials is great, 
  but understanding how developers think is invaluable.`}
          paraStyle="para"
        />
      </div>
      <section className="formcontent">
        <Forms />
      </section>
    </main>
  );
}

export default App;
