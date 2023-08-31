import { Flex, IconButton, Image, useColorMode } from '@chakra-ui/react';
import Link from 'next/link';
import React from 'react';
import { BiLogoTelegram } from 'react-icons/bi';

export default function footer() {
	const { toggleColorMode, colorMode } = useColorMode();

	return (
		<Flex justifyContent={'space-between'} px={10} py={4} alignItems={'center'} bg={'rgba(250,250,250,0.15)'}>
			<Link href={'/'}>
				{colorMode === 'light' ? (
					<Image w={40} src={'https://6459153c9655650068ca2cb3--invest-in-school.netlify.app/dark_logo.png'} alt='logo' />
				) : (
					<Image w={40} src={'https://6459153c9655650068ca2cb3--invest-in-school.netlify.app/light_logo.png'} alt='logo' />
				)}
			</Link>
			<IconButton
				aria-label='color-mode'
				fontSize={'3xl'}
				icon={<BiLogoTelegram />}
				colorScheme={'facebook'}
				variant={'ghost'}
				cursor={'pointer'}
			/>
		</Flex>
	);
}
