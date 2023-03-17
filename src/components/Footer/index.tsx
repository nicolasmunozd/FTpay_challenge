import './Footer.css'
import REGISOLO from '../../assets/images/logos/regim-solo.svg'

const Footer = (): JSX.Element => {
  return (
        <div className="Footer">
            <div>
                <hr />
            </div>

            <img src={ REGISOLO } className='Footer__img'/>

            <div className='Footer__container'>
                <p className='Footer__text'>© RegiM 2022. Made with love by <a>Landify</a></p>
                <p className='Footer__text'>For further details, drop a mail to <a>hello@landify.design</a></p>
            </div>
        </div>
  )
}

export { Footer }
