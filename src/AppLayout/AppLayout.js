import React from 'react'
import {AppHeader} from 'AppHeader'

export let AppLayout = ({children}) =>
  <div>
    <AppHeader />
    {children}
  </div>
