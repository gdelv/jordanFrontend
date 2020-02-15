import React from 'react'
import { Route, Switch } from "react-router-dom";
import Landing from '../screens/Landing'
import Shoes from '../screens/Shoes'
import Shoe from '../screens/Shoe'

export const Routes = (props) => {
    return (
        <Switch>
            <Route exact path ='/' component={Landing}/>
            <Route exact path ='/shoes' component={Shoes}/>
            <Route exact path ='/shoes/:id' component={Shoe}/>
            {/* <Route exact path ='/cart' component={Cart} /> */}
        </Switch>
    )
}
