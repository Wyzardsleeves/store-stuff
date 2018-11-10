import React, { Component } from 'react';
import './App.css';


/*
import Cart from './Components/Cart';
import Store from './Components/Store';
*/

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      items: [],
    }
    this.sendToStore = this.sendToStore.bind(this);
    this.sendToCart = this.sendToCart.bind(this);
  }

  componentWillMount(){
    this.createItems();
  }

  createItems(){
    let items = [
      {
        id: 0,
        name: "dog collar",
        loc: "store"
      },
      {
        id: 1,
        name: "litter box",
        loc: "cart"
      },
      {
        id: 2,
        name: "rat trap",
        loc: "store"
      }
    ];

    this.setState({items},console.log(this.state.items));
  }

  logToConsole(array){
    console.log(array);
  }

  sendToStore(e, item){
    /* change location to Store */
    e.preventDefault();
    console.log('sendToStore is working on ' + item.name);

    this.setState((prevState) => ({
      items: prevState.items.map((i) => ( i.id === item.id ? { ...i, loc: "store" } : i ))
    }))
  }

  sendToCart(e, item){
    /* change location to Cart */
    e.preventDefault();
    console.log('sendToCart is working on ' + item.name);

    this.setState((prevState) => ({
      items: prevState.items.map((i) => ( i.id === item.id ? { ...i, loc: "cart" } : i ))
    }))
  }

  render() {
    return (
      <div className="App">
        <div>
          <a href="https://github.com/Wyzardsleeves/store-stuff/blob/master/src/App.js" target="_blank"><h5>Find on Github</h5></a>
        </div>
        <div>
          <h2>Store</h2>
          <ul>
            {this.state.items.map((stuff) =>
              <li key={stuff.id}>
                {stuff.loc === "store" &&
                  <span>
                    <p>{stuff.name}</p>
                    <button onClick={(e) => this.sendToCart(e, stuff)}>Add to Cart</button>
                  </span>
                }
              </li>
            )}
          </ul>
        </div>
        <div>
          <h2>Cart</h2>
          <ul>
            {this.state.items.map((stuff) =>
              <li key={stuff.id}>
                {stuff.loc === "cart" &&
                  <span>
                    <p>{stuff.name}</p>
                    <button onClick={(e) => this.sendToStore(e, stuff)}>Remove from Cart</button>
                  </span>
                }

              </li>
            )}
          </ul>
        </div>
        {/*
          <Store />
          <Cart />
        */}
      </div>
    );
  }
}

export default App;
