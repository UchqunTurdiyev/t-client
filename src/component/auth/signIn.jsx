'use client';
import { Box, Button, Flex, Heading, Image, Input, Text } from '@chakra-ui/react';
import Link from 'next/link';
import React, { useState } from 'react';

export default function SignIn() {
	return (
		<Box w={'full'} h={'75vh'} bg={'gray.700'} px={20} py={10}>
			<Heading textAlign='center'>Login</Heading>
			<Flex flexDirection={{ md: 'row', sm: 'column' }} gap={6} w={'full'} h={'full'} mt={10} justifyContent={'space-between'}>
				<Box w={'70%'}>
					<Image
						w={'full'}
						objectFit={'cover'}
						src='https://tecdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg'
						alt='Sign Up'
					/>
				</Box>
				<Box w={'full'}>
					<Flex flexDirection={'column'} gap={5}>
						<Input type='email' placeholder='Email' />
						<Input type='password' placeholder='Password' />
						<Button type='submit' colorScheme='facebook' variant={'outline'}>
							Sign In
						</Button>
						<Text display={'flex'}>
							Don't have an account?{' '}
							<Link href={'/signup'} style={{ color: '#1A73E8', marginLeft: '4px' }}>
								Register
							</Link>
						</Text>
					</Flex>
				</Box>
			</Flex>
		</Box>
	);
}
