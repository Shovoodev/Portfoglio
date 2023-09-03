export default function HeroSection() {
  return (
    <section id="heroSection" className="hero--section">
      <div className="hero--section--content--box">
        <div className="hero--section--content">
          <p className="section--title">Hey, I'm Toukir</p>
          <h1 className="hero--section--title">
            <span className="hero--section-title--color">Frontend with basic backend </span>{" "}
            Developer
          </h1>
          <p className="hero--section-description">
            Full time programming with thrust for learning .....
            <br /> Dolorum, quas. Amet soluta assumenda cum?
          </p>
        </div>
        <button className="btn btn-primary">Get In Touch</button>
      </div>
      <div className="hero--section--img">
        <img src="./img/hero_img.png" alt="Hero Section" />
      </div>
    </section>
  );
}
