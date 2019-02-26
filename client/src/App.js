import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import logo from './logo.svg';
import './App.css';

class App extends Component {

state = {
    data: null
  };

  componentDidMount() {
      // Call our fetch function below once the component mounts
    this.callBackendAPI()
      .then(res => this.setState({ data: res.express }))
      .catch(err => console.log(err));
  }
    // Fetches our GET route from the Express server. (Note the route we are fetching matches the GET route from server.js
  callBackendAPI = async () => {
    const response = await fetch('/express_backend');
    const body = await response.json();

    if (response.status !== 200) {
      throw Error(body.message)
    }
    return body;
};

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>A react app, yay</p>
          <p className="App-intro">{this.state.data}</p>
        </header>
      </div>
    );
  }
}

// class Square extends React.Component {
//   // ** constructor no longer used **
//   // setting constructor to keep track of the state of the Square
//   constructor(props){
//     // all constructors must start with a super call to access inherited methods
//     super(props);
//     // this.state is used by react to remember things
//     this.state = {
//       // setting initial value of the state to null
//       value: null,
//     };
//   }
//   render(){
//     // passing down props.onClick from parent board class
//     // passing down props.value from parent board class
//     return (
//       <button
//       className="Square"
//       onClick={() => this.props.onClick()}
//       >
//         {this.props.value}
//       </button>
//     );
//   }
// }

function Square(props){
  return(
    <button className="Square" onClick={props.onClick}>
      {props.value}
    </button>
  )
}

class Board extends React.Component{

  // defining the squares array
  constructor(props){
    super(props);
    this.state = {
      squares: Array(9).fill(null),
    };
  }

  // handle click event
  handleClick(i){
    const squares = this.state.squares.slice();
    squares[i] = 'X';
    this.setState({squares: squares});
  }

  // render square pulls from the array
  renderSquare(i){
    return (
      <Square
        value={this.state.squares[i]}
        onClick={() => this.handleClick(i)}
      />
    );
  }

  render(){
    const status = 'Next player: X';

    return (
   <div>
     <div className="status">{status}</div>
     <div className="board-row">
       {this.renderSquare(0)}
       {this.renderSquare(1)}
       {this.renderSquare(2)}
     </div>
     <div className="board-row">
       {this.renderSquare(3)}
       {this.renderSquare(4)}
       {this.renderSquare(5)}
     </div>
     <div className="board-row">
       {this.renderSquare(6)}
       {this.renderSquare(7)}
       {this.renderSquare(8)}
     </div>
   </div>
 );
}
}

class Game extends React.Component {
  render() {
    return (
      <div className="Game">
        <div className="game-board">
          <Board />
        </div>
        <div className="game-info">
          <div>{/* status */}</div>
          <ol>{/* TODO */}</ol>
        </div>
      </div>
    );
  }
}

//ReactDOM.render(<Game />,  document.getElementById('root'));
export default Game;
//export default App;
