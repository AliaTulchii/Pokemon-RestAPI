import { Component } from 'react';
// import PokemonDataView from './PokemonDataView';
// import PokemonErrorView from './PokemonErrorView';
// import PokemonPendingView from './PokemonPendingView';

export default class PokemonInfo extends Component {
    
    componentDidUpdate(prevProps, prevState) {
        if (prevProps.pokemonName !== this.props.pokemonInfo) {
            console.log('Pokemons name changed');
            console.log('prevProps.pokemonName: ', prevProps.pokemonName);
            console.log('this.props.pokemonName: ', this.props.pokemonName);
        }
    }


    render() {
        return <div>
            <h1>Pokemon Info</h1>
            <p>{this.props.pokemonName}</p>
        </div>
    }
}