import styled from "@emotion/styled"
import { css } from "@emotion/react"

interface MemberCardProps {
  institution: string
  logo: any
  contact: string
  keywords: string
  link: string
  comments: string
}

const MemberBox = styled.div`
  display: flex;
  align-items: stretch;
  flex-flow: row wrap;
  background-color: whitesmoke;
  padding: 1rem;
  margin-bottom: 1rem;

  h4,
  p {
    margin-bottom: 0.7rem;
  }
`

const MemberLogoContainer = styled.div`
  display: flex;
  align-items: center;
  background-color: white;
  margin-right: 1rem;
  margin-bottom: 1rem;
  padding: 0.5rem;
  max-width: 11rem;
`

const MemberLogo = ({ link, logo }: any) => (
  <MemberLogoContainer>
    <a href={link}>
      <img
        src={logo}
        css={css`
          flex-shrink: 1;
          flex-basis: 20%;
          margin: 0;
        `}
      />
    </a>
  </MemberLogoContainer>
)

const MemberDescriptionContainer = styled.div`
  flex-basis: 70%;
  flex-grow: 1;
`

const MemberDescription = ({
  institution,
  contact,
  keywords,
  link,
}: MemberCardProps) => (
  <MemberDescriptionContainer>
    <h4>{institution}</h4>
    <table>
      <tbody>
        <tr>
          <th>Contact</th>
          <td>{contact}</td>
        </tr>
        <tr>
          <th>Competences</th>
          <td>{keywords}</td>
        </tr>
      </tbody>
    </table>
    <a href={link} target="_blank">
      {link}
    </a>
  </MemberDescriptionContainer>
)

const MemberCard = (props: MemberCardProps) => (
  <MemberBox>
    <MemberLogo {...props} />
    <MemberDescription {...props} />
  </MemberBox>
)

export default MemberCard
