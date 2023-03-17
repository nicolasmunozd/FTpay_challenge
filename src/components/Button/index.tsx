import './Button.scss'

interface ButtonProps {
  text: string
  onClick?: () => void
}

const Button = ({ text, onClick }: ButtonProps): JSX.Element => {
  return (<button className='button' onClick={onClick}>{text}</button>)
}

export { Button }
