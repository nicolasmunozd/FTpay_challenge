import './Mockups.scss'
import ATTENDEES from '../../assets/images/mockups/attendees.svg'
import BADGE from '../../assets/images/mockups/badge.svg'
import REGISTRATION from '../../assets/images/mockups/registration-graph.svg'
import REGISTRATIONS from '../../assets/images/mockups/registrations-split-count.svg'
import SPEAKER from '../../assets/images/mockups/speaker-card.svg'
import SALES from '../../assets/images/mockups/ticket-sales.svg'
import TICKET from '../../assets/images/mockups/ticket.svg'

const Mockups = (): JSX.Element => {
  return (
        <div className='Mockups'>
            <div>
                <img src={BADGE} className="Mockups__BADGE animate__animated animate__backInLeft"/>
                <img src={REGISTRATION} className="Mockups__REGISTRATION animate__animated animate__backInLeft" />
            </div>

            <div>
                <img src={SPEAKER} className="Mockups__SPEAKER animate__animated animate__backInDown" />
                <img src={REGISTRATIONS} className="Mockups__REGISTRATIONS Mockups__SPEAKER animate__animated animate__backInDown" />
                <img src={TICKET} className="Mockups__TICKET animate__animated animate__backInUp" />
            </div>

            <div>
                <img src={ATTENDEES} className="Mockups__ATTENDEES animate__animated animate__backInRight" />
                <img src={SALES} className="Mockups__SALES animate__animated animate__backInRight" />
            </div>
        </div>
  )
}

export { Mockups }
