import notFound from '../images/notFound.png';
import css from './PokemonInfo.module.css';


export default function PokemonErrorView({message}) {
    return (
        <div className={css.Info__errorBox}>
            <img src={notFound} alt="not found" width={300} />
            <h2 className={css.Info__error}>{message}</h2>
        </div>
    )
}