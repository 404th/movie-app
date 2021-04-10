
import { Route, Switch } from 'react-router-dom'
//Components
import Main from './Components/Main/main'
import Recommended from './Components/Main/MainComponents/Recommended/recomended'

function Layout () {
  return (
    <Switch>
      <Route path={"/dashboard"} component={ Main } />
      <Route path={"/recommended"} component={ Recommended } />
    </Switch>
  )
}

export default Layout