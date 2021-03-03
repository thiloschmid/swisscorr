import React from "react"

import { Link } from "gatsby"

interface DropdownLinkProps {
  path: string
  name: string
  subpaths: any[]
}

const DropdownLink = ({ path, name, subpaths }: DropdownLinkProps) => (
  <div className="dropdown">
    <Link to={path}>{name}</Link>
    <div className="dropdown-content">
      {subpaths.map(subpath => (
        <span className="dropdown-item" key={subpath.name}>
          <Link to={subpath.path}>{subpath.name}</Link>
        </span>
      ))}
    </div>
  </div>
)

export default DropdownLink
