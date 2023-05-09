import { Component } from 'react';
import loadingPokemon from '../images/loadingPokemon.png';
import pokemonLoading from '../images/pokemonLoading.png';
import css from './PokemonInfo.module.css'
// import PokemonDataView from './PokemonDataView';
// import PokemonErrorView from './PokemonErrorView';
// import PokemonPendingView from './PokemonPendingView';

export default class PokemonInfo extends Component {
    state = {
        pokemon: null,
        loading: false,
    }



    componentDidUpdate(prevProps, prevState) {
        if (prevProps.pokemonName !== this.props.pokemonName) {
            console.log('Pokemons name changed');
            
            this.setState({ loading: true });

            setTimeout(() => {
                fetch(`https://pokeapi.co/api/v2/pokemon/${this.props.pokemonName}`)
                .then(res => res.json())
                .then(pokemon => this.setState({ pokemon }))
                .finally(() => this.setState({loading: false}));
            },1000)
            
           
                  
        }
    }


    render() {
        
        return <div>
            <h1 className={css.Info__title}>Pokemon Info</h1>
            <div>
            {this.state.loading && <div className={css.Info__loadingBox}> <img src={pokemonLoading} alt="pokemon Loading" width={300} className={css.Info__loadingImg} /> <h2>Wait a second we search your pokemon...</h2></div>}
            {!this.props.pokemonName && <div className={css.Info__box}><img src={loadingPokemon} alt="not found" width={300} /> <h2 className={css.Info__text}>Let's see who is inside</h2> </div>}
                {this.state.pokemon && (
                    <div className={css.Info__card}>
                        <img
                            src={this.state.pokemon.sprites.other['official-artwork'].front_default}
                            alt=""
                            width={300}
                            className={css.Info__pokemonImg}
                        />
                        <div><h3 className={css.Info_name}>{this.state.pokemon.name}</h3></div>
                        
                        
                    </div>)}
            </div>
           
        </div>
    }
}