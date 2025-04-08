import { usePokemonList } from '../hooks/pokemon-list';
import { WithClassName } from '../types/common';
import { PokemonItem } from './PokemonItem';

interface Props extends WithClassName {
	offset: number;
	limit: number;
}

export const PokemonList = ({ className, offset, limit = Number(import.meta.env.VITE_POKEMON_LIST_LIMIT) }: Props) => {
	const { isLoading, isError, data: pokemonList } = usePokemonList(offset, limit);

	if (isLoading) return <>Loading...</>;
	if (isError) return <>Error...</>;

	return (
		<>
			{pokemonList!.results.map((pokemon) => (
				<PokemonItem
					key={pokemon.name}
					style={{ height: '28rem' }}
					className={className}
					pokemonItemResponse={pokemon}
				/>
			))}
		</>
	);
};
