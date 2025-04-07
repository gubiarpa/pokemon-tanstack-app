import { Button, Card, Placeholder } from 'react-bootstrap';
import { WithClassName } from '../types/common';
import { PokemonItemResponse } from '../types';
import { usePokemon } from '../hooks/pokemon-list';

interface Props extends WithClassName {
	pokemon: PokemonItemResponse;
}

export const PokemonItem = ({ className, pokemon }: Props) => {
	const { url } = pokemon;
	const { isLoading, isError, data: pokemonItem } = usePokemon(url);

	if (isLoading)
		return (
			<>
				<Card style={{ width: '18rem' }}>
					<Card.Body>
						<Placeholder
							as={Card.Title}
							animation='glow'
						>
							<Placeholder xs={6} />
						</Placeholder>
						<Placeholder
							as={Card.Text}
							animation='glow'
						>
							<Placeholder xs={7} />
							<Placeholder xs={4} />
							<Placeholder xs={4} />
							<Placeholder xs={6} />
							<Placeholder xs={8} />
						</Placeholder>
						<Placeholder.Button
							variant='primary'
							xs={6}
						/>
					</Card.Body>
				</Card>
			</>
		);
	if (isError) return <>Error...</>;
	if (!pokemonItem) return <>No data...</>;

	return (
		<Card
			style={{ width: '18rem' }}
			className={className}
		>
			<Card.Img
				variant='top'
				src='holder.js/100px180'
			/>
			<Card.Body>
				<Card.Title>{pokemonItem.name}</Card.Title>
				<Card.Text>{pokemonItem.height}</Card.Text>
				<Button variant='primary'>{pokemonItem.height}</Button>
			</Card.Body>
		</Card>
	);
};
