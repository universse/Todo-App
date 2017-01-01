import React from 'react'
import {connect} from 'react-redux'
import {startLogout} from 'actions'

let Logout = props =>
  <button onClick={() => props.dispatch(startLogout())} className='center bn w-40-l w-70 f4-l f5-m f6 link dim br2 pv3-ns pv2 db white bg-red'>Sign Out!</button>

export default connect()(Logout)
