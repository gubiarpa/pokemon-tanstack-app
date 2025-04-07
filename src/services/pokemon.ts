import apiBase from './base/apiBase';
import apiUrl from '../constants/apiUrl';

import { PokemonListResponse } from '../types/PokemonList';

export async function getPokemonList(): Promise<PokemonListResponse> {
	const url = apiUrl.POKEMON_LIST;
	const { data } = await apiBase.get<PokemonListResponse>(url);
	return data;
}
