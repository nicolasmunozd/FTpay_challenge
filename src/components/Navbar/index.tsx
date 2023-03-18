import React from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { Button } from '../Button'
import { Logo } from '../Logo'
import './Navbar.scss'
import LOGO from '../../assets/images/logos/regim.svg'
import { setTheme } from '../../slices/themeSlice'

const Navbar = (): JSX.Element => {
  const theme = useSelector((state) => (state as any).theme.theme, shallowEqual)
  const dispatch = useDispatch()

  const handleChangeTheme = (): void => {
    const currentTheme = theme === 'light' ? 'dark' : 'light'
    dispatch(setTheme(currentTheme))
  }

  return (
        <div className="Navbar">
            <Logo classes="Logo__regim" img={LOGO} alt="Logo de RegiM" />
            <div className='Navbar__button__container'>
              <Button text={`Current theme: ${theme as string}`} onClick={handleChangeTheme} classes='button button__md' />
              <Button text='Get Early Access' classes='button button__md' />
            </div>
        </div>
  )
}

export { Navbar }
