import React from 'react'
import { Route, HashRouter, Switch } from 'react-router-dom'
import Dashboard from './components/Dashboard'
// import Cards from './components/Cards'
import Main from './components/Main'
// import Signup from './components/Signup'
import ScrollToTop from './components/ScrollTop'
import Search from './components/Search'
import About from './components/AboutUs'
import RequestScan from './components/request_a_scan'

export default props => (
    <HashRouter>
      <ScrollToTop>
        <Switch>
          <Route exact path='/' component={ Main } />
          <Route exact path='/dashboard' component={ Dashboard } />
          {/* <Route exact path='/signup' component={ Signup } /> */}
         {/* <Route exact path='/cards' component={ Cards } /> */}
         <Route exact path='/request_a_scan' component={ RequestScan } />
          <Route exact path='/search' component={ Search } />
          <Route exact path='/about_us' component={ About } />
        </Switch>
      </ScrollToTop>
    </HashRouter>
  )