import { createContext } from "react"

export const CentreState = createContext()

function MainState( props ){

  const state = {
    username:"404th"
  }

  return (
    <CentreState.Provider value={ state }>
      { props.children }
    </CentreState.Provider>
  )
}

export default MainState