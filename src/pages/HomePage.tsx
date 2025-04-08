import { Button } from 'react-bootstrap';
import { PokemonList } from '../components';
import { useState } from 'react';
import { generateMultiples } from '../utils/helpers';
export const HomePage = () => {
	const limit: number = Number(import.meta.env.VITE_POKEMON_LIST_LIMIT);
	const [blocks, setBlocks] = useState<number>(1);

	return (
		<>
			<div className={`d-flex flex-wrap justify-content-center gap-3`}>
				{generateMultiples(limit, blocks).map((offset) => (
					<PokemonList
						key={offset}
						className='mt-4 mt-sm-3'
						limit={limit}
						offset={offset}
					/>
				))}
			</div>
			<Button
				variant='outline-primary'
				className='my-4 w-100'
				onClick={() => setBlocks((blocks) => blocks + 1)}
			>
				Ver más
			</Button>
		</>
	);
};
