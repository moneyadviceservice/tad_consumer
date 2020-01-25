import React from 'react'
import { connect } from 'react-redux'
// import { startClock, serverRenderClock } from '../store'
import Firms from '../components/firms'
import { getFirms } from '../components/firms/actions'

class Index extends React.Component {
  

  render() {
    return <Firms />
  }
}



export default Index
