import './Feature.css'
interface FeatureProps {
  icon: string
  title: string
  text: string
}

const Feature = ({ icon, title, text }: FeatureProps): JSX.Element => {
  return (
        <div className="Feature">
            <img src={icon}/>
            <div>
                <div className="Feature__title">{title}</div>
                <div className="Feature__text">{text}</div>
            </div>
        </div>
  )
}

export { Feature }
