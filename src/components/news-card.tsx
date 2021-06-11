import styled from "@emotion/styled"

interface NewsCardProps {
  title: string | (string | JSX.Element)[]
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

const NewsTitle = styled.h3`
  margin-bottom: 0.75rem;
`

const NewsDate = styled.p`
  text-align: right;
  margin: 0;
`

const NewsText = styled.p`
margin-bottom: 0.25rem;`

const NewsCard = ({ title, date, description }: NewsCardProps) => (
  <NewsItem>
    <NewsTitle>{title}</NewsTitle>
    <NewsText>{description}</NewsText>
    <NewsDate>
      <i>{`published ${date}`}</i>
    </NewsDate>
  </NewsItem>
)

export default NewsCard
