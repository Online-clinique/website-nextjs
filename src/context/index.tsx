import { createContext, useContext, useState } from 'react';

const AppContext = createContext(null);

export function AppWrapper({ children }) {
	const [profile_image, setProfile] = useState('');

	let sharedState = {
		profile_image,
		set_profile_pic: () => {},
	};

	return (
		<AppContext.Provider value={sharedState}>{children}</AppContext.Provider>
	);
}

export function useAppContext() {
	return useContext(AppContext);
}
