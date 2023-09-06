/* eslint-disable react/prop-types */
const InfoCard = ({title, details}) => {
  return (
    // <div className="info">
    <div className="info-card">

      <h2 className="title">{title}</h2>
      <h2 className="details">{details}</h2>

    </div>

//   </div>
  )
}

export default InfoCard;