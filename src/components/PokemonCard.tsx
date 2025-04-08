import { Badge, Button, Card } from 'react-bootstrap';
import { Pokemon } from '../types';
import { WithStyle } from '../types/common';
import { toProperCase } from '../utils/helpers';

interface Props extends WithStyle {
	pokemon: Pokemon;
}

export const PokemonCard = ({ pokemon }: Props) => {
	return (
		<>
			<Card.Img
				variant='top'
				className={`p-2 pt-4`}
				src={pokemon.sprites?.other?.dream_world?.front_default}
				title={toProperCase(pokemon.name)}
				alt={toProperCase(pokemon.name)}
				height={'150px'}
			/>
			<Card.Body>
				<Card.Title>{toProperCase(pokemon.name)}</Card.Title>
				<Card.Text className='d-flex flex-wrap gap-1'>
					{pokemon.types.map(({ type }) => (
						<Badge
							key={type.name}
							bg='secondary'
						>
							{type.name}
						</Badge>
					))}
				</Card.Text>
				<Button variant='outline-secondary' className='w-100'>See details</Button>
			</Card.Body>
		</>
	);
};
