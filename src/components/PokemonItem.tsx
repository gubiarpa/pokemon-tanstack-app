import { WithClassName, WithStyle } from '../types/common';
import { PokemonItemResponse } from '../types';
import { usePokemon } from '../hooks/pokemon-list';
import { Card } from 'react-bootstrap';
import { PokemonLoading } from './PokemonLoading';
import { PokemonCard } from './PokemonCard';

interface Props extends WithClassName, WithStyle {
	pokemonItemResponse: PokemonItemResponse;
}

export const PokemonItem = ({ pokemonItemResponse }: Props) => {
	const { url } = pokemonItemResponse;
	const { isLoading, isError, data: pokemon } = usePokemon(url);

	if (isError) return <>Error...</>;

	return (
		<Card
			className={`d-flex flex-column`}
			style={{ width: '18rem' }}
		>
			{isLoading && !pokemon ? <PokemonLoading style={{ width: '18rem' }} /> : <PokemonCard pokemon={pokemon!} />}
		</Card>
	);
};
