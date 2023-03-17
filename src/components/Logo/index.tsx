
import './Logo.css'

interface LogoProps {
  img: string
  alt: string
  classes: string
}
const Logo = ({ img, alt, classes }: LogoProps): JSX.Element => {
  return (<img className={classes} src={img} alt={alt} />)
}

export { Logo }
