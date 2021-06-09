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
        title={"Swiss Corrosion Science Day 2021"}
        date={"12.03.2021"}
        description={[
          "The ",
          <i>Swiss Corrosion Science Day 2021</i>,
          " takes place on April 26, 2021, in Zofingen AG. ",
          <Link to="/corrosion-day/current">More information</Link>,
        ]}
      />
      <NewsCard
        title={"Something interesting happened"}
        date={"09.12.2020"}
        description={"Further description of the interesting event."}
      />
      <NewsCard
        title={"Something interesting happened"}
        date={"09.12.2020"}
        description={"Further description of the interesting event."}
      />
    </NewsContainer>
  </div>
)

export default News
