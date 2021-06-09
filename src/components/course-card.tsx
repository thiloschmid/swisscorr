import styled from "@emotion/styled"

interface CourseCardProps {
  name: string
  description: string
  keywords?: string
  contact: string
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
      <p>{contact}</p>
      {keywords && <p>{keywords}</p>}
      {link && (
        <p>
          <a href={link}>{linkText || "Link"}</a>
        </p>
      )}
    </div>
  </CourseContainer>
)

export default CourseCard
