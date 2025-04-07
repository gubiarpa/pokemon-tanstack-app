import { useQuery } from '@tanstack/react-query';
import queryKeys from '../constants/queryKeys';
import { getPokemon, getPokemonList } from '../services';

const pokemonListStaletime = Number(import.meta.env.VITE_POKEMON_LIST_STALETIME);

export function usePokemonList(offset: number, limit: number) {
	return useQuery({
		queryKey: [queryKeys.POKEMON_LIST, offset, limit],
		queryFn: () => getPokemonList(offset, limit),
		staleTime: pokemonListStaletime,
	});
}

export function usePokemon(url: string) {
	return useQuery({
		queryKey: [url],
		queryFn: () => getPokemon(url),
		staleTime: pokemonListStaletime,
	});
}
