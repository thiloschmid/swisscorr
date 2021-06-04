interface CourseCardProps {
  name: string
  description: string
  keywords?: string
  contact: string
  link?: string
  linkText?: string
}

const CourseCard = ({
  name,
  description,
  keywords,
  contact,
  link,
  linkText
}: CourseCardProps) => (
  <div className="course-box">
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
  </div>
)

export default CourseCard
