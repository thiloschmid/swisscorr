
import styled from "@emotion/styled"

const ImageContainer = styled.div`
  padding: 0.5rem;
`

const SlideShowImage = ({children}: {children: JSX.Element}) => (
  <ImageContainer>
    {children}
  </ImageContainer>
)

export default SlideShowImage
