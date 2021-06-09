import styled from "@emotion/styled"

import NavLink from "./navlink"
import DropdownLink from "./dropdown-link"

interface MenuProps {
  collapseNav: boolean
}


const MenuComponent = styled.span`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-grow: 1;
  min-width: 860px;
  text-shadow: 1px 1px black;
`


const Menu = ({ collapseNav }: MenuProps) => (
  <MenuComponent className={collapseNav ? "" : "open"}>
    <NavLink text="About" to="/about" />
    <NavLink text={"Members & Competences"} to="/members" />
    {/* <Link className="navlink" to="/about">
      About
    </Link>
    <Link className="navlink" to="/members">
      Members & Competences
    </Link> */}
    <DropdownLink
      path="/education"
      name="Education"
      subpaths={[
        {
          path: "/education/academic-teaching",
          name: "Academic Teaching",
        },
        {
          path: "/education/practitioners-courses",
          name: "Practitioners courses",
        },
      ]}
    />
    <DropdownLink
      path="/corrosion-day"
      name="Swiss Corrosion Science Day"
      subpaths={[
        {
          path: "/corrosion-day/current",
          name: "Swiss Corrosion Science Day 2021",
        },
        {
          path: "/corrosion-day/past",
          name: "Past Swiss Corrosion Science Days",
        },
      ]}
    />
    <NavLink text="Contact" to="/contact" />
    {/* <Link className="navlink" to="/contact">
      Contact
    </Link> */}
  </MenuComponent>
)

export default Menu
