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
      <section id="about">
        <div className="container">
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit odit
            voluptas blanditiis. Quibusdam, pariatur! Libero ipsum laudantium
            culpa consequuntur aliquam, doloribus eveniet odit, illum beatae ad
            quibusdam at vel nostrum. Dignissimos, fugit magni! Mollitia
            voluptas doloremque repellat optio deleniti quaerat, perspiciatis
            quidem soluta libero, porro eligendi commodi nisi? Inventore soluta
            expedita, sit libero harum suscipit exercitationem qui! Distinctio,
            dolores minima! Accusantium soluta voluptatibus possimus consectetur
            cumque ipsam eos at. Ullam esse reiciendis beatae aut modi omnis
            magni sed necessitatibus libero, doloribus ducimus eligendi?
            Voluptatem ipsa vero non laudantium in maiores? Provident dicta
            placeat eaque quis natus, voluptates explicabo molestiae ducimus
            soluta id corporis laborum quasi suscipit fuga blanditiis enim
            delectus alias. Laborum delectus ipsa neque sed? Iste ipsam delectus
            assumenda. Commodi, deserunt nulla? Voluptatum ea sed dolore culpa
            distinctio, soluta, rerum vero cum sequi laborum eius quaerat odit
            cupiditate illo veniam iusto! Non, optio distinctio necessitatibus
            tenetur quod nam recusandae? Similique impedit, laudantium dolor
            aliquam sed voluptate soluta, molestias pariatur consectetur
            laboriosam cupiditate dolores quaerat modi at nulla! Voluptate
            cumque fuga iste temporibus dolores repellendus asperiores velit!
            Labore, eligendi a! Fugit nesciunt inventore dicta adipisci qui sunt
            modi deserunt, ipsa, obcaecati ut reiciendis sequi, cupiditate
            commodi impedit fugiat? Eveniet reprehenderit itaque perspiciatis
            ducimus nemo hic, minima accusantium ratione illum necessitatibus.
            Libero quaerat sequi eveniet culpa aspernatur vitae fugit, aperiam
            distinctio laudantium delectus obcaecati quod unde architecto
            asperiores beatae nemo explicabo vero, quisquam corporis totam
            magnam alias. Aliquid libero tempore necessitatibus? Cum nemo
            deserunt minima in, enim unde iusto commodi tenetur? Eligendi ipsam
            dignissimos fugiat, incidunt in perspiciatis, vel laborum modi
            mollitia eum temporibus. Nam optio dignissimos illo enim odio
            eveniet! Non maxime error magni, aspernatur repudiandae aliquid.
            Impedit possimus molestiae alias dolores at, perferendis nulla,
            placeat voluptas, ea corrupti eveniet quis debitis sit aspernatur
            distinctio iste soluta nam officia dolore?
          </p>
        </div>
      </section>
      <section id="gallery">
        <div className="line">
          <div className="container">
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Distinctio exercitationem nostrum id delectus tenetur illo quaerat
              enim autem quia voluptatum, facere in suscipit blanditiis,
              perspiciatis aspernatur officiis necessitatibus voluptas. Earum!
              Recusandae molestiae exercitationem iure tempore quam velit minus
              pariatur quod beatae vitae mollitia at excepturi nihil temporibus,
              dolorem, ex impedit quas. Ipsum ex consectetur reprehenderit
              eligendi, voluptate cum consequatur corrupti? Tempore
              reprehenderit, quaerat veritatis eius exercitationem ipsa aperiam
              quam, saepe ullam aut quidem facilis, quia distinctio error
              placeat. Repellat voluptates sit blanditiis! Dolore magnam dolor,
              quos consequatur laborum repudiandae eum? Natus ipsum in dolor
              delectus molestias maiores velit consectetur magni earum nobis
              voluptate deleniti debitis, aspernatur reprehenderit ducimus quam
              illum veniam nihil! Tenetur cumque doloremque sed animi quis
              explicabo accusamus? Eius harum amet odit, ea ex reiciendis
              ratione est beatae nesciunt nobis nulla, pariatur sunt laborum
              eaque modi qui dolorem totam nemo magni, non omnis libero quo
              officiis! Dolorem, dolorum! Blanditiis impedit eos reprehenderit
              laboriosam error. Quos, molestiae. Illo id ad deserunt, nemo
              laborum, atque maiores veniam dolores necessitatibus, aperiam
              repellendus. Sed, officia! Facilis placeat, excepturi reiciendis
              porro error commodi. Sunt, corrupti minima perferendis voluptas
              molestiae necessitatibus ab ex adipisci exercitationem, est
              consectetur consequuntur modi officiis aspernatur omnis placeat
              incidunt sapiente quam corporis magnam nihil distinctio unde?
              Suscipit, soluta facere. Et, voluptate dignissimos laborum sequi
              doloremque nesciunt molestiae assumenda rem magni labore aliquid
              odio recusandae. Laborum dolores placeat eligendi, nihil
              laboriosam harum veniam, modi voluptate sequi, eaque
              exercitationem ratione dolorum. Necessitatibus molestias amet
              pariatur ad id doloribus repellat itaque impedit consectetur,
              suscipit quod sit nobis tenetur sunt ipsam nostrum maiores hic
              neque accusamus voluptates, rerum facilis laborum, aspernatur
              praesentium! Quam. Enim repellat libero explicabo ab porro
              quisquam, perferendis excepturi, tempora culpa inventore
              voluptatum quod nostrum magnam omnis, mollitia veniam suscipit
              nisi ullam. Magni, explicabo impedit! Laborum, quo possimus.
              Sapiente, deserunt? Beatae quibusdam molestias est, ex nam dolores
              consectetur veritatis enim nostrum soluta excepturi, nulla
              architecto deserunt magni aut laudantium eaque autem. Repellat
              maxime expedita molestiae. Dolor distinctio facilis molestias
              vitae. Dolorum ad architecto voluptas nihil corrupti inventore
              aliquam reiciendis eaque fugiat? Qui tempora ex eius laborum rem
              quia voluptatibus asperiores dolore excepturi deserunt, fuga
              laudantium ipsum hic non modi? Placeat. Voluptates quis, harum
              inventore officiis adipisci, sequi animi deleniti possimus placeat
              expedita soluta dignissimos rem amet commodi corporis cumque.
              Minus iure inventore provident quo ut molestiae asperiores
              doloremque suscipit corrupti. Nisi maiores perspiciatis minima
              delectus magni odio quod molestias tempore culpa dolores
              consequatur non, officiis earum ipsum omnis enim reiciendis
              ratione et voluptatum hic veritatis! Numquam doloribus a voluptas
              est! Sapiente mollitia nihil corporis harum neque quae ea ipsam
              nisi voluptatibus? Rerum pariatur quidem architecto a vel soluta,
              quis aspernatur libero dolor nihil dicta in deserunt est ab at
              quas?
            </p>
          </div>
        </div>
      </section>
      <section id="contact-section">
        <div className="contact-section">
          <div className="container">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Obcaecati, autem voluptatem. Qui, pariatur quam repudiandae illum
              quidem corporis architecto numquam dicta exercitationem itaque!
              Voluptate facere dolor corporis excepturi natus sapiente!
              Molestias vitae quo ipsa accusantium cupiditate, tempora optio
              ratione eius perspiciatis neque et, deleniti vel atque, minus
              exercitationem sunt quas ut necessitatibus! Alias dignissimos
              fugiat necessitatibus harum commodi mollitia molestiae? Provident
              deserunt officia nulla ipsa ad impedit molestias ipsam expedita
              quia eveniet neque beatae aspernatur, laudantium laborum illum in
              temporibus sunt id, numquam, veritatis iure voluptatem
              necessitatibus! Aut, dolor aperiam. Quos nostrum, nihil recusandae
              sed ducimus saepe cumque sunt vitae repellendus illum ipsam
              quaerat minima accusantium earum quia? Dolorem quaerat iste
              temporibus dolore quis laborum atque velit officiis aut
              recusandae? Magnam quibusdam obcaecati reprehenderit commodi
              deleniti enim dolores consectetur numquam sequi voluptatem sit
              quaerat cum aperiam, nulla aliquam neque nostrum illo,
              exercitationem optio pariatur ex rem. Incidunt praesentium placeat
              id! Officia saepe laudantium recusandae vel accusamus, ea
              doloremque dolor? Animi numquam nobis reiciendis, magnam accusamus
              alias assumenda pariatur libero inventore laudantium enim sed non
              dolorem consectetur, adipisci perspiciatis tempore quibusdam!
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
