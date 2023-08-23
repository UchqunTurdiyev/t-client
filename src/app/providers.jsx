'use client';
export * from '@chakra-ui/react';
import i18n from '@/component/i18n';
import { CacheProvider } from '@chakra-ui/next-js';
import { ChakraProvider } from '@chakra-ui/react';
import React from 'react';
import { Client, HydrationProvider } from 'react-hydration-provider';
import { I18nextProvider } from 'react-i18next';

export default function Providers({ children }) {
	return (
		<HydrationProvider>
			<CacheProvider>
				<ChakraProvider>
					<I18nextProvider i18n={i18n}>
						<Client>{children}</Client>
					</I18nextProvider>
				</ChakraProvider>
			</CacheProvider>
		</HydrationProvider>
	);
}
