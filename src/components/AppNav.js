import React from 'react'
import {IndexLink, Link} from 'react-router'

export let AppNav = props =>
  <nav>
    <IndexLink to='/' activeClassName='active'>Login</IndexLink>
    <Link to='/app' activeClassName='active'>App</Link>
  </nav>
