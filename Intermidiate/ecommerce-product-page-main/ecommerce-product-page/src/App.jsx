import { Header } from "./components/Header";
import { Article } from "./components/Card_Article";
import { Buttons } from "./components/Buttons";
import CountProvider from "./Context";
import { ImageDisplay } from "./components/DisplayImage";

function App() {
  return (
    <CountProvider>
      <div className=" font-kumbh w-80 lg:w-10/12 lg:max-w-5xl px-3 py-2 mx-auto duration-200">
        <Header />
        <section className="lg:grid grid-cols-2 justify-items-center duration-400 items-center justify-between ">
          <ImageDisplay />
          <section className=" space-y-4 lg:w-4/6 ">
            <Article />
            <Buttons />
          </section>
        </section>
      </div>
    </CountProvider>
  );
}

export default App;
