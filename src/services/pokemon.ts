import apiBase from './base/apiBase';
import apiUrl from '../constants/apiUrl';

import { PokemonListResponse } from '../types/PokemonList';
import { Pokemon } from '../types';
import { delay, getRandomNumber } from '../utils/helpers';

export async function getPokemonList(offset: number, limit: number): Promise<PokemonListResponse> {
	const url = apiUrl.POKEMON_LIST;
	const { data } = await apiBase.get<PokemonListResponse>(`${url}?offset=${offset}&limit=${limit}`);
	return data;
}

export async function getPokemon(url: string): Promise<Pokemon> {
	if (import.meta.env.DEV) await delay(getRandomNumber(2000, 10000));
	const { data } = await apiBase.get<Pokemon>(url);
	return data;
}
