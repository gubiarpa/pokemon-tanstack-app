import { Card, Placeholder, PlaceholderButton } from 'react-bootstrap';
import { generateRandomArray } from '../utils/helpers';
import { WithClassName, WithStyle } from '../types/common';

interface Props extends WithClassName, WithStyle {}

export const PokemonLoading = ({ className }: Props) => {
	return (
		<>
			<Card.Img
				variant='top'
				className={`${className} p-2`}
			/>
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
					className='mt-2'
				/>
			</Card.Body>
		</>
	);
};
