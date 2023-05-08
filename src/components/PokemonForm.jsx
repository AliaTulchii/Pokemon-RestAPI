import { Component } from 'react';
import { toast } from 'react-toastify';
import { ReactComponent as Pokeball } from '../images/pokeballsvg.svg';
import 'react-toastify/dist/ReactToastify.css';




const styles = { form: { marginBottom: 20 } };

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
            <form onSubmit={this.handleSubmit} style={styles.form}>
                <input
                    type="text"
                    name="pokemonName"
                    value={this.state.pokemonName}
                    onChange={this.handleNameChange}
                />

                <button type="submit">
                    <Pokeball width={10} height={10} />
                    Search
                </button>
            </form>
        )
    }
}