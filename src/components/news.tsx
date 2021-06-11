import { Link } from "gatsby"
import styled from "@emotion/styled"

import NewsCard from "./news-card"

const NewsContainer = styled.div`
  margin: 0 -0.5rem;
  display: flex;
  flex-flow: row wrap;
`

const News = () => (
  <div>
    <h2>News</h2>
    <NewsContainer>
      <NewsCard
        title={`Swiss Corrosion Science Day 2022 - SAVE THE DATE`}
        date={"09.06.2021"}
        description={[
          `
          The `,
          <i key={"1"}>Swiss Corrosion Science Day 2022</i>,
          ` will be held at ETH 
          Zurich, Switzerland, on `,
          <b key={"2"}>2 May 2022</b>,
          `. Save the date!`,
          <br key={"3"} />,
          ` More information will follow later.
          `,
        ]}
      />
      <NewsCard
        title={"Swiss Corrosion Science Day 2021"}
        date={"12.03.2021"}
        description={[
          "The ",
          <Link key={"corrosion-day-link"} to="/corrosion-day/current">
            Swiss Corrosion Science Day 2021
          </Link>,
          " takes place on April 26, 2021, in Zofingen AG. ",
        ]}
      />
    </NewsContainer>
  </div>
)

export default News
