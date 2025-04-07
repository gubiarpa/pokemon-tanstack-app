export function delay(ms: number) {
	return new Promise((resolve) => setTimeout(resolve, ms));
}

export function getRandomNumber(min: number = 100, max: number = 1000): number {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

export function generateRandomArray(length: number, min = 100, max = 1000): number[] {
	return Array.from({ length }, () => getRandomNumber(min, max));
}

export function toProperCase(str: string): string {
	return str
		.split(' ') // Separate words
		.map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()) // Converts first letter to uppercase
		.join(' '); // Joins words
}
