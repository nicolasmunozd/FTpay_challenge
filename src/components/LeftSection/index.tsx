import { Button } from '../Button'
import './LeftSection.css'

const LeftSection = (): JSX.Element => {
  return (<div>
        <div className='LeftSection__title'>Event Registration Reimagined</div>
        <div className='LeftSection__text'>Manage your event registrations hassle free and without any dependency with the technical team. Isn’t it sounds amazing?</div>
        <Button />
    </div>)
}

export { LeftSection }
