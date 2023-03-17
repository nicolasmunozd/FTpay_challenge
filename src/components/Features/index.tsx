import './Features.scss'
import { Feature } from '../Feature'
import iconOne from '../../assets/images/icons/icon-one.svg'
import iconTwo from '../../assets/images/icons/icon-two.svg'
import iconThree from '../../assets/images/icons/icon-three.svg'
import iconFour from '../../assets/images/icons/icon-four.svg'
import iconFive from '../../assets/images/icons/icon-five.svg'
import iconSix from '../../assets/images/icons/icon-six.svg'
import { Video } from '../Video'

const Features = (): JSX.Element => {
  return (<div className="Features">
                <div className="Features__title">All-in-one Event Platform</div>
                <div className="Features__text">Deliver an exceptional event experience</div>

                <div className='Features__video animate__animated animate__bounceInLeft'>
                    <Video />
                </div>

                <div className='Features__container'>
                    <Feature icon={ iconOne } title={ 'Event Metrics' } text={ 'Track your ticket sales, attendees count and more with much ease.' } />
                    <Feature icon={ iconTwo } title={ 'Registration & Ticketing' } text={ 'Manage your Event registrations and ticket sales easier and receive payments instantly.' } />
                    <Feature icon={ iconThree } title={ 'Branded Badges' } text={ 'Create your custom branded badges for your events and get them printed.' } />
                    <Feature icon={ iconFour } title={ 'Oragniser App' } text={ 'Manage your events at the palm of your hand with our Oragniser App.' } />
                    <Feature icon={ iconFive } title={ 'Attendee Engagement' } text={ 'Engage with your attendees via email, surveys and much more.' } />
                    <Feature icon={ iconSix } title={ 'Add to Calendar' } text={ 'Effortless way to add your events to registered users calendars by 1-click.' } />
                </div>
    </div>)
}

export { Features }
