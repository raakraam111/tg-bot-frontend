export const loadState = () => {
	try {
	let serialState = null;
	if (typeof window !== 'undefined') {
		serialState = localStorage.getItem('appState');
	}
	if (serialState === null) {
		return undefined;
	}
	return JSON.parse(serialState);
	} catch (err) {
	return undefined;
	}
};

export const saveState = (state) => {
	try {
		const serialState = JSON.stringify(state);
		if (typeof window !== 'undefined') {
			localStorage.setItem('appState', serialState);
		}
	} catch(err ) {
		console.log(err);
	}
};
