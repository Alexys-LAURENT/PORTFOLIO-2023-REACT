import veilles from "../data/veilles.json"
import styled from "styled-components"

const BlackText = styled.div`
  * {
    color: rgba(0, 0, 0, 0.8);
  }
`

const Section = styled.div`
  width: 90%;
  // background-color: rgba(0, 0, 0, 0.1);
  margin: 0 auto;
  * {
    font-weight: 400 !important;
  }
`

const ImgCenter = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-bottom: 20px;
`

function ModalVeille({ id }) {
  const laVeille = veilles.find((veilles) => veilles.id === id) || {}

  return (
    <BlackText className="modal fade" id="VeilleModal" tabIndex="-1" aria-labelledby="VeilleModalLabel" aria-hidden="true">
      <div className="modal-dialog modal-xl modal-dialog modal-dialog-scrollable">
        <div className="modal-content">
          <div className="modal-header">
            <h1 className="modal-title fs-5" id="VeilleModalLabel">
              {laVeille.titre}
            </h1>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div className="modal-body">
            <Section>
              {laVeille.contents.map((content) =>
                content.type === "texte" ? (
                  <p>{content.texte} </p>
                ) : (
                  <ImgCenter>
                    <img src={"/images/" + content.src} width={"80%"} alt={laVeille.titreMin + " image"} />
                  </ImgCenter>
                )
              )}

              <div>
                <p>Source :</p>
                {laVeille.sources.map((source) => (
                  <>
                    <a href={source.urlSource}>{source.titreSource}</a>
                    <br></br>
                  </>
                ))}
              </div>
            </Section>
          </div>
        </div>
      </div>
    </BlackText>
  )
}

export default ModalVeille
