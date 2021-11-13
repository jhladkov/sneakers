import React from 'react';
import {Route} from "react-router-dom";
import Home from "./pages/Home";
import Header from "./components/header/Header";
import './base-style/App.scss'
import Cart from "./components/cart/Cart";
import Like from "./pages/Like";
import Purchases from "./pages/Purchases";

function App() {
    return (
        <main className='main'>
            <Header/>
            <Cart/>
            <Route path='/' exact component={Home}/>
            <Route path='/like' exact component={Like}/>
            <Route path='/purchases' exact component={Purchases}/>
        </main>
    );
}

export default App;
