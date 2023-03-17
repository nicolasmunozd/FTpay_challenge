
import './App.scss'
import { Home } from './views/Home'
import { shallowEqual, useSelector } from 'react-redux'
import { useEffect } from 'react'

const App = (): JSX.Element => {
  const theme = useSelector((state) => (state as any).theme.theme, shallowEqual)

  useEffect(() => {
    if (theme === 'dark') {
      document.querySelector('body')?.setAttribute('class', theme)
    } else {
      document.querySelector('body')?.removeAttribute('class')
    }
  }, [theme])
  return (
      <div className="App">
        <Home />
      </div>
  )
}

export { App }
