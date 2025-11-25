export const customDelay = async (duration: number) => {
	await new Promise<void>((r) => setTimeout(r, duration));
};
