import { Component } from 'react';
import loadingPokemon from '../images/loadingPokemon.png';
import pokemonLoading from '../images/pokemonLoading.png';
// import notFound from '../images/notFound.png';
import css from './PokemonInfo.module.css';
import PokemonDataView from './PokemonDataView';
import PokemonErrorView from './PokemonErrorView';
// import PokemonPendingView from './PokemonPendingView';

export default class PokemonInfo extends Component {
    state = {
        pokemon: null,
        // loading: false,
        error: null,
        status: 'idle',
    }



    componentDidUpdate(prevProps, prevState) {
        if (prevProps.pokemonName !== this.props.pokemonName) {
            console.log('Pokemons name changed');
            
            // this.setState({ loading: true, pokemon: null });
            this.setState({ status:'pending'});

            setTimeout(() => {
                fetch(`https://pokeapi.co/api/v2/pokemon/${this.props.pokemonName}`)
                    .then(response => {
                    if (response.ok) {
                        return response.json();
                        }
                        
                        return Promise.reject(
                            new Error(`Oops we didn't find pokemon ${this.props.pokemonName}`));
                    })
                    .then(pokemon => this.setState({ pokemon, status:'resolved' }))
                    .catch(error => this.setState({ error, status: 'rejected' }))
                // .finally(() => this.setState({loading: false}));
            },1000)
            
           
                  
        }
    }


    render() {
        
        // state machine

        if (this.state.status === 'idle') {
            return <div className={css.Info__box}><img src={loadingPokemon} alt="not found" width={300} /> <h2 className={css.Info__text}>Let's see who is inside</h2> </div>
        }

        if (this.state.status === 'pending') {
            return <div className={css.Info__loadingBox}> <img src={pokemonLoading} alt="pokemon Loading" width={500} className={css.Info__loadingImg} /> <h2 className={css.Info__pending}>Wait a second we search your pokemon...</h2></div>
        }

        if (this.state.status === 'rejected') {
            return <PokemonErrorView message={this.state.error.message}/>
        }

        if (this.state.status === 'resolved') {
            return <PokemonDataView pokemon={this.state.pokemon} />
        }



        // return <div>
        //     <h1 className={css.Info__title}>Pokemon Info</h1>
        //     <div>
        //     {this.state.error && <div className={css.Info__errorBox}><img src={notFound} alt="not found" width={300} /> <h2 className={css.Info__error}>Oops we didn't find pokemon {this.props.pokemonName}</h2></div>}
        //     {this.state.loading && !this.state.pokemon  && <div className={css.Info__loadingBox}> <img src={pokemonLoading} alt="pokemon Loading" width={300} className={css.Info__loadingImg} /> <h2>Wait a second we search your pokemon...</h2></div>}
        //     {!this.props.pokemonName && <div className={css.Info__box}><img src={loadingPokemon} alt="not found" width={300} /> <h2 className={css.Info__text}>Let's see who is inside</h2> </div>}
        //     {this.state.pokemon &&  (
        //             <div className={css.Info__card}>
        //                 <img
        //                     src={this.state.pokemon.sprites.other['official-artwork'].front_default}
        //                     alt={this.state.pokemon.name}
        //                     width={300}
        //                     className={css.Info__pokemonImg}
        //                 />
        //                 <div><h3 className={css.Info_name}>{this.state.pokemon.name}</h3></div>
                        
                        
        //             </div>)}
        //     </div>
           
        // </div>
    }
}