import { StaticImage } from "gatsby-plugin-image"
import Layout from "../../components/layout"
import SEO from "../../components/seo"

import CDFlyer from "../../components/CDFlyer"

import flyer2021 from "../../documents/scsd_2021_flyer.pdf"
import program2021 from "../../documents/scsd_2021_program.pdf"

const CurrentCorrosionDay = () => (
  <Layout>
    <SEO title="Swiss Corrosion Science Day 2021" />
    <h1>Swiss Corrosion Science Day 2021</h1>

    <p>{`On the 24th April each year, Corrosion Awareness 
    Day highlights the socio-economical challenges
    associated with corrosion worldwide.
Metrohm Switzerland and the Swiss
Corrosion Network would like to celebrate
this event for the first time this year. We aim
to bring various corrosion groups in Switzerland 
together as a national community for
presentation, knowledge exchange, interaction 
and networking session.
Therefore, we cordially invite all scientists and
engineers from industry and academia who are
interested and/or confronted with corrosion
related issues in Switzerland to join us at our
premises in Zofingen on April 26, 2021.`}</p>
    <p>
      {[
        `The `,
        <a href={flyer2021} download>
          flyer
        </a>,
        ` and `,
        <a href={program2021} download>
          program
        </a>,
        ` are available for download.`,
      ]}
    </p>
    <div className="document-container">
      <CDFlyer
        title={"Flyer"}
        download={flyer2021}
        picture={
          <StaticImage
            className="flyer-image-container"
            src="../../images/flyers/scsd_2021_flyer.png"
            alt="flyer corrosion day 2021"
          />
        }
      />
      <CDFlyer
        title={"Program"}
        download={program2021}
        picture={
          <StaticImage
            className="flyer-image-container"
            src="../../images/flyers/scsd_2021_program.png"
            alt="program corrosion day 2021"
          />
        }
      />
    </div>
  </Layout>
)

export default CurrentCorrosionDay
