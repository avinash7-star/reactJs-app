import React, { Suspense } from 'react'
import {
  Redirect,
  Switch
} from 'react-router-dom'

  
const loading = (
  <div className="pt-3 text-center">
    <div className="sk-spinner sk-spinner-pulse"></div>
  </div>
)

const Content = () => {
  return (
      <Suspense fallback={loading}>
        <Switch>
          <Redirect from="/" to="/dashboard" />
        </Switch>
      </Suspense>
  )
}

export default React.memo(Content)