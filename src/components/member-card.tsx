import React from "react"

interface MemberCardProps {
  institution: string
  logo: any
  contact: string
  keywords: string
  link: string
  comments: string
}

const MemberCard = ({
  institution,
  logo,
  contact,
  keywords,
  link,
  comments,
}: MemberCardProps) => (
  <div className="member-box">
    <div className="member-logo-container">
    <img src={logo} className="member-logo" />
    </div>
    <div className="member-description">
      <h4>{institution}</h4>
      <p>{contact}</p>
      <p>{keywords}</p>
      <p><a href={link} target="_blank">{link}</a></p>
      <p>{comments}</p>
    </div>
  </div>
)

export default MemberCard
