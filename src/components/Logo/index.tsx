
import './Logo.css';

interface LogoProps{
    img: string;
    alt:string;
    class_name:string;
}
const Logo = ({ img, alt, class_name }: LogoProps) =>{
    return (<img className={class_name} src={img} alt={alt} />)
}

export {Logo}

