const InstituteTitle = ({ logo, title, link }: any) => (
  <div className="institute-title">
    <a href={link}>
      <img
        className="institute-logo"
        src={logo}
        alt={`logo ${title}`}
        width={150}
      />
    </a>
    <h2>{title}</h2>
  </div>
)

export default InstituteTitle
