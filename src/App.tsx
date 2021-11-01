import React from 'react';
import {Route} from "react-router-dom";
import Home from "./pages/Home";
import Header from "./components/header/Header";
import './base-style/App.scss'
import Like from "./components/like/Like";
import Purchases from "./components/purchases/Purchases";
import Cart from "./components/cart/Cart";
import {useTypedSelector} from "./hooks/useTypedSelector";

function App() {
    const {home} = useTypedSelector(state => state)
    return (
        <main className={`main ${home.activeMenu ? 'block' : ''}`}>
            <Header/>
            <Cart/>
            <Route path='/' exact component={Home}/>
            <Route path='/like' exact component={Like}/>
            <Route path='/purchases' exact component={Purchases}/>
        </main>
    );
}

export default App;
