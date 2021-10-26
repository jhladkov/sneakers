import React from 'react';
import {Route} from "react-router-dom";
import Home from "./pages/Home";
import Header from "./components/header/Header";
import './base-style/App.scss'
import Like from "./components/like/Like";
import Purchases from "./components/purchases/Purchases";

function App() {
    return (
        <main className='main'>
            <Header/>
            <Route path='/' exact component={Home}/>
            <Route path='/like' exact component={Like}/>
            <Route path='/purchases' exact component={Purchases}/>
        </main>
    );
}

export default App;
