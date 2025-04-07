import { Card, Placeholder, PlaceholderButton } from 'react-bootstrap';
import { generateRandomArray } from '../utils/helpers';

export const PokemonLoading = () => {
	return (
		<Card style={{ width: '10rem' }}>
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
					{generateRandomArray(9, 4, 8).map((item, index) => (
						<Placeholder
							key={index}
							xs={item}
						/>
					))}
				</Placeholder>
				<PlaceholderButton
					variant='outline-secondary'
					xs={6}
				/>
			</Card.Body>
		</Card>
	);
};
