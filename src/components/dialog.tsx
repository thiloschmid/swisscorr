import { css } from "@emotion/react"
import styled from "@emotion/styled"

export const DialogContainerCSS = css`
  display: flex;
  background-size: cover;
  padding: 2rem;
  margin-bottom: 2rem;
`

const DialogBox = styled.div`
  max-width: 50rem;
  background-color: white;
  padding: 1rem;
`

interface DialogProps {
  title: string
  text: any
}

const Dialog = ({ title, text }: DialogProps) => (
  <DialogBox>
    <h3>{title}</h3>
    {text}
  </DialogBox>
)

export default Dialog
