import styled from "@emotion/styled"

interface NewsCardProps {
  title: string
  date: string
  description: any
}

const NewsItem = styled.div`
  flex-grow: 1;
  background-color: whitesmoke;
  padding: 1rem;
  margin: 0.5rem;
  flex-basis: 25rem;
`

const NewsCard = ({ title, date, description }: NewsCardProps) => (
  <NewsItem>
    <h3>{title}</h3>
    <p>{date}</p>
    <p>{description}</p>
  </NewsItem>
)

export default NewsCard
