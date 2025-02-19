export default function HomePage() {
  return (
    <div className="wrapper">
      <section id="hero-section" className="h-100">
        <div className="back-ground-hero">
          <div className="colored-backgroun-hero"></div>
        </div>
        <div className="container">
          <div className="title-container text-light text-center">
            <h1 className="top-bun monoton-regular">TOP BUN</h1>
            <h2>EVEN THE BEST PILOTS NEED TO REFUEL</h2>
          </div>
        </div>
      </section>
      <section id="menu-section">
        <div className="container">
          <div className="row ">
            <div className="col-8">
              <div className="img-container">
                <div className="img"></div>
              </div>
            </div>
            <div className="col-4">
              <h2 className="section-title text-light monoton-regular mt-4 text-center">
                Menu
              </h2>
              <div className="section-description position-relative">
                <p className="my-4 text-light section-text">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Beatae perspiciatis praesentium, nostrum quae adipisci minima,
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="events-section" className="my-5">
        <div className="contaioner">
          <div className="carousel-container">
            <div id="carouselExample" className="carousel slide">
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <div className="carousel-img"></div>
                </div>
                <div className="carousel-item ">
                  <div className="carousel-img bg-dark"></div>
                </div>
                <div className="carousel-item ">
                  <div className="carousel-img bg-info">
                    <h3>EVENTO</h3>
                  </div>
                </div>
              </div>
              <button
                className="carousel-control-prev"
                type="button"
                data-bs-target="#carouselExample"
                data-bs-slide="prev"
              >
                <span
                  className="carousel-control-prev-icon"
                  aria-hidden="true"
                ></span>
                <span className="visually-hidden">Previous</span>
              </button>
              <button
                className="carousel-control-next"
                type="button"
                data-bs-target="#carouselExample"
                data-bs-slide="next"
              >
                <span
                  className="carousel-control-next-icon"
                  aria-hidden="true"
                ></span>
                <span className="visually-hidden">Next</span>
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
