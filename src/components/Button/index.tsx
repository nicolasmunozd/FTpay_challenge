import './Button.scss'

interface ButtonProps {
  text: string
  onClick?: () => void
  classes: string
}

const Button = ({ text, onClick, classes }: ButtonProps): JSX.Element => {
  return (<button className={classes} onClick={onClick}>{text}</button>)
}

export { Button }
