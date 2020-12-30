import React, { Suspense } from 'react'
import {
  Redirect,
  Switch, Route
} from 'react-router-dom'
  
const loading = (
  <div className="pt-3 text-center">
    <div className="sk-spinner sk-spinner-pulse"></div>
  </div>
)

const Content = () => {
  return (
      <Suspense>
        <Switch>
          <Redirect from="/" to="/dashboard" />
        </Switch>
      </Suspense>
  )
}

export default React.memo(Content)