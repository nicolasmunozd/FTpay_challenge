import './Mockups.css';
import ATTENDEES from '../../assets/images/mockups/attendees.svg';
import BADGE from '../../assets/images/mockups/badge.svg';
import REGISTRATION from '../../assets/images/mockups/registration-graph.svg';
import REGISTRATIONS from '../../assets/images/mockups/registrations-split-count.svg';
import SPEAKER from '../../assets/images/mockups/speaker-card.svg';
import SALES from '../../assets/images/mockups/ticket-sales.svg';
import TICKET from '../../assets/images/mockups/ticket.svg';

const Mockups = () =>{
    return (
        <div className='Mockups'>
            <div>
                <img src={BADGE} className="Mockups__BADGE"/>
                <img src={REGISTRATION} className="Mockups__REGISTRATION" />
            </div>

            <div>
                <img src={SPEAKER} className="Mockups__SPEAKER" />
                <img src={REGISTRATIONS} className="Mockups__REGISTRATIONS" />
                <img src={TICKET} className="Mockups__TICKET" />
            </div>

            <div>
                <img src={ATTENDEES} className="Mockups__ATTENDEES" />
                <img src={SALES} className="Mockups__SALES" />
            </div>
        </div>
    );
}

export {Mockups}