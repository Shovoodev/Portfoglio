export default function ContactMe() {
  return (
    <section id="Contact" className="contact--section">
      <div>
        <p className="sub--title">Get In Touch</p>
        <h1>Contact Me</h1>
        <p className="text-lg">
         
        Experienced Frontend Web Developer with a strong command of HTML5, CSS, and JavaScript to create dynamic and visually appealing websites. Possesses a foundational understanding of backend development principles, enabling effective collaboration with backend teams. Proven proficiency in game development utilizing Unity and C# as hobby . A passionate learner, dedicated to blending frontend creativity with backend logic to deliver exceptional user experiences.
        </p>
      </div>
      <form className="contact--form--container">
        <div className="container">
          <label htmlFor="first-name" className="contact--label">
            <span className="text-md">First Name</span>
            <input
              type="text"
              className="contact--input text-md"
              name="first-name"
              id="first-name"
              required
            />
          </label>
          <label htmlFor="last-name" className="contact--label">
            <span className="text-md">Last Name</span>
            <input
              type="text"
              className="contact--input text-md"
              name="last-name"
              id="last-name"
              required
            />
          </label>
          <label htmlFor="email" className="contact--label">
            <span className="text-md">Email</span>
            <input
              type="email"
              className="contact--input text-md"
              name="email"
              id="email"
              required
            />
          </label>
          <label htmlFor="phone-number" className="contact--label">
            <span className="text-md">phone-number <span style={{"font-size":"10px", "color":"blue"}}>optional</span></span>
            <input
              required
              className="contact--input text-md"
              name="phone-number"
              id="phone-number"
            />
          </label>
        </div>
        <label htmlFor="choode-topic" className="contact--label">
          <span className="text-md">Choose a topic</span>
          <select id="choose-topic" className="contact--input text-md">
            <option>Topic to discuss...</option>
            <option> About any kind of help</option>
            <option>About any kind of information </option>
            <option> About my life</option>
          </select>
        </label>
        <label htmlFor="message" className="contact--label">
          <span className="text-md">Message</span>
          <textarea
            className="contact--input text-md"
            id="message"
            rows="8"
            placeholder="Why you are so cool.."
          />
        </label>
        <label htmlFor="checkboc" className="checkbox--label">
          <input type="checkbox" required name="checkbox" id="checkbox" />
          <span className="text-sm">I accept the terms<span style={{"font-size":"12px", "color":"blue"}}> (if not dont worry)</span></span>
        </label>
        <div>
          <button className="btn btn-primary contact--form--btn">Submit</button>
        </div>
      </form>
    </section>
  );
}
