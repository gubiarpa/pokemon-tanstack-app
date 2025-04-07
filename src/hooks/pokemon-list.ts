import { useQuery } from '@tanstack/react-query';
import queryKeys from '../constants/queryKeys';
import { getPokemonList } from '../services';

const pokemonListStaletime = Number(import.meta.env.VITE_POKEMON_LIST_STALETIME);

export function usePokemonList() {
	return useQuery({
		queryKey: [queryKeys.POKEMON_LIST],
		queryFn: () => getPokemonList(),
		staleTime: pokemonListStaletime,
	});
}
