import React from "react"

interface CourseCardProps {
  name: string
  description: string
  keywords?: string
  contact: string
  link?: string
}

const CourseCard = ({
  name,
  description,
  keywords,
  contact,
  link,
}: CourseCardProps) => (
  <div className="course-box">
    <div>
      <h4>{name}</h4>
      <p>{description}</p>
      <p>{contact}</p>
      {keywords && <p>{keywords}</p>}
      {link && (
        <p>
          <a href={link}>Link</a>
        </p>
      )}
    </div>
  </div>
)

export default CourseCard
