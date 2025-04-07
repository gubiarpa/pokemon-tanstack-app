import { usePokemonList } from '../hooks/pokemon-list';

export const HomePage = () => {
	const { isLoading, isError, data } = usePokemonList();

	if (isLoading) return <>Loading...</>;
	if (isError) return <>Error...</>;

	return (
		<>
			<pre>{JSON.stringify(data, null, 2)}</pre>
		</>
	);
};
