'use client';
import { Box, Button, Flex, Heading, Image, Input, Text, useToast } from '@chakra-ui/react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';

export default function SignUp() {
	const [regName, setRegName] = useState('');
	const [regEmail, setRegEmail] = useState('');
	const [regPassword, setRegPassword] = useState('');
	const toast = useToast();
	const router = useRouter();

	const postData = () => {
		if (
			!/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i.test(
				regEmail
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
		fetch('http://localhost:5000/signup', {
			method: 'post',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				name: regName,
				email: regEmail,
				password: regPassword,
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
					toast({
						title: `${data.msg} .`,
						status: 'success',
						isClosable: true,
						position: 'top-right',
					});
					router.push('/signin');
				}
			});
	};

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
						<Input onChange={e => setRegName(e.target.value)} value={regName} type='text' placeholder='User name' />
						<Input onChange={e => setRegEmail(e.target.value)} value={regEmail} type='email' placeholder='Email' />
						<Input onChange={e => setRegPassword(e.target.value)} value={regPassword} type='password' placeholder='Password' />
						<Button type='submit' onClick={() => postData()} colorScheme='facebook' variant={'outline'}>
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
