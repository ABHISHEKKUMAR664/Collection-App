import React from 'react'
import { BrowserRouter as Switch,Router,Route } from 'react-router-dom';
import Api from './component/color/Api';
import Pokemon from './component/pokeman/Pokemon';

const Controller = () => {
    return (
        <div>
            <Switch>
                <Router >
                    <Route path="/" component={()=><Api/>}></Route>
                    <Route path="/pokemon" component={()=><Pokemon/>}></Route>
                    

                </Router>
            </Switch>
            
        </div>
    )
}

export default Controller;
