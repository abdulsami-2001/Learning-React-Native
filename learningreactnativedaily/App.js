import React from 'react'
import AStorage from './Screens/AStorage/AStorage'
import DynamicDependentDropdown from './Screens/DynamicDependent/DynamicDependentDropdown'
import InterstitialADS from './Screens/InterstitialADS/InterstitialADS'

const App = () => {
  return (
    <>
      {/* <DynamicDependentDropdown /> */}
      <AStorage />
      <InterstitialADS />
    </>
  )
}

export default App
