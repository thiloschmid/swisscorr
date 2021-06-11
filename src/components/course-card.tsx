import styled from "@emotion/styled"

interface CourseCardProps {
  children?: JSX.Element[]
  name: string
  description: string | (string | JSX.Element)[]
  keywords?: string
  contact?: string
  link?: string
  linkText?: string
}

const CourseContainer = styled.div`
  display: flex;
  align-items: center;
  flex-flow: row nowrap;
  background-color: whitesmoke;
  padding: 1rem;
  margin-bottom: 1rem;

  h4,
  p {
    margin-bottom: 0.7rem;
  }
`

const CourseCard = ({
  children,
  name,
  description,
  keywords,
  contact,
  link,
  linkText,
}: CourseCardProps) => (
  <CourseContainer>
    <div>
      <h4>{name}</h4>
      <p>{description}</p>
      {contact && <p>{contact}</p>}
      {keywords && <p>{keywords}</p>}
      {link && (
        <p>
          <a href={link}>{linkText || "Link"}</a>
        </p>
      )}
      {children}
    </div>
  </CourseContainer>
)

export default CourseCard
