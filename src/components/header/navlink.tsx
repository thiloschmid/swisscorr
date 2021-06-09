import { Link } from "gatsby"
import { css } from "@emotion/react"

interface NavLinkProps {
  text: string
  to: string
}

const NavLinkCSS = css`
  position: relative;

  &:after {
    position: absolute;
    bottom: 0.2rem;
    left: 50%;
    right: 0;
    display: inline-block;
    content: "";
    width: 0;
    height: 0.2rem;
    background-color: transparent;
    border: 1px solid transparent;
    transition-property: width, left;
    transition-duration: 0.3s;
  }

  &:hover:after {
    width: 100%;
    left: 0;
    background-color: white;
  }
`

const NavLink = ({ text, to }: NavLinkProps) => (
  <Link to={to} css={NavLinkCSS}>
    {text}
  </Link>
)

export default NavLink
