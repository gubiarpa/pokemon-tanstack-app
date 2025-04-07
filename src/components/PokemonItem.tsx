import { Button, Card } from 'react-bootstrap';
import { WithClassName } from '../types/common';
import { PokemonItemResponse } from '../types';

interface Props extends WithClassName {
	pokemon: PokemonItemResponse;
}

export const PokemonItem = ({ className, pokemon }: Props) => {
	const { name, url } = pokemon;
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
				<Card.Title>{name}</Card.Title>
				<Card.Text>{url}</Card.Text>
				<Button variant='primary'>See details</Button>
			</Card.Body>
		</Card>
	);
};
