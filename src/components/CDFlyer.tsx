import React from "react"

const CorrosionDayCard = ({ picture, download, title }: any) => (
  <div className="flyer-box">
    <h2 style={{ textDecoration: "none" }}>{title}</h2>
    <div className="flyer-container">
      {picture}
      <div className="flyer-image-overlay">
        <a href={download} download>
          Download
        </a>
      </div>
    </div>
  </div>
)

export default CorrosionDayCard
