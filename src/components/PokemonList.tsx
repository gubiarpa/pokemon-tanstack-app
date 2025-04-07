import { usePokemonList } from '../hooks/pokemon-list';
import { WithClassName } from '../types/common';
import { PokemonItem } from './PokemonItem';

interface Props extends WithClassName {}

export const PokemonList = ({ className }: Props) => {
	const { isLoading, isError, data: pokemonList } = usePokemonList();

	if (isLoading) return <>Loading...</>;
	if (isError) return <>Error...</>;

	return (
		<div className={`d-flex flex-wrap justify-content-center gap-3 ${className}`}>
			{pokemonList!.results.map((pokemon) => (
				<PokemonItem
					key={pokemon.url}
					className={'gubiarpa'}
					pokemon={pokemon}
				/>
			))}
		</div>
	);
};
