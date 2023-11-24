import { projectContents } from "./data";

const Hero = () => {
  const { bg_img, name, nots, title, content, btn, pre } =
    projectContents.projectpage;
  return (
    <main className="hero">
      <div className="illustration">
        <div className=" decoration"></div>
      </div>
      <section className="template">
        <div className="first_text">
          <span className="text1">{nots}</span>
          <span className="text2">{name}</span>
        </div>
        <h1>{title}</h1>
        <p>{content}</p>
        <div className="second_text">
          <button className="btn">{btn}</button>
          <span className="text3">{pre}</span>
        </div>
      </section>
    </main>
  );
};

export default Hero;
