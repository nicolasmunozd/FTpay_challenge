import './Cta.scss'
import { Button } from '../Button'

const Cta = (): JSX.Element => {
  return (
        <div className='Cta'>
            <div className='Cta__content'>
                <div className='Cta__title'>Create your event with RegiM</div>
                <div className='Cta__text'>Leveraging our virtual and live event experience, Hubilo offers everything you need to set up your next hybrid event from registration to executing a flawless event.</div>

            </div>
            <div className='Cta__button'>
                <Button text='Get Early Access' />
            </div>

        </div>
  )
}

export { Cta }
