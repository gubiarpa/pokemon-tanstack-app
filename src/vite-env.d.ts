/// <reference types="vite/client" />

interface ImportMetaEnv {
	readonly VITE_BASE_URL: string;
	readonly VITE_TIMEOUT: number;

	readonly VITE_POKEMON_LIST_STALETIME: number;

	readonly VITE_TRACKING_SHOW: 'ENABLE' | 'DISABLE';
	readonly VITE_TRACKING_INTTERMITENT: 'ENABLE' | 'DISABLE';
	readonly VITE_TRACKING_CYCLE: number;
}
