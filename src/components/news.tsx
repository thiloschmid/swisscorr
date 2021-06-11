import { Link } from "gatsby"
import styled from "@emotion/styled"
import {css} from "@emotion/react"

import NewsCard from "./news-card"

const NewsContainer = styled.div`
  margin: 0 -0.5rem;
  display: flex;
  flex-flow: row wrap;
  align-items: flex-start;
`

const News = () => (
  <div>
    <h2 css={css`margin-bottom: .75rem;`}>News</h2>
    <NewsContainer>
      <NewsCard
        title={`Swiss Corrosion Science Day 2022 - Save the date!`}
        date={"09.06.2021"}
        description={[
          `
          Save the date: The `,
          <i key={"1"}>Swiss Corrosion Science Day 2022</i>,
          ` will be held at ETH 
          Zurich, Switzerland, on `,
          <b key={"2"}>2 May 2022</b>,
          `.`,
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
