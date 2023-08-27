'use client';
import {
	Box,
	Button,
	Flex,
	HStack,
	IconButton,
	Image,
	Menu,
	MenuButton,
	MenuItem,
	MenuList,
	useColorMode,
	useColorModeValue,
} from '@chakra-ui/react';
import Link from 'next/link';
import { BsFillMoonFill, BsFillSunFill } from 'react-icons/bs';
import { FaUserGraduate } from 'react-icons/fa';
import { MdGTranslate } from 'react-icons/md';
import { BiMenuAltRight } from 'react-icons/bi';
import { useTranslation } from 'react-i18next';
import { language } from '@/config/constants';
import { useContext } from 'react';
import { UserContext } from '@/app/providers';

export default function Header() {
	const { toggleColorMode, colorMode } = useColorMode();
	const { t, i18n } = useTranslation();
	const { state } = useContext(UserContext);

	const renderNav = () => {
		if (state) {
			if (state.email === 'uchqundev@gmail.com') {
				return [
					<>
						<Link href={'/profile'}>{t('profile', { ns: 'layout' })}</Link>
						<Link href={'/create-post'}>Maqola yozish</Link>
					</>,
				];
			}
		} else {
			<Link href={'/signin'}>
				<Button rightIcon={<FaUserGraduate />} colorScheme='facebook' variant={'outline'}>
					{t('login', { ns: 'layout' })}
				</Button>
			</Link>;
		}
	};

	const onLanguage = lng => {
		i18n.changeLanguage(lng);
	};
	return (
		<Flex
			px={{ base: 2, lg: 16 }}
			h={24}
			align={'center'}
			bg={'rgba(250,250,250,0.15)'}
			justifyContent={'space-between'}
			borderBottom={'1px'}
			borderBottomColor={useColorModeValue('gray.200', 'gray.700')}
			shadow={'base'}
		>
			<Link href={state ? '/' : 'signin'}>
				{colorMode === 'light' ? (
					<Image w={40} src={'https://6459153c9655650068ca2cb3--invest-in-school.netlify.app/dark_logo.png'} alt='logo' />
				) : (
					<Image w={40} src={'https://6459153c9655650068ca2cb3--invest-in-school.netlify.app/light_logo.png'} alt='logo' />
				)}
			</Link>
			<HStack gap={8}>
				<Flex display={{ base: 'none', md: 'flex' }} gap={7}>
					<Link href={'/'}>{t('home', { ns: 'layout' })}</Link>
					<Link href={'/about'}>{t('about', { ns: 'layout' })}</Link>
					{renderNav()}
					<Link href={'/'}>{t('contact', { ns: 'layout' })}</Link>
				</Flex>
				<HStack display={{ base: 'none', md: 'flex' }}>
					<Menu>
						<MenuButton
							aria-label='translate'
							as={IconButton}
							icon={<MdGTranslate />}
							colorScheme={'facebook'}
							variant={'outline'}
						/>
						<MenuList>
							{language.map(item => (
								<MenuItem
									key={item.lng}
									onClick={() => onLanguage(item.lng)}
									backgroundColor={i18n.resolvedLanguage === item.lng ? 'facebook.500' : ''}
								>
									<Flex gap={4}>
										<Image w={8} src={item.img} /> {item.nativeLang}
									</Flex>
								</MenuItem>
							))}
						</MenuList>
					</Menu>

					<IconButton
						aria-label='color-mode'
						onClick={toggleColorMode}
						icon={colorMode == 'light' ? <BsFillMoonFill /> : <BsFillSunFill />}
						colorScheme={'facebook'}
						variant={'outline'}
					/>
				</HStack>
				<Box display={{ base: 'block', md: 'none' }}>
					<IconButton
						aria-label='color-mode'
						fontSize={'3xl'}
						icon={<BiMenuAltRight />}
						colorScheme={'facebook'}
						variant={'ghost'}
						cursor={'pointer'}
					/>
				</Box>
			</HStack>
		</Flex>
	);
}
