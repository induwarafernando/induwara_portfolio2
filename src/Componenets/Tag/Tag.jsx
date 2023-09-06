/* eslint-disable react/prop-types */
const Tag = ({title,key}) => {
  return (
    <div className="tag" key={key}>
        <h2 className="title">{title}</h2>

    </div>
  )
}

export default Tag