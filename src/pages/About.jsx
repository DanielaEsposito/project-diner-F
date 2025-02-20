export default function About() {
  return (
    <div className="about-page py-5">
      <div className="text-center mb-5">
        <h1 className="top-bun monoton-regular">TOP BUN</h1>
      </div>

      <div className="container mb-5 story-section">
        <div className="story-box">
          <h2 className="story-title text-center">LA NOSTRA STORIA</h2>
          <p className="story-text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum
            eius placeat fugit a aperiam cumque consequuntur distinctio aliquid
            aspernatur, dolor fugiat eligendi libero ea nulla amet excepturi
            soluta nisi consequatur! Minus obcaecati est laudantium mollitia at!
            Nostrum temporibus alias animi explicabo nemo? Tenetur odit quis
            numquam nesciunt perspiciatis doloribus reprehenderit cupiditate,
            nihil dolorum exercitationem? Architecto dolorem expedita amet quas
            atque. Quos, labore placeat cumque distinctio sed esse nihil eos
            dicta architecto quisquam sunt! Dolorum voluptatibus suscipit neque,
            reprehenderit quae perspiciatis modi, porro aspernatur doloribus
            ipsum quasi ab beatae, iusto odio? Dolore inventore, doloribus cum
            fuga officia distinctio quidem. Animi beatae blanditiis vero, harum
            quibusdam quae inventore similique, veritatis autem provident amet
            ipsa, voluptatibus a laudantium maiores est non sapiente minus. Vero
            accusantium ducimus accusamus eligendi. Alias expedita nam
            consequuntur magnam quisquam, voluptatum ad officiis facilis nostrum
            illo consequatur minima, deleniti corporis assumenda explicabo quo?
            Voluptatem omnis consequatur quia nobis exercitationem!
          </p>
        </div>
      </div>

      <div className="container contacts-section">
        <h3 className="contacts-title">CONTATTI</h3>
        <div className="row">
          <div className="col-7">
            <ul className="contacts-list">
              <li>📞 +39 3347895647</li>
              <li>📍 Via DalleBalle 42 Codroipo</li>
              <li>📧 pieoinmarco@gmail.com</li>
              <li>🕒 Aperti Mar - Ven 12:00 - 01:00</li>
            </ul>
          </div>
          <div className="col-5">
            <img
              src="https://placehold.co/600x400"
              alt="Placeholder persone"
              className="img-fluid"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
