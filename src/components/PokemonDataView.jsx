import css from './PokemonInfo.module.css';


export default function PokemonDataView({ pokemon: { sprites, name, stats } }) {
    return (
        <div className={css.Info__card}>
            <img
                src={sprites.other['official-artwork'].front_default}
                alt={name}
                width={300}
                className={css.Info__pokemonImg}
            />
            <div>
                <h3 className={css.Info_name}>{name}</h3>
                <ul className={css.Data__list}>
                    {stats.map(entry => (
                        <li key={entry.stat.name} className={css.Data__item}>
                            <span className={css.Data__text}>{entry.stat.name}:</span> <span className={css.Data__value}>{entry.base_stat}</span>
                        </li>
                    ))}
                </ul>
            </div>
            
            
        </div>
    )
}