import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../../components/layout"
import SEO from "../../components/seo"
import CourseCard from "../../components/course-card"
import InstituteTitle from "../../components/institute-title"

import eth from "../../images/logos/eth.png"
import epfl from "../../images/logos/epfl.png"
import psi from "../../images/logos/psi.png"

const AcademicTeaching = ({ data }: any) => {

  return (
    <Layout>
      <SEO title="Education, Academic Teaching" />
      <h1>
        {[
          <Link className="no-decoration" to="/education">
            Education
          </Link>,
          ` > Academic Teaching`,
        ]}
      </h1>
      <p>{`Educational activities offered by the academic members.`}</p>
      <InstituteTitle logo={eth} title="ETH Zurich" />
      <CourseCard
        name={"Maintenance and durability of reinforced concrete"}
        description={
          "MSc level course in the civil engineering curriculum at ETH Zurich, fall semester, 4 ECTS"
        }
        keywords={
          "Corrosion fundamentals, corrosion of steel in concrete, non-destructive testing, corrosion inspection, service life modeling, repair, corrosion prevention, corrosion protection"
        }
        contact={"Prof. Dr. Ueli Angst"}
        link={"https://ifb.ethz.ch/education/msc-courses/msc-durability-maintenance-concrete.html"}
        linkText={"More information"}
      />
      <CourseCard
        name={"Educational videos on corrosion"}
        description={
          "Free videos on corrosion science and corrosion engineering"
        }
        link={"https://www.youtube.com/channel/UCaWhMDqayWocw44fqCSKJPg"}
        contact={"Prof. Dr. Ueli Angst"}
      />
      <hr />
      <InstituteTitle logo={epfl} title="EPFL" />
      <CourseCard
        name={"Corrosion and Protection"}
        description={
          "BSc level course in the Materials Science curriculum at the EPFL, spring semester, 3 ECTS"
        }
        keywords={
          "Corrosion phenomena, principles and mechanisms, corrosion kinetics, protection against corrosion, electrochemical techniques for corrosion and practical work"
        }
        contact={"Dr. Stefano Mischler"}
      />
      <CourseCard
        name={"Surface analysis"}
        description={
          "MSc level course in the Materials Science curriculum at the EPFL, fall semester, 3 ECTS"
        }
        keywords={
          "Main surface analysis methods for the characterization of surfaces, interfaces and thin films, applications, quantification and understanding of structural, chemical and functional properties of surfaces and thin films"
        }
        contact={"Dr. Stefano Mischler"}
      />
      <CourseCard
        name={"Electrochemistry in Corrosion Research"}
        description={`Doctoral course. AT THE CCMX Winter school "Surface Science",  Chapter on "Corrosion and durability of 
        surfaces”, 1 ECTS`}
        keywords={
          "Corrosion, surface and interface phenomena. Surface characterisation. Durability"
        }
        contact={"Dr. Stefano Mischler"}
      />
      <hr />
      <InstituteTitle logo={psi} title="PSI" />

      <p>{`PSI’s LNM is actively engaged in university-level teaching (e.g., Nuclear Engineering Master course of PSI/ETHZ/EPFL, 
      EPFL Doctoral School) etc.), education and training. We offer both, experimental and/or modelling oriented PhD & master 
      student, Post-Doc and internship positions in various fields of nuclear material science, including (nuclear) corrosion 
      (usually in collaboration with ETHZ and EPFL).`}</p>
    </Layout>
  )
}

export default AcademicTeaching
