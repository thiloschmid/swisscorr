import React from "react"

const CorrosionDayCard = ({ pdf, download, title }: any) => (
  <a href={download} download>
    <div
      className="flyer-box"
      style={{
        width: "100rem",
        height: "10rem",
        background: "green",
        margin: "1rem",
      }}
    >
        <h2 style={{textDecoration: "none"}}>{title}</h2>
      {pdf}
    </div>
  </a>
)

export default CorrosionDayCard
