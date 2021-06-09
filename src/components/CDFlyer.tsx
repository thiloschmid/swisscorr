import styled from "@emotion/styled"
import { css } from "@emotion/react"

const FlyerBox = styled.div`
  flex-basis: 40%;
  flex-grow: 1;
  background-color: whitesmoke;
  margin: 0.5rem;
  padding: 1rem;
  min-width: 300px;
`

const FlyerImageOverlay = styled.div`
  display: flex;
  text-align: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  opacity: 0;
  background-color: rgb(121, 121, 121);

  a {
    padding: 1rem;
    color: white;
    text-decoration: none;
  }

  @media (max-width: 900px) {
    opacity: 1;
  }
`

const FlyerContainer = styled.div`
  position: relative;
  transition: 0.5s ease;

  picture {
    transition: 0.5s ease;
  }

  &:hover picture {
    opacity: 0.3;
  }

  &:hover ${FlyerImageOverlay} {
    opacity: 1;
  }
`

const CorrosionDayCard = ({ picture, download, title }: any) => (
  <FlyerBox>
    <h2
      css={css`
        text-decoration: none;
      `}
    >
      {title}
    </h2>
    <FlyerContainer>
      {picture}
      <FlyerImageOverlay>
        <a href={download} download>
          Download
        </a>
      </FlyerImageOverlay>
    </FlyerContainer>
  </FlyerBox>
)

export default CorrosionDayCard
