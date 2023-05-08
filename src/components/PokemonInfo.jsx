import { Component } from 'react';
import loading from '../images/loading.png';
import pokemonLoading from '../images/pokemonLoading.png';
import css from './PokemonInfo.module.css'
// import PokemonDataView from './PokemonDataView';
// import PokemonErrorView from './PokemonErrorView';
// import PokemonPendingView from './PokemonPendingView';

export default class PokemonInfo extends Component {
    state = {
        pokemon: null,
        loading:false,
    }



    componentDidUpdate(prevProps, prevState) {
        if (prevProps.pokemonName !== this.props.pokemonInfo) {
            console.log('Pokemons name changed');
            
            this.setState({ loading: true });

            setTimeout(() => {
                fetch(`https://pokeapi.co/api/v2/pokemon/${this.props.pokemonName}`)
                .then(res => res.json())
                .then(pokemon => this.setState({ pokemon }))
                .finally(() => this.setState({loading: false}));
            },2000)
            
           
                  
        }
    }


    render() {
        return <div>
            <h1 className={css.Info__title}>Pokemon Info</h1>

            {this.state.loading && <div> <img src={pokemonLoading} alt="pokemon Loading" width={300}/> <h2>Wait a second we search your pokemon...</h2></div>}
            {!this.props.pokemonName && <div className={css.Info__box}><img src={loading} alt="not found" width={300} /> <h2 className={css.Info__text}>Let's see who is inside</h2> </div>}
            {this.state.pokemon && <div>{this.state.pokemon.name}</div>}
        </div>
    }
}