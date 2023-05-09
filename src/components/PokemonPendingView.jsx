// import { ImSpinner } from 'react-icons/im';
//import PokemonDataView from './PokemonDataView.jsx';
import pokemonLoading from '../images/pokemonLoading.png';
import css from './PokemonInfo.module.css';
import { Dna  } from  'react-loader-spinner'




export default function PokemonPendingView({ pokemonName }) {
    // const pokemon = {
    //     name: pokemonName,
    //     sprites: {
    //         other: {
    //             'official-artwork': {
    //                 front_default: pendingImage,
    //             },
    //         },
    //     },
    //     stats:[],
    // }


    return (
        <div className={css.Info__loadingBox}>
            <img src={pokemonLoading} alt="pokemon Loading" width={500} className={css.Info__loadingImg} />
            <div className={css.Pending__box}>
            <h2 className={css.Info__pending}>Wait a second we search your pokemon</h2>
            <Dna
            visible={true}
            height="80"
            width="80"
            ariaLabel="dna-loading"
            wrapperStyle={{}}
            wrapperClass="dna-wrapper"
            
            />
            </div>
        </div>
    )
}