import React from 'react'
import { Button } from '../Button'
import { Logo } from '../Logo'
import './Navbar.css'
import LOGO from '../../assets/images/logos/regim.svg'

const Navbar = (): JSX.Element => {
  return (
        <div className="Navbar">
            <Logo classes="Logo_regim" img={LOGO} alt="Logo de RegiM" />
            <Button />
        </div>
  )
}

export { Navbar }
