import { Logo } from '../Logo'
import './Integrations.scss'
import SLACK from '../../assets/images/logos/slack.svg'
import QUICKBOOKS from '../../assets/images/logos/quickbooks.svg'
import MAILCHIMP from '../../assets/images/logos/mailchimp.svg'
import HUBSPOT from '../../assets/images/logos/hubspot.svg'
import ZAPIER from '../../assets/images/logos/zapier.svg'
import GOOGLE from '../../assets/images/logos/google-analytics.svg'
import MARKETO from '../../assets/images/logos/marketo.svg'

const Integrations = (): JSX.Element => {
  return (
        <div className='Integrations'>
            <div className='Integrations__containter'>
                <div className='Integrations__title'>Integrate with your favorite tools</div>
                <div className='Integrations__text'>Connect RegiM with your most favorite sales and marketing tools</div>
            </div>
            <div className='Integrations__container__logo'>
                <div className='Integrations__Logo--row'>
                    <Logo classes="Logo__integration" img={ SLACK } alt="Logo de Slack" />
                    <Logo classes="Logo__integration" img={ QUICKBOOKS } alt="Logo de QuickBooks" />
                    <Logo classes="Logo__integration" img={ MAILCHIMP } alt="Logo de Mailchimp" />
                    <Logo classes="Logo__integration" img={ HUBSPOT } alt="Logo de HubSpot" />
                </div>
                <div className='Integrations__Logo--row Integrations__Logo--row--margin'>
                    <Logo classes="Logo__integration" img={ ZAPIER } alt="Logo de Zapier" />
                    <Logo classes="Logo__integration" img={ GOOGLE } alt="Logo de Google Analytics" />
                    <Logo classes="Logo__integration" img={ MARKETO } alt="Logo de Marketo" />
                </div>

            </div>
        </div>
  )
}

export { Integrations }
