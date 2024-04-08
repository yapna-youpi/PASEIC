import Title from "../../../components/title/Title"
import "./hero.css"

const Hero = () => {
  return (
    <>
      <section className="hero">
        <div className="container">
            <div className="row">
              <Title subtitle="WELCOME TO PASEIC" title="Best Professional Education" />
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ad expedita eveniet animi velit quia voluptatibus libero amet odio, perspiciatis modi ipsa voluptate earum. Eum corrupti quaerat incidunt totam modi animi?</p>
            </div>
            <div className="btn_group">
                <button className="primary_btn btn">
                    GET STARTED NOW <i className="fa fa-long-arrow-alt-right"></i>
                </button>
                <button className="btn text-red-600">
                    VIEW COURSES <i className="fa fa-long-arrow-alt-right"></i>
                </button>
            </div>
        </div>
      </section>
      <div className="margin"></div>
    </>
  )
}

export default Hero
