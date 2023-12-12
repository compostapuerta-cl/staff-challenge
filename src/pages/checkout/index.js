import React from 'react'
import {
    Route,
    Redirect
} from 'react-router-dom'
import Step1 from './step-1'
import Step2 from './step-2'

import PresentationalNavBar from '../../layout/navbar'
import { connect } from 'react-redux'

const sum = array => array.reduce((a, b) => a + b, 0)

const items = orderLines => orderLines.length === 0? 
    0: sum(orderLines.map(x => x.quantity))

const mapStateToProps = state => {
  return {
    items: items(state.order)
  }
}

const NavBar = connect(mapStateToProps)(PresentationalNavBar)

export default ({ match }) => 
    <div>
        <NavBar/>
        <main className="container">
            <Route path={`${match.path}/step-1`} component={Step1} />
            <Route path={`${match.path}/step-2`} component={Step2} />
            <Route exact path={match.path}
                render={() => <Redirect to={`${match.path}/step-1`} />} />
        </main>
    </div>