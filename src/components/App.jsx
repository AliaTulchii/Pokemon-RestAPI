import { Component } from 'react';
import { ReactComponent as PokemonTitle } from '../images/pokemonTitle.svg';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import PokemonForm from './PokemonForm';
import css from './App.module.css'
import PokemonInfo from './PokemonInfo';

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
        <div className={css.App__header}>
        <PokemonForm onSubmit={this.handleFormSubmit} />
          <PokemonTitle width={250} height={200} className={css.App__logo} />
        </div>
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
        <PokemonInfo pokemonName={this.state.pokemonName} />
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