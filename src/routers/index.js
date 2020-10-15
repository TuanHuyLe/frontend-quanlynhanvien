import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Dashboard from '../pages/view/Admin/Dashboard';
import SplashPage from '../pages/SplashPage';
import Login from '../pages/Login';
// import LayoutsMain from '../pages/layouts/LayoutsMain';
import LayoutsAdmin from '../pages/layouts/LayoutsAdmin';
const Routers = props => {
    return (
        <Router>
            <Switch>

                <Route exact path="/">
                    <SplashPage />
                </Route>

                <Route exact path="/login">
                    <Login />
                </Route>

                <Route exact path="/admin/:path?" >

                    <LayoutsAdmin>
                        <Switch>
                            <Route exact path="/admin">
                                <Dashboard />
                            </Route>

                        </Switch>
                    </LayoutsAdmin>
                    
                </Route>

                {/* <Route>
                    <LayoutsMain>

                    </LayoutsMain>
                </Route> */}

            </Switch>
        </Router>
    )
}

Routers.propTypes = {

}

export default Routers
