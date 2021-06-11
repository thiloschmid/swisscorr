import { Link } from "gatsby"
import { css } from "@emotion/react"

import Layout from "../../components/layout"
import SEO from "../../components/seo"
import CourseCard from "../../components/course-card"
import InstituteTitle from "../../components/institute-title"

import eth from "../../images/logos/eth.png"
import sgk from "../../images/logos/sgk.png"
import empa from "../../images/logos/empa.png"
import buw from "../../images/logos/bauundwissen.png"

const PractitionersCourses = () => (
  <Layout>
    <SEO title="Education, Practitioners Courses" />
    <h1>
      {[
        <Link
          key={"education-link"}
          to="/education"
          css={css`
            text-decoration: none;
          `}
        >
          Education
        </Link>,
        ` > Practitioners courses`,
      ]}
    </h1>

    {/* 1. SGK course */}
    <InstituteTitle
      logo={sgk}
      title="Swiss Society for Corrosion Protection"
      link="https://www.sgk.ch"
    />

    <CourseCard
      name={"Cathodic corrosion protection"}
      description={`Certification courses according to SN EN ISO 15257:2017 for personnel
        for the planning, execution and control of cathodic corrosion
        protection installations (Since 2008, equivalent courses in German,
        French and English) of:`}
    >
      <ul>
        <li>Buried and immersed metal structures: Levels 1-4</li>
        <li>Reinforced concrete structures: Levels 1-3</li>
      </ul>
      <a href="https://www.sgk.ch">https://www.sgk.ch</a>
    </CourseCard>

    {/* 2. ETHZ course */}
    <InstituteTitle
      logo={eth}
      title="ETH Zurich"
      link="https://ifb.ethz.ch/durability"
    />

    <CourseCard
      name={`Potential measurements for reinforced concrete`}
      contact={`Prof. Dr. Ueli Angst`}
      description={`Certification course «potential measurements for reinforced concrete» for personnel certification according to the Swiss standard SIA 2006:2013. 2 day course with theory and practical sessions.`}
      link={"https://ifb.ethz.ch/durability"}
      linkText={"ETH Durability of Engineering Materials Group"}
    />

    {/* 3. Empa course */}
    <InstituteTitle
      logo={empa}
      title="Empa"
      link="http://www.empa.ch/web/empa/joining-technologies-corrosion"
    />

    <CourseCard
      name={`Empa/FSRM course (in German): Elektrochemische Charakterisierung und Korrosion`}
      contact={`Dr. Patrik Schmutz and Dr. Ulrik Hans`}
      description={`For more information visit the link below.`}
      link={
        "https://events.empa.ch/Aktuelle%20Veranstaltungen/event.php?vnr=1C6-10C"
      }
      linkText={"Empa events"}
    />

    <InstituteTitle
      logo={buw}
      title="Bau und Wissen"
      link="www.bauundwissen.ch"
    />

    <CourseCard
      name={`Von der Zustandsuntersuchung bis zur Instandsetzung von Betonbauwerken`}
      description={[
        "Three day course, in German, provided by ",

        <a key={"buw-link"} href="https://www.bauundwissen.ch/" target="_blank">
          www.bauundwissen.ch
        </a>,
        ".",
      ]}
    />
  </Layout>
)

export default PractitionersCourses
