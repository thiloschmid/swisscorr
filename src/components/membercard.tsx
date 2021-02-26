import React from "react"

interface MemberCardProps {
  name: string
  logo: any
  organisation: string
  competences: string
}

const MemberCard = ({
  name,
  logo,
  organisation,
  competences,
}: MemberCardProps) => (
  <div className="member-box">
    <img src={logo} className="member-logo" />
    <div className="member-description">
      <h5>{name}</h5>
      <span>{organisation}</span>
      <h5>Competences</h5>
      <p>{competences}</p>
    </div>
  </div>
)

export default MemberCard
