import React from "react"


interface NewsCardProps {
  title: string
  date: string
  description: any
}

const NewsCard = ({ title, date, description }: NewsCardProps) => (
  <div className="news-item">
    <h3>{title}</h3>
    <p>{date}</p>
    <p>{description}</p>
  </div>
)

export default NewsCard
