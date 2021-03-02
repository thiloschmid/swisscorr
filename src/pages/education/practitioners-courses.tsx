import React from "react"
import { Link } from "gatsby"

import Layout from "../../components/layout"
import SEO from "../../components/seo"

import eth from "../../logos/eth.png"
import sgk from "../../logos/sgk.png"

const SecondPage = () => (
  <Layout>
    <SEO title="Education > Practitioners Courses" />
    <h1>{`Education > Practitioners courses`}</h1>
    <img src={sgk} height={100} />

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
      </div>
    </div>
            <hr />
            <img src={eth} height={100} />

    <div className="course-box">
      <div>
        <h4>Potential measurements for reinforced concrete</h4>

        <p>
          {`Certification course «potential measurements for reinforced concrete» for personnel certification according to the Swiss standard SIA 2006:2013. 2 day course with theory and practical sessions.`}
        </p>
        <p>{`Prof. Dr. Ueli Angst`}</p>
      </div>
    </div>
  </Layout>
)

export default SecondPage
