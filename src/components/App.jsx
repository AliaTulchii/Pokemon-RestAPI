import { Component } from 'react';
// import pokemonLoading from '../images/pokemon-loading.png'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import PokemonForm from './PokemonForm';
import css from './App.module.css'

export default class App extends Component {
  state = {
    pokemonName: '',

};

  handleFormSubmit = pokemonName => {
    this.setState({pokemonName});
  }


  render() {
    return (
      <div className={css.App__box}>
        <PokemonForm onSubmit={this.handleFormSubmit} />
        <ToastContainer
position="top-right"
autoClose={3000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="light"
/>
      </div>
    )
  }
  
};







// Simple way

// state = {
//   pokemon: null,
//   loading: false,
// }

// componentDidMount() {
//   this.setState({ loading: true });
//   setTimeout(() => {
//     fetch('https://pokeapi.co/api/v2/pokemon/meowth')
//     .then(res => res.json())
//       .then(pokemon => this.setState({ pokemon }))
//       .finally(() => this.setState({ loading: false }));
//   }, 1000)

// }

// render() {
//   return (
//     <div>
//       {this.state.loading && <div><h1>Loading...</h1>
//         <img src={pokemonLoading} width={450}/></div>}
//       {this.state.pokemon && <div>{this.state.pokemon.name}</div>}
//     </div>
//   );
// }