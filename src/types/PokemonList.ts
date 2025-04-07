export interface PokemonItemResponse {
	name: string;
	url: string;
}

export interface PokemonListResponse {
	count: number;
	next: string;
	previous: string;
	results: PokemonItemResponse[];
}
