'use client';
import { Box, Button, Flex, Heading, Image, Input, Text } from '@chakra-ui/react';
import Link from 'next/link';
import React from 'react';

export default function SignUp() {
	return (
		<Box w={'full'} h={'75vh'} bg={'gray.700'} px={20} py={10}>
			<Heading textAlign='center'>Register</Heading>
			<Flex flexDirection={{ md: 'row', sm: 'column' }} gap={6} w={'full'} h={'full'} mt={10} justifyContent={'space-between'}>
				<Box w={'full'}>
					<Image
						w={'full'}
						objectFit={'cover'}
						src='https://tecdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp'
						alt='Sign Up'
					/>
				</Box>
				<Box w={'full'}>
					<Flex flexDirection={'column'} gap={5}>
						<Input type='text' placeholder='User name' />
						<Input type='email' placeholder='Email' />
						<Input type='password' placeholder='Password' />
						<Button colorScheme='facebook' variant={'solid'}>
							Sign Up
						</Button>
						<Text display={'flex'}>
							I have already registered:{' '}
							<Link href={'/signin'} style={{ color: '#1A73E8', marginLeft: '4px' }}>
								Login
							</Link>
						</Text>
					</Flex>
				</Box>
			</Flex>
		</Box>
	);
}
