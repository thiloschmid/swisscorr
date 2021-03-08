import React from "react"

const InstituteTitle = ({ logo, title }: any) => (
  <div className="institute-title">
    <img
      className="institute-logo"
      src={logo}
      alt={`logo ${title}`}
      width={150}

    />
    <h2>{title}</h2>
  </div>
)

export default InstituteTitle
