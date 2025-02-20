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
            C'era una volta, in un angolo tranquillo di Codroipo, una piccola,
            audace idea che avrebbe preso vita con il nome di "Top Bun".
            Ispirato dai film e dalla cultura popolare degli anni '80, questo
            diner non è solo un posto dove mangiare, ma un viaggio temporale che
            ti catapulta nel cuore di un'era che, seppur lontana nel tempo,
            continua ad essere viva nelle nostre menti. Nel 2025, un gruppo di
            appassionati di quegli anni indimenticabili decise di dar vita a un
            nuovo tipo di ristorante: un diner che non fosse solo un luogo per
            gustare hamburger e milkshake, ma anche un'ode a quella cultura che
            ci ha lasciato tanto. Top Bun non è una copia di un diner anni '80,
            è una rivisitazione moderna, che celebra la nostalgia per quei tempi
            dorati, ma con un tocco contemporaneo. Dall'esterno, Top Bun sembra
            un ristorante qualsiasi. Ma appena varchi la soglia, entri in un
            mondo parallelo dove i colori neon, le insegne vintage e la musica
            che spazia dal rock alla new wave ti accolgono. Le pareti sono
            tappezzate di memorabilia anni '80: foto di film cult, vinili, e
            riferimenti a quelli che furono i simboli della cultura giovanile di
            allora. Ogni angolo è pensato per evocare una sensazione di
            familiarità, ma con la giusta dose di ironia e freschezza. Il menu
            di Top Bun è altrettanto un viaggio nel passato, ma non dimentica di
            essere al passo con i tempi. Gli hamburger, preparati con
            ingredienti freschi e di qualità, sono il cuore pulsante del locale.
            Ma accanto ai classici, troverai anche opzioni più moderne, come il
            burger vegetariano o le versioni gourmet, per rispondere alle
            esigenze dei tempi. E non dimentichiamoci dei milkshake, che sono un
            must per ogni visita. Ogni sorso ti farà sentire come se fossi in un
            film di John Hughes, pronto a vivere una giornata indimenticabile.
            La scelta di aprire a Codroipo non è stata casuale. Sebbene la città
            non sia proprio il cuore pulsante della cultura anni '80, è proprio
            qui che il team di Top Bun ha voluto dare vita a un'idea che unisce
            il passato e il presente, il locale e l'universale. Codroipo, con la
            sua tranquillità, è il luogo perfetto per una pausa in un diner che,
            pur non essendo un luogo "storico", sa come evocare un'epoca senza
            tempo. In Top Bun, il passato è sempre vivo, non come un museo, ma
            come un'entusiasta celebrazione di quello che è stato. E chissà,
            forse un giorno sarà proprio questo piccolo diner di provincia a far
            conoscere a una nuova generazione cosa significava davvero essere un
            ragazzo degli anni '80.
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
                <li className="d-flex align-items-center mb-3 fw-bold">
                  <i className="fa-solid fa-phone icon"></i>
                  <span>+39 3347895647</span>
                </li>
                <li className="d-flex align-items-center mb-3 fw-bold">
                  <i className="fa-solid fa-location-dot icon"></i>
                  <span>Via DalleBalle 42 Codroipo</span>
                </li>
                <li className="d-flex align-items-center mb-3 fw-bold">
                  <i className="fa-solid fa-envelope icon"></i>
                  <span>pieoinmarco@gmail.com</span>
                </li>
                <li className="d-flex align-items-center fw-bold">
                  <i className="fa-solid fa-clock icon"></i>
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
