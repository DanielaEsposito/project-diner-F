export default function Events() {
  return (
    <>
      <div className="container">
        <div className="title-container text-light text-center">
          <h1 className="top-bun monoton-regular">EVENTI</h1>
        </div>

        <section className="event-section mt-3 position-relative">
          <div className="small-rectangle position-absolute"></div>
          <div className="small-rectangle-blue position-absolute"></div>
          <div className="event-title-arrow-black position-absolute"></div>
          <div className="event-title-arrow position-absolute"></div>
          <div className="rectangle-event-shape bg-danger px-5">
            <div class="position-absolute event-title">
              <div className="">
                <h1 className="text-center top-positioning">KARAOKE NIGHT</h1>
              </div>
            </div>

            <div className="d-flex pt-5">
              <div className="image">
                <img
                  src="../../public/event-placeholder.png"
                  className="event-placeholder "
                />
              </div>
              <div className="event-text d-flex flex-column align-items-center justify-content-center">
                <h2 className="event-infos text-light">
                  SABATO 24 MAGGIO <br />
                  19:00 - 01:00
                </h2>
                <p className="fs-3 event-description-text py-5">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Accusamus numquam fuga quia quisquam, a, itaque labore tenetur
                  similique architecto eveniet magnam voluptatibus quo placeat
                  quaerat dignissimos unde nostrum dolore. Reiciendis?
                </p>
                <h2 className="event-infos-number text-light">
                  INFO E PRENOTAZIONI: +39 3345675932
                </h2>
              </div>
            </div>
          </div>
        </section>

        <section className="event-section mt-3 position-relative">
          <div className="triangle-event-black position-absolute"></div>
          <div className="triangle-event position-absolute"></div>
          <div className="circle-event-black position-absolute"></div>
          <div className="circle-event position-absolute"></div>

          <div className="event-title-arrow-black position-absolute"></div>
          <div className="event-title-arrow position-absolute"></div>
          <div className="rectangle-event-shape bg-warning px-5">
            <div class="position-absolute event-title">
              <div className="">
                <h1 className="text-center top-positioning">KARAOKE NIGHT</h1>
              </div>
            </div>

            <div className="d-flex pt-5">
              <div className="image">
                <img
                  src="../../public/event-placeholder.png"
                  className="event-placeholder "
                />
              </div>
              <div className="event-text d-flex flex-column align-items-center justify-content-center">
                <h2 className="event-infos text-light">
                  SABATO 24 MAGGIO <br />
                  19:00 - 01:00
                </h2>
                <p className="fs-3 event-description-text py-5">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Accusamus numquam fuga quia quisquam, a, itaque labore tenetur
                  similique architecto eveniet magnam voluptatibus quo placeat
                  quaerat dignissimos unde nostrum dolore. Reiciendis?
                </p>
                <h2 className="event-infos-number text-light">
                  INFO E PRENOTAZIONI: +39 3345675932
                </h2>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
