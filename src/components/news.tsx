import { Link } from "gatsby"

import NewsCard from "./news-card"

const News = () => (
  <div>
    <h2>News</h2>
    <div id="news-container">
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
    </div>
  </div>
)

export default News
