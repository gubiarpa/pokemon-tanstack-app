import { Button } from 'react-bootstrap';
import { PokemonList } from '../components';
import { useState } from 'react';
export const HomePage = () => {
	const blockLimit: number = 7;

	const [limit, setLimit] = useState<number>(blockLimit);

	return (
		<div className='d-flex flex-column justify-content-center align-items-center'>
			<PokemonList
				className='mt-4 mt-sm-3'
				limit={limit}
				offset={0}
			/>
			<Button
				variant='outline-primary'
				className='my-4'
				onClick={() => setLimit(limit + blockLimit)}
			>
				Ver más ({limit})
			</Button>
		</div>
	);
};
