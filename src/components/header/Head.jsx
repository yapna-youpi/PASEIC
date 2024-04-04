import "./head.css"
const Head = () => {
  return (
    <div>
      <section className='head'>
        <div className="container flexSB">
            <div className="logo">
                <h1 className="text-3xl mb-0"><span className="text-firstColor">PAS</span><span className="text-secondColor">EIC</span></h1>
                <span className="-translate-y-1 inline-block"> Etude - Formation - Travail </span>
            </div>

            <div className="social">
                <div className="fab fa-facebook-f icon"></div>
                <div className="fab fa-linkedin icon"></div>
                <div className="fab fa-whatsapp icon"></div>
                <div className="fab fa-youtube icon"></div>
            </div>
        </div>
      </section>
    </div>
  )
}

export default Head
