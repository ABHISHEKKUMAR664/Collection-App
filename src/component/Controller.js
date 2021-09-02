import React, { Fragment } from "react";
import Header from "../header/Header";
import Api from "./color/Api";
import Pokemon from "./pokeman/Pokemon";
import { BrowserRouter, Route, Switch } from "react-router-dom";

export const Controller = () => {
  return (
    <div className="App">
      <Header />
       <BrowserRouter>
         <Switch>
             <Route path="/color" component={Api}/>
             <Route path="/pokemon" component={Pokemon}/>

         </Switch>
       </BrowserRouter>
      
    </div>
  );
};

