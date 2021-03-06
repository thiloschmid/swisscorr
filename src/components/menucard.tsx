import { Link } from "gatsby"
import { css } from "@emotion/react"
import styled from "@emotion/styled"

import {BgImage} from "gbimage-bridge"

interface MenuCardProps {
  picture: any
  text: string
  subtext?: string
  link: string
}

export const MenuContainer = styled.div`
  display: flex;
  color: white !important;
  text-decoration: none;
  margin: 0 -0.5rem;

  a {
    text-decoration: none;
    color: white;
  }
`

const MenuCardContainer = styled.div`
  flex-grow: 2;
  margin: 0.5rem;
`

const MenuCardCSS = css`
  padding: 1rem;
  height: 15rem;
  background-size: cover;
  background-color: black;
  text-shadow: -1px -1px 0 rgb(121, 121, 121), 1px -1px 0 rgb(121, 121, 121),
    -1px 1px 0 rgb(121, 121, 121), 1px 1px 0 rgb(121, 121, 121); ;
`

const MenuCard = ({ picture, text, subtext, link }: MenuCardProps) => (
  <MenuCardContainer>
    <Link to={link}>
      <BgImage
        backgroundColor="grey"
        css={MenuCardCSS}
        image={picture}
      >
        <h2>{text}</h2>
        {subtext && <h4>{subtext}</h4>}
      </BgImage>
    </Link>
  </MenuCardContainer>
)

export default MenuCard
