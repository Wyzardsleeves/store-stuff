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
    let newItem = {
      id: item.id,
      name: item.name,
      loc: "store"
    }
    let list = [...this.state.items];
    var index = list.indexOf(item);
    console.log(index);
    list.splice(index, 1, newItem);
    this.setState({items: list}, console.log('sent to store!' , list));
  }

  sendToCart(e, item){
    /* change location to Cart */
    e.preventDefault();
    console.log('sendToCart is working on ' + item.name);
    let newItem = {
      id: item.id,
      name: item.name,
      loc: "cart"
    }
    let list = [...this.state.items];
    var index = list.indexOf(item);
    console.log(index);
    list.splice(index, 1, newItem);
    this.setState({items: list}, console.log('sent to cart!' , list));
  }

  render() {
    return (
      <div className="App">
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
