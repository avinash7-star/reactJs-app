import React from 'react'
import {
  Footer,
  Content,
  Header
} from './index'


// import App from '../App'

const Layout = () => {
  return (
    <div className="c-app c-default-layout">
      <div className="c-wrapper">
        <Header/>
        <div className="c-body"><Content/></div>
        <Footer/>
      </div>
    </div>
  )
}

export default Layout