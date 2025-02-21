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
          <p className="story-text text-center anton-regular">
            Top Bun, situato a Codroipo, è un diner che celebra la cultura pop
            degli anni '80, rivisitata con uno stile moderno. Non è solo un
            ristorante, ma un vero e proprio viaggio nel tempo che porta con sé
            tutta l'energia e la nostalgia di quegli anni indimenticabili. Non
            appena entri, vieni accolto da colori neon, insegne vintage e una
            collezione di memorabilia: foto di film cult, vinili e simboli
            iconici della cultura giovanile dell'epoca. Ogni angolo del locale è
            pensato per evocare una sensazione di familiarità, ma con la giusta
            dose di freschezza e ironia. Il menu di Top Bun è un omaggio alla
            cucina tipica dei diner americani, ma con un occhio attento alla
            modernità. Gli hamburger, preparati con ingredienti freschi e di
            qualità, sono il cuore pulsante del locale, ma ci sono anche opzioni
            moderne come burger vegetariani e versioni gourmet. I milkshake, che
            non possono mancare, sono una vera e propria esperienza da gustare,
            immergendosi completamente nell’atmosfera retrò del locale. La
            scelta di aprire a Codroipo non è stata casuale: sebbene la città
            non sia un epicentro della cultura degli anni '80, la sua
            tranquillità è il contesto ideale per un diner che unisce passato e
            presente, regalando ai clienti un angolo di nostalgia che sa di
            moderno. In Top Bun, gli anni '80 non sono solo un ricordo, ma una
            vera e propria celebrazione di un'era che continua a ispirare anche
            oggi.
          </p>
        </div>
      </div>

      <div className="container">
        <div className="row">
          <div className="col-7 d-flex flex-column justify-content-center align-items-center">
            <div className="contacts-section rounded-box p-5 mt-5">
              <h3 className="contacts-title monoton-regular text-center mb-5">
                CONTATTI
              </h3>
              <ul className="contacts-list list-unstyled">
                <li className="d-flex align-items-center mb-3 fw-bold">
                  <i className="fa-solid fa-phone icon"></i>
                  <span className="anton-regular">+39 3347895647</span>
                </li>
                <li className="d-flex align-items-center mb-3 fw-bold">
                  <i className="fa-solid fa-location-dot icon"></i>
                  <span className="anton-regular">
                    Via Dalle Balle, 42 - Codroipo (UD)
                  </span>
                </li>
                <li className="d-flex align-items-center mb-3 fw-bold">
                  <i className="fa-solid fa-envelope icon"></i>
                  <span className="anton-regular">
                    quattroallegriragazzimorti@hello.com
                  </span>
                </li>
                <li className="d-flex align-items-center fw-bold">
                  <i className="fa-solid fa-clock icon"></i>
                  <span className="anton-regular">
                    Aperti Mar - Dom 12:00 - 01:00
                  </span>
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
