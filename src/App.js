import React, {Component} from 'react'
import {
    BrowserRouter as Router,
    Route,
    Redirect,
    withRouter
} from 'react-router-dom'

import Checkout from './pages/checkout'


const ScrollToTop = withRouter(class extends Component {
    componentDidUpdate(prevProps) {
      if (this.props.location !== prevProps.location) {
        window.scrollTo(0, 0)
      }
    }
  
    render() {
      return this.props.children
    }
  })

export default () =>
    <Router>
        <ScrollToTop>
            <Route exact path="/" 
                render={() => <Redirect to="/checkout" />} />
            <Route path="/checkout" component={Checkout} />
        </ScrollToTop>
    </Router>