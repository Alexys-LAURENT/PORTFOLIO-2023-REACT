import projets from "../data/projets"

function Carrousel({ id }) {
  const leProjet = projets.find((projet) => projet.id === id)
  return (
    <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="false">
      <div class="carousel-indicators">{leProjet.images.map((image, index) => (index === 0 ? <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to={`${index}`} aria-label={`Slide ${index + 1}`} class="active" aria-current="true"></button> : <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to={`${index}`} aria-label={`Slide ${index + 1}`}></button>))}</div>
      <div class="carousel-inner">
        <div class="carousel-item active">
          <a href={"/images/" + leProjet.images[0].path} target="_blank" rel="noreferrer">
            <img src={"./images/" + leProjet.images[0].path} class="d-block w-100" alt="..."></img>
            <div class="carousel-caption d-none d-md-block">
              <h5>{leProjet.images[0].desc}</h5>
              <p>Cliquez pour consulter</p>
            </div>
          </a>
        </div>
        {leProjet.images.map(
          (image, index) =>
            index > 0 && (
              <div class="carousel-item">
                <a href={"/images/" + image.path} target="_blank" rel="noreferrer">
                  <img src={"./images/" + image.path} class="d-block w-100" alt="..."></img>
                  <div class="carousel-caption d-none d-md-block">
                    <h5>{image.desc}</h5>
                    <p>Cliquez pour consulter</p>
                  </div>
                </a>
              </div>
            )
        )}
      </div>
      <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
  )
}

export default Carrousel
