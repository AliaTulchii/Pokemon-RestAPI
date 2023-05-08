import { Component } from 'react';
import { toast } from 'react-toastify';
import { ReactComponent as Pokeball } from '../images/pokeballsvg.svg';
import 'react-toastify/dist/ReactToastify.css';
import css from './PokemonForm.module.css'






export default class PokemonForm extends Component {
    state = {
        pokemonName: '',

    };

    handleNameChange = event => {
        this.setState({ pokemonName: event.currentTarget.value.toLowerCase() });
    };

    handleSubmit = event => {
        event.preventDefault();

        
        if (this.state.pokemonName.trim() === '') {
            toast.error('Enter pokemons name!', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                });
            return;
        }

        this.props.onSubmit(this.state.pokemonName);
        this.setState({ pokemonName: '' });
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit} className={css.Form}>
                <input
                    type="text"
                    name="pokemonName"
                    value={this.state.pokemonName}
                    onChange={this.handleNameChange}
                    className={css.Form__input}
                    placeholder="Enter pokemon's name"
                />

                <button
                    type="submit"
                    className={css.Form__buttn}
                >
                    <Pokeball width={20} height={20} />
                    
                </button>
            </form>
        )
    }
}