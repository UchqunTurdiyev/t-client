'use client';
import { Box, Button, Flex, Heading, Image, Input, Text, useToast } from '@chakra-ui/react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';

export default function SignIn() {
	const [logEmail, setLogEmail] = useState('');
	const [logPassword, setLogPassword] = useState('');
	const toast = useToast();
	const router = useRouter();

	const logData = () => {
		if (
			!/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i.test(
				logEmail
			)
		) {
			toast({
				title: "Email manzilingizni tog'ri kiriting",
				status: 'error',
				isClosable: true,
				position: 'top-right',
			});
			return;
		}
		fetch('http://localhost:5000/signin', {
			method: 'post',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				email: logEmail,
				password: logPassword,
			}),
		})
			.then(res => res.json())
			.then(data => {
				if (data.error) {
					toast({
						title: `${data.error} !`,
						status: 'error',
						isClosable: true,
						position: 'top-right',
					});
				} else {
					localStorage.setItem('jwt', data.token);
					localStorage.setItem('user', JSON.stringify(data.user));
					toast({
						title: 'Siz muvofaqiyatli royxatdan otdingiz',
						status: 'success',
						isClosable: true,
						position: 'top-right',
					});
					router.push('/');
				}
			});
	};

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
						<Input value={logEmail} onChange={e => setLogEmail(e.target.value)} type='email' placeholder='Email' />
						<Input value={logPassword} onChange={e => setLogPassword(e.target.value)} type='password' placeholder='Password' />
						<Button onClick={() => logData()} type='submit' colorScheme='facebook' variant={'outline'}>
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
