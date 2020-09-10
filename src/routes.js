import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import Home from "./pages/Home";
import Motivation from "./pages/Motivation";

export default function Routes() {
    return (
        <BrowserRouter>
            <Route path="/" exact component={Home} />
            <Route path="/motivation" exact component={Motivation} />
        </BrowserRouter>
    );
}