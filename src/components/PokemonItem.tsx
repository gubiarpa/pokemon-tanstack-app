import { Badge, Button, Card } from 'react-bootstrap';
import { WithClassName } from '../types/common';
import { PokemonItemResponse } from '../types';
import { usePokemon } from '../hooks/pokemon-list';
import { PokemonLoading } from './PokemonLoading';
import { toProperCase } from '../utils/helpers';

interface Props extends WithClassName {
	pokemon: PokemonItemResponse;
}

export const PokemonItem = ({ className, pokemon }: Props) => {
	const { url } = pokemon;
	const { isLoading, isError, data: pokemonItem } = usePokemon(url);

	if (isLoading) return <PokemonLoading />;
	if (isError) return <>Error...</>;
	if (!pokemonItem) return <>No data...</>;

	return (
		<Card
			style={{ width: '10rem' }}
			className={`d-flex flex-column ${className}`}
		>
			<Card.Img
				variant='top'
				className='p-2'
				src={pokemonItem.sprites?.other?.dream_world?.front_default}
				title={toProperCase(pokemonItem.name)}
				alt={toProperCase(pokemonItem.name)}
				height={'150px'}
			/>
			<Card.Body>
				<Card.Title>{toProperCase(pokemonItem.name)}</Card.Title>
				<Card.Text className='d-flex flex-wrap gap-1'>
					{pokemonItem.types.map(({ type }) => (
						<Badge
							key={type.name}
							bg='secondary'
						>
							{type.name}
						</Badge>
					))}
				</Card.Text>
				<Button variant='outline-secondary'>See details</Button>
			</Card.Body>
		</Card>
	);
};
