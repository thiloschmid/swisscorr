import styled from "@emotion/styled"
import { css } from "@emotion/react"

const InstituteTitleContainer = styled.div`
  margin-bottom: 0.4rem;
  display: flex;
  align-items: center;

  h2,
  h3 {
    margin-bottom: 0;
  }
`

const InstituteTitle = ({ logo, title, link }: any) => (
  <InstituteTitleContainer>
    <a href={link}>
      <img
        src={logo}
        alt={`logo ${title}`}
        width={150}
        css={css`
          border: 2px solid whitesmoke;
          padding: 0.3rem;
          margin-bottom: 0;
          margin-right: 1rem;
        `}
      />
    </a>
    <h2>{title}</h2>
  </InstituteTitleContainer>
)

export default InstituteTitle
