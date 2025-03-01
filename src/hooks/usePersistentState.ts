import {useEffect, useState} from "react";

export function usePersistentState<T>(key: string, defaultValue: T): [T, React.Dispatch<React.SetStateAction<T>>] {
	const [state, setState] = useState<T>(defaultValue);

	useEffect(() => {
		if (typeof localStorage === "undefined") return;

		const storedValue = localStorage.getItem(key);

		if (storedValue) {
			setState(JSON.parse(storedValue));
		}
	}, [key]);

	useEffect(() => {
		if (typeof localStorage !== "undefined") {
			localStorage.setItem(key, JSON.stringify(state));
		}
	}, [key, state]);

	return [state, setState];
}