import { Logo } from '../Logo';
import './Integrations.css';
import SLACK from '../../assets/images/logos/slack.svg';
import QUICKBOOKS from '../../assets/images/logos/quickbooks.svg';
import MAILCHIMP from '../../assets/images/logos/mailchimp.svg';
import HUBSPOT from '../../assets/images/logos/hubspot.svg';
import ZAPIER from '../../assets/images/logos/zapier.svg';
import GOOGLE from '../../assets/images/logos/google-analytics.svg';
import MARKETO from '../../assets/images/logos/marketo.svg';

const Integrations = () =>{
    return(
        <div className='Integrations'>
            <div className='Integrations__containter'>
                <div className='Integrations__title'>Integrate with your favorite tools</div>
                <div className='Integrations__text'>Connect RegiM with your most favorite sales and marketing tools</div>
            </div>
            <div className='Integrations__container__logo'>
                <div className='Integrations__Logo--row'>
                    <Logo class_name="Logo_integration" img={SLACK} alt="Logo de Slack" />
                    <Logo class_name="Logo_integration" img={QUICKBOOKS} alt="Logo de QuickBooks" />
                    <Logo class_name="Logo_integration" img={MAILCHIMP} alt="Logo de Mailchimp" />
                    <Logo class_name="Logo_integration" img={HUBSPOT} alt="Logo de HubSpot" />
                </div>
                <div className='Integrations__Logo--row'>
                    <Logo class_name="Logo_integration" img={ZAPIER} alt="Logo de Zapier" />
                    <Logo class_name="Logo_integration" img={GOOGLE} alt="Logo de Google Analytics" />
                    <Logo class_name="Logo_integration" img={MARKETO} alt="Logo de Marketo" />
                </div>
                
                
            </div>
        </div>
    );
}

export {Integrations};