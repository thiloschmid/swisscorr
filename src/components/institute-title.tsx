import React from "react"

const InstituteTitle = ({ logo, title }: any) => (
  <div className="institute-title">
    <img
      src={logo}
      height={60}
      style={{
        border: "3px solid whitesmoke",
        padding: ".3rem",
      }}
    />
    <h3>{title}</h3>
  </div>
)

export default InstituteTitle
