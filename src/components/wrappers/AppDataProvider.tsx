import React, { useState } from 'react'

import reducer from '../../services/appDataReducer'

const AppDataContext = React.createContext([{}, () => {}])

const AppDataProvider = props => {
  const [appDataState, setAppDataState] = useState<any>({})
  const contextValue = [
    appDataState,
    action => {
      return reducer(action, setAppDataState)
    },
  ]

  return (
    <AppDataContext.Provider value={contextValue}>
      {props.children}
    </AppDataContext.Provider>
  )
}

export { AppDataContext, AppDataProvider }
