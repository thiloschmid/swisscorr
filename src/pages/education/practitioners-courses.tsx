import React from "react"
import { Link } from "gatsby"

import Layout from "../../components/layout"
import SEO from "../../components/seo"

import eth from "../../images/logos/eth.png"
import sgk from "../../images/logos/sgk.png"

import InstituteTitle from "../../components/institute-title"

const PractitionersCourses = () => (
  <Layout>
    <SEO title="Education, Practitioners Courses" />
    <h1>{[<Link className="no-decoration" to="/education">Education</Link>, ` > Practitioners courses`]}</h1>

    <InstituteTitle logo={sgk} title="Swiss Society for Corrosion Protection" link="https://www.sgk.ch"/>

    <div className="course-box">
      <div>
        <h4>Cathodic corrosion protection</h4>

        <p>
          {`Certification courses according to SN EN ISO 15257:2017 for personnel
          for the planning, execution and control of cathodic corrosion
          protection installations (Since 2008, equivalent courses in German,
          French and English) of:`}
        </p>
        <ul>
          <li>Buried and immersed metal structures: Levels 1-4</li>
          <li>Reinforced concrete structures: Levels 1-3</li>
        </ul>
        <a href="https://www.sgk.ch">https://www.sgk.ch</a>
      </div>
    </div>
    <hr />
    <InstituteTitle logo={eth} title="ETH Zurich" link="https://ifb.ethz.ch/durability" />

    <div className="course-box">
      <div>
        <h4>Potential measurements for reinforced concrete</h4>

        <p>
          {`Certification course «potential measurements for reinforced concrete» for personnel certification according to the Swiss standard SIA 2006:2013. 2 day course with theory and practical sessions.`}
        </p>
        <p>{`Prof. Dr. Ueli Angst`}</p>
        <a href="https://ifb.ethz.ch/durability">https://ifb.ethz.ch/durability 
</a>
      </div>
    </div>
  </Layout>
)

export default PractitionersCourses
