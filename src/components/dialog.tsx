import React from "react"

interface DialogProps {
  title: string
  text: string
}

const Dialog = ({ title, text }: DialogProps) => (
  <div className="dialog-box">
    <h3>{title}</h3>
    {text}
  </div>
)

export default Dialog
