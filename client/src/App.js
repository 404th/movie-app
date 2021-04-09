// import { useContext } from 'react'
// import { CentreState } from './GlobalState'
// style
import "./App.css"
// Components
import Layout from './layout'
import Header from './Components/Header/header'
import Footer from './Components/Footer/footer'

function App() {

  return (
    <div className="container">
      <div className="container_cover">
        <Header />
        <Layout />
        <Footer />
      </div>
    </div>
  );
}

export default App;
