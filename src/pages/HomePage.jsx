export default function HomePage() {
  return (
    <div className="wrapper">
      <section id="hero-section">
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
          <div className="row">
            <div className="col-9"></div>
            <div className="col-4">
              <h2 className="section-title">Menu</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam
                vel delectus cumque fugiat sunt magnam eligendi quia libero
                nostrum dignissimos. Rem, adipisci. Ab sed veritatis similique
                amet quia atque! Autem. Dolorum commodi quas, aspernatur sint
                incidunt obcaecati at mollitia atque blanditiis ea? Cupiditate
                excepturi magnam exercitationem et deleniti! Consequatur saepe
                eveniet incidunt doloribus recusandae aliquid expedita eius
                quisquam reiciendis perferendis. Quod earum cumque in maxime
                possimus facilis, laboriosam vitae laborum alias rem architecto
                eum omnis et ratione totam repellat ut nobis reiciendis aperiam
                temporibus quam incidunt. Natus amet minima consectetur? Amet a
                illum sapiente ad ipsam nihil voluptatem, tempora, eius voluptas
                ea officia officiis deserunt autem laboriosam voluptatibus at
                magni necessitatibus, laudantium eos earum? Nobis necessitatibus
                consequatur ratione ea est? Quae, repellat labore dolorum,
                molestiae quod officia sequi laborum, cum corrupti cupiditate in
                praesentium! Dolor ipsum quas quae, minima esse error!
                Perspiciatis exercitationem iure et. Non perferendis fuga vel
                optio! Unde libero tempora tenetur sit hic reprehenderit
                incidunt rerum adipisci, labore optio qui consectetur, mollitia
                deserunt? Quia obcaecati ab labore ex! Odit quas alias
                recusandae, officiis ut tenetur error praesentium? Veritatis
                pariatur dolores libero corrupti ipsa est modi eligendi, quidem
                dignissimos rerum sequi iste omnis, magnam, alias optio maxime
                quod cupiditate fugit sed laudantium impedit unde. Nisi numquam
                nihil unde. Hic exercitationem corrupti, error natus dicta
                dolores animi nesciunt. Velit aliquam placeat ut eveniet
                praesentium sunt explicabo voluptatum quibusdam rem libero, vel,
                totam nam suscipit laboriosam architecto officiis assumenda qui?
                Rerum, optio ullam! Blanditiis harum veniam eveniet, possimus id
                consequuntur illum voluptatem reiciendis non? Animi voluptates
                debitis neque natus beatae voluptate ad ipsum veritatis! Minus
                quo ab voluptate excepturi nesciunt. Quo maxime placeat nam
                voluptate saepe numquam! Alias amet labore consequuntur beatae
                vitae molestiae eos, dolorem aspernatur at sunt eligendi id
                totam omnis assumenda qui veniam autem cumque velit illo!
              </p>
            </div>
          </div>
        </div>
      </section>
      <section id="events-section">
        <div className="contaioner">
          <div className="carousel-container">
            <div id="carouselExample" className="carousel slide">
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <img src="..." className="d-block w-100" alt="..." />
                </div>
                <div className="carousel-item">
                  <img src="..." className="d-block w-100" alt="..." />
                </div>
                <div className="carousel-item">
                  <img src="..." className="d-block w-100" alt="..." />
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
