import React from "react"

const InstituteTitle = ({ logo, title }: any) => (
  <div className="institute-title">
    <img
      className="institute-logo"
      src={logo}
      alt={`logo ${title}`}
      height={60}
    />
    <h3>{title}</h3>
  </div>
)

export default InstituteTitle
