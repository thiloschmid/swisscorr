import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import MemberCard from "../components/member-card"

// import logos
import eth from "../images/logos/eth.png"
import epfl from "../images/logos/epfl.png"
import empa from "../images/logos/empa.png"
import psi from "../images/logos/psi.png"
import sgk from "../images/logos/sgk.png"
import nagra from "../images/logos/nagra.png"
import sika from "../images/logos/sika.png"
import tfb from "../images/logos/tfb.png"

const SecondPage = () => (
  <Layout>
    <SEO title="Members & Competences" />
    <h1>Members & Competences</h1>
    <h3>Academic members</h3>
    <MemberCard
      institution={"ETH Zurich, Durability of Engineering Materials Lab"}
      logo={eth}
      contact={"Prof. Dr. Ueli Angst"}
      keywords={
        "Corrosion science and electrochemical techniques. Corrosion and reactive transport modelling in porous media. Corrosion modeling. Corrosion in civil and subsurface engineering. Corrosion in additive manufacturing. Non-destructive testing. Sensors. Life cycle predictions."
      }
      link={"https://ifb.ethz.ch/durability"}
      comments="(Academic member)"
    />
    <MemberCard
      institution={"EPFL, Tribology and Interface Chemistry group"}
      logo={epfl}
      contact={"Dr. Stefano Mischler, Dr. Anna Igual Munoz"}
      keywords={
        "Corrosion science and electrochemical techniques. Tribocorrosion fundamentals, mechanisms and modelling. Surface analysis and modifications. Tribology. Electrochemical surface treatments. Electrodeposited composite coatings and polymers."
      }
      link={"https://www.epfl.ch/labs/tic"}
      comments="(Academic member)"
    />
    <MemberCard
      institution={"Empa, Materials Science and Technology"}
      logo={empa}
      contact={
        "Dr. Patrik Schmutz and Dr. Ulrik Hans – Laboratory for Joining Technologies and Corrosion"
      }
      keywords={
        "Surface chemistry and corrosion management. Corrosion of Infrastructure, transportation media, medical implants, micro and nanocomponents. Local electrochemical characterizations. Oxide film engineering and functionalizing."
      }
      link={"http://www.empa.ch/web/empa/joining-technologies-corrosion"}
      comments="(Academic member)"
    />
    <MemberCard
      institution={
        "Paul Scherrer Institute (PSI), Laboratory for Nuclear Materials (LNM)"
      }
      logo={psi}
      contact={"Dr. Stefan Ritter – Component Structural Integrity Group"}
      keywords={
        "Nuclear corrosion. Environmentally-assisted cracking. Stainless steel. Ni-base alloy. Low-alloy steel. Light water reactor."
      }
      link={"https://www.psi.ch/en/lnm"}
      comments="(Academic member)"
    />
    <hr />
    <h3>Industry members</h3>
    <MemberCard
      institution={"Swiss Society for Corrosion Protection"}
      logo={sgk}
      contact={"Dr. Markus Büchler"}
      keywords={
        "Cathodic protection. Stray current corrosion. AC corrosion. Electrical grounding. Condition assessment of reinforced concrete structures. Coatings. Steel construction. Facility Health Monitoring. Building assessment. Tendons. Anchors and Piles. Facades and fastening elements. Cathodic protection of reinforced concrete. Water pipes. Plastics. Laboratory tests."
      }
      link={"https://www.sgk.ch"}
      comments="(Industry member)"
    />
    <MemberCard
      institution={
        "Nagra (National Cooperative for the Disposal of Radioactive Waste)"
      }
      logo={nagra}
      contact={"Dr. Nikitas Diomidis – Section Head Materials Performance"}
      keywords={
        "Radioactive waste disposal. Long-term corrosion prediction. Disposal canister development. Performance assessment."
      }
      link={"https://www.nagra.ch"}
      comments="(Industry member)"
    />
    <MemberCard
      institution={"Sika Technology AG"}
      logo={sika}
      contact={"Jörg Vogelsang"}
      keywords={
        "Organic coatings. Sacrificial anodes. Corrosion inhibitors. Sealing and bonding. Waterproofing materials."
      }
      link={"www.sika.ch"}
      comments="(Industry member)"
    />
    <MemberCard
      institution={"TFB AG"}
      logo={tfb}
      contact={"Dr. Yves Schiegg"}
      keywords={
        `Corrosion of steel in concrete. Corrosion monitoring at concrete 
        structures. Non-destructive testing. Potential mapping. Service life 
        modelling. Quality control of stainless steels. Corrosion protection.`
      }
      link={"www.tfb.ch"}
      comments="(Industry member)"
    />
  </Layout>
)

export default SecondPage
