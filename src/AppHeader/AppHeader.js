import React from 'react'
import {IndexLink, Link} from 'react-router'

export let AppHeader = props =>
  <div>
    <IndexLink to='/' activeClassName='active'>Login</IndexLink>
    <Link to='/app' activeClassName='active'>App</Link>
  </div>
