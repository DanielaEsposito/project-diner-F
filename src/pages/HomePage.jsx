import { Link } from "react-router-dom";

export default function HomePage() {
  return (
    <div className="wrapper">
      <section id="hero-section">
        <div className="background-wrapper">
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
        <div className="container h-100">
          <div className="row h-100">
            <div className="col-8">
              <div className="img-container">
                <div className="background-triangle-menu"></div>
                <div className="background-triangle-black-menu"></div>
                <div className="img"></div>
                <div className="img-background"></div>
              </div>
            </div>
            <div className="col-4 mt-5 pt-5">
              <h2 className="section-title text-light monoton-regular text-center">
                Menu
              </h2>
              <div className="section-description position-relative">
                <p className="my-4 text-light section-text fs-5">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Beatae perspiciatis praesentium, nostrum quae adipisci minima,
                </p>
              </div>
              <div className="d-flex justify-content-center">
                <Link to={"/menu"} className="text-light btn btn-primary mt-4">
                  Vai al Menu
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="events-section">
        <div className="line">
          <div className="container h-100">
            <div className="row h-100">
              <div className="col-5 px-5 mt-5 pt-5">
                <h2 className="section-title text-light monoton-regular mt-5 text-center">
                  EVENTI
                </h2>
                <div className="section-description position-relative">
                  <h3 className="my-4 text-light section-text fs-5">
                    Scopri gli eventi in programma per questa settimana
                  </h3>
                </div>
                <div className="d-flex justify-content-center">
                  <Link
                    to={"/event"}
                    className="text-light btn btn-primary mt-4"
                  >
                    Vai al Menu
                  </Link>
                </div>
              </div>
              <div className="col-7 ps-3 d-flex flex-column justify-content-center">
                <div className="carousel-container">
                  <div id="carouselExample" className="carousel slide">
                    <div className="carousel-inner">
                      <div className="carousel-item active">
                        <div className="carousel-img">
                          <img
                            src="hero-section.png"
                            alt=""
                            className="hero-section-img"
                          />
                          <div className="info-container">
                            <div className="background-y"></div>
                            <div className="background-black"></div>
                            <div className="event-title-container">
                              <div className="event-title text-center">
                                EVENTO
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="carousel-item ">
                        <div className="carousel-img bg-dark">
                          <div className="info-container">
                            <div className="background-y"></div>
                            <div className="background-black"></div>
                            <div className="event-title-container">
                              <div className="event-title text-center">
                                EVENTO
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="carousel-item ">
                        <div className="carousel-img bg-info">
                          <div className="info-container">
                            <div className="background-y"></div>
                            <div className="background-black"></div>
                            <div className="event-title-container">
                              <div className="event-title text-center">
                                EVENTO
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <button
                      className="carousel-control-prev"
                      type="button"
                      data-bs-target="#carouselExample"
                      data-bs-slide="prev"
                    >
                      <i class="fa-regular fa-circle-left fa-2xl fs-1"></i>
                    </button>
                    <button
                      className="carousel-control-next"
                      type="button"
                      data-bs-target="#carouselExample"
                      data-bs-slide="next"
                    >
                      <i class="fa-regular fa-circle-right fa-2xl fs-1"></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
