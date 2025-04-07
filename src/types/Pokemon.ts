export interface Pokemon {
	id: number;
	order: number;
	name: string;
	height: number;
	is_default: boolean;
	sprites: Sprites;
	types: PokemonType[];
}

export interface Sprites {
	back_default: string;
	back_female: any;
	back_shiny: string;
	back_shiny_female: any;
	front_default: string;
	front_female: any;
	front_shiny: string;
	front_shiny_female: any;
	other: Other;
}

export interface Other {
	dream_world: DreamWorld;
	home: Home;
	showdown: Showdown;
}

export interface DreamWorld {
	front_default: string;
	front_female: any;
}

export interface Home {
	front_default: string;
	front_female: any;
	front_shiny: string;
	front_shiny_female: any;
}

export interface OfficialArtwork {
	front_default: string;
	front_shiny: string;
}

export interface Showdown {
	back_default: string;
	back_female: any;
	back_shiny: string;
	back_shiny_female: any;
	front_default: string;
	front_female: any;
	front_shiny: string;
	front_shiny_female: any;
}

export interface PokemonType {
	slot: number;
	type: TypeDescription;
}

export interface TypeDescription {
	name: string;
	url: string;
}
