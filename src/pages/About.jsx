export default function About() {
  return (
    <div className="about-page py-5">
      <div className="text-center my-5">
        <h1 className="top-bun monoton-regular">TOP BUN</h1>
      </div>

      <div className="container mb-5 story-section">
        <div className="story-box">
          <h2 className="story-title text-center monoton-regular my-3">
            LA NOSTRA STORIA
          </h2>
          <p className="story-text text-center">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quis ad
            non amet dolores distinctio eligendi asperiores reprehenderit,
            officia porro, pariatur ut eaque provident error totam mollitia iure
            a. In, nobis! Facilis nam voluptatem inventore, perferendis amet, ut
            quibusdam deleniti possimus reprehenderit temporibus minus nesciunt
            accusantium mollitia corporis repellat cupiditate architecto.
            Repellat deleniti, similique nobis sed dolorem ratione dignissimos
            iusto veritatis? Corrupti sequi adipisci voluptatum ex. Veniam,
            totam minima. Dolorum tempora harum ex natus necessitatibus commodi,
            sit suscipit mollitia, facere aspernatur recusandae minima numquam
            voluptate porro animi iusto dolores, obcaecati amet! A mollitia
            assumenda illo reiciendis fugiat, voluptatum libero ipsa odio
            itaque, suscipit tenetur quidem perspiciatis corporis quo
            repellendus, placeat tempora labore hic dolorem. Minus odit
            consectetur sapiente, impedit exercitationem ab! Placeat quaerat
            numquam enim quo porro! Et tenetur quod hic ut nihil doloribus, amet
            iusto sed, illum soluta officia, officiis id! Modi impedit, quisquam
            totam ab aut dolor consectetur sit! Possimus consectetur libero
            pariatur delectus cumque aliquid, consequuntur quos quae non,
            temporibus nam eius quidem, quas qui unde officiis soluta. Ea
            nostrum modi repudiandae officiis! Rem quisquam modi veritatis
            ipsam. Unde molestiae ex eos veniam rerum recusandae corporis qui
            labore? Voluptas tempora quod hic voluptatem fugiat cupiditate
            molestiae sed, assumenda facilis suscipit eos amet labore blanditiis
            fugit deleniti placeat at? Quod voluptates enim consequatur
            consectetur? Labore ab placeat fuga cupiditate, reprehenderit
            consequatur, veritatis atque totam corporis eveniet nisi ex quod
            quasi a officiis quam! Atque qui animi illum reprehenderit facere!
          </p>
        </div>
      </div>

      <div className="container">
        <div className="row">
          <div className="col-7 d-flex flex-column justify-content-center align-items-center">
            <div className="contacts-section rounded-box p-5 mt-5">
              <h3 className="contacts-title monoton-regular text-center">
                CONTATTI
              </h3>
              <ul className="contacts-list list-unstyled">
                <li className="d-flex align-items-center mb-2">
                  <i
                    className="fa-solid fa-phone text-black me-3"
                    style={{ width: "25px", textAlign: "center" }}
                  ></i>
                  <span>+39 3347895647</span>
                </li>
                <li className="d-flex align-items-center mb-2">
                  <i
                    className="fa-solid fa-location-dot text-black me-3"
                    style={{ width: "25px", textAlign: "center" }}
                  ></i>
                  <span>Via DalleBalle 42 Codroipo</span>
                </li>
                <li className="d-flex align-items-center mb-2">
                  <i
                    className="fa-solid fa-envelope text-black me-3"
                    style={{ width: "25px", textAlign: "center" }}
                  ></i>
                  <span>pieoinmarco@gmail.com</span>
                </li>
                <li className="d-flex align-items-center">
                  <i
                    className="fa-solid fa-clock text-black me-3"
                    style={{ width: "25px", textAlign: "center" }}
                  ></i>
                  <span>Aperti Mar - Ven 12:00 - 01:00</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="col-5 d-flex align-items-center justify-content-center mt-5">
            <img
              src="https://placehold.co/600x400"
              alt="placeholder persone"
              className="img-fluid"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
