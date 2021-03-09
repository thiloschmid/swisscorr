import React from "react"
import Layout from "../../components/layout"
import SEO from "../../components/seo"

import CDFlyer from "../../components/CDFlyer"
import { StaticImage } from "gatsby-plugin-image"

// import flyers as documents
import seminar2015 from "../../documents/swiss_corrosion_seminar_2015.pdf"
import corrosionDay2017 from "../../documents/swiss_corrosion_day_2017.pdf"
import programm2017 from "../../documents/swiss_corrosion_day_2017_programm.pdf"
import corrosionDay2020 from "../../documents/swiss_corrosion_day_2020.pdf"

const PastCorrosionDay = () => (
  <Layout>
    <SEO title="Past Swiss Corrosion Science Days" />
    <h1>Past Swiss Corrosion Science Days</h1>
    <div id="flyer-container">
      <CDFlyer
        title={"Swiss Corrosion Day 2020"}
        pdf={
          <StaticImage
            src="../../images/flyers/swiss_corrosion_day_2020.pdf"
            alt="flyer corrosion day 2020"
          />
        }
        download={corrosionDay2020}
      />
      <CDFlyer
        title={"Swiss Corrosion Day 2017"}
        pdf={
          <StaticImage
            src="../../images/flyers/swiss_corrosion_day_2017.pdf"
            alt="flyer corrosion day 2017"
          />
        }
        download={corrosionDay2017}
      />
      <CDFlyer
        title={"Swiss Corrosion Day 2017 Programme"}
        pdf={
          <StaticImage
            src="../../images/flyers/swiss_corrosion_day_2017_programm.pdf"
            alt="swiss corrosion day 2017 programm"
          />
        }
        download={programm2017}
      />
      <CDFlyer
        title={"Swiss Corrosion Seminar 2015"}
        pdf={
          <StaticImage
            src="../../images/flyers/swiss_corrosion_seminar_2015.pdf"
            alt="flyer corrosion seminar 2015"
          />
        }
        download={seminar2015}
      />
    </div>
  </Layout>
)

export default PastCorrosionDay
