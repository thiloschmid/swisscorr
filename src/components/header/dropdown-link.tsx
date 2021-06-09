import styled from "@emotion/styled"

import NavLink from "./navlink"

interface DropdownLinkProps {
  path: string
  name: string
  subpaths: any[]
}

const Dropdown = styled.div`
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
const DropdownContent = styled.div`
  display: none;
  position: absolute;
  flex-flow: column nowrap;
  background-color: #3f3f3f;
  box-shadow: 0px 8px 16px 0px rgb(0, 0, 0);
  z-index: 1;
  margin-top: 0.5rem;
  white-space: nowrap;

  @media (min-width: 900px) {
    ${Dropdown}:hover & {
      display: flex;
    }
  }

  @media (max-width: 900px) {
    display: none;
    position: relative;
  }
`

const DropdownItem = styled.span`
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
  <Dropdown>
    <NavLink text={name} to={path} />
    <DropdownContent>
      {subpaths.map(subpath => (
        <DropdownItem key={subpath.name}>
          <NavLink text={subpath.name} to={subpath.path} />
        </DropdownItem>
      ))}
    </DropdownContent>
  </Dropdown>
)

export default DropdownLink
