import { Link } from "gatsby"
import { css } from "@emotion/react"

interface DropdownLinkProps {
  path: string
  name: string
  subpaths: any[]
}

const dropdown = css`
  position: relative;
  display: inline-block;
  padding: 0.5rem;

  @media (max-width: 900px) {
    padding: 0;
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
  }
`
const dropdownContent = css`
  display: none;
  position: absolute;
  flex-flow: column nowrap;
  background-color: #3f3f3f;
  box-shadow: 0px 8px 16px 0px rgb(0, 0, 0);
  z-index: 1;
  margin-top: 0.5rem;
  white-space: nowrap;

  @media (min-width: 900px) {
    .dropdown:hover & {
      display: flex
    }
  }

  @media (max-width: 900px) {
    display: none;
    position: relative;
  }
`

const dropdownItem = css`
  a {
    display: block;
  }

  @media (min-width: 900px) {
    &:hover {
      background-color: rgba(126, 126, 126, 0.363);
    }
  }
`

const DropdownLink = ({ path, name, subpaths }: DropdownLinkProps) => (
  <div className="dropdown" css={dropdown}>
    <Link className="navlink" to={path}>
      {name}
    </Link>
    <div css={dropdownContent}>
      {subpaths.map(subpath => (
        <span className="dropdown-item" css={dropdownItem} key={subpath.name}>
          <Link to={subpath.path}>{subpath.name}</Link>
        </span>
      ))}
    </div>
  </div>
)

export default DropdownLink
