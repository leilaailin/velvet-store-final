import React from "react";
import './App.css';
import logo from './velvet-nav.png';

// Components:
import './components/NavBar/NavBar';
import NavBar from './components/NavBar/NavBar';
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";

// React-router-dom
import {BrowserRouter, Switch, Route} from 'react-router-dom';

// Views:
import Home from './views/Home/Home';
import Productos from './views/Productos';
import Nosotros from './views/Nosotros/Nosotros';
import Cart from './views/Cart';

//Cart Context:
import { CartProvider } from "./CartContext";


function App () {
    return(
      <CartProvider>
        <BrowserRouter>
            <div className="App">
              <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <NavBar/> 
              </header>
              <Switch>
                <Route path="/" exact component={Home}/>
                <Route path="/Productos" component={Productos}/>
                <Route path="/Nosotros" component={Nosotros}/>
                <Route path="/Cart" component={Cart}/>
                <Route path="/Detail/:detailId" component={ItemDetailContainer}/>
                <Route path="/Category/:categoryId" component={ItemListContainer}/>
              </Switch>
            </div>
        </BrowserRouter>
      </CartProvider>
    )
  }

export default App;
