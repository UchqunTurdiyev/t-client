'use client';
export * from '@chakra-ui/react';
import i18n from '@/component/i18n';
import { CacheProvider } from '@chakra-ui/next-js';
import { ChakraProvider } from '@chakra-ui/react';
import React, { useContext, useEffect } from 'react';
import { Client, HydrationProvider } from 'react-hydration-provider';
import { I18nextProvider } from 'react-i18next';
import { createContext, useReducer } from 'react';
import { reducer, initialState } from '@/reducer/user.reducer';
import { useRouter } from 'next/navigation';

export const UserContext = createContext();

export default function Providers({ children }) {
	const [state, dispatch] = useReducer(reducer, initialState);
	const router = useRouter();
	// const { state, dispatch } = useContext(UserContext);

	useEffect(() => {
		const user = JSON.parse(localStorage.getItem('user'));

		if (user) {
			dispatch({ type: 'USER', payload: user });
		} else {
			router.push('/signin');
		}
	}, []);

	return (
		<HydrationProvider>
			<UserContext.Provider value={{ state, dispatch }}>
				<CacheProvider>
					<ChakraProvider>
						<I18nextProvider i18n={i18n}>
							<Client>{children}</Client>
						</I18nextProvider>
					</ChakraProvider>
				</CacheProvider>
			</UserContext.Provider>
		</HydrationProvider>
	);
}
