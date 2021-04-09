
import { Route, Switch } from 'react-router-dom'
//Components
import Main from './Components/Main/main'

function Layout () {
  return (
    <Switch>
      <Route path={"/dashboard"} component={ Main } />
    </Switch>
  )
}

export default Layout