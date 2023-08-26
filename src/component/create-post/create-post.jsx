'use client';
import { Box, Button, Flex, Heading, Image, Input, Toast, useToast } from '@chakra-ui/react';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';

export default function CreatePost() {
	const [title, setTitle] = useState('');
	const [body, setBody] = useState('');
	const [image, setImage] = useState('');
	const [url, setUrl] = useState('');
	const toast = useToast();
	const router = useRouter();

	useEffect(() => {
		if (url) {
			fetch('http://localhost:5000/createpost', {
				method: 'post',
				headers: {
					'Content-Type': 'application/json',
					Authorization: 'Uchqun ' + localStorage.getItem('jwt'),
				},
				body: JSON.stringify({
					title: title,
					body: body,
					picture: url,
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
							title: 'Siz muvofaqiyatli maqola qoshdingiz',
							status: 'success',
							isClosable: true,
							position: 'top-right',
						});
						router.push('/');
					}
				});
		}
	}, [url]);

	const postData = () => {
		const data = new FormData();
		data.append('file', image);
		data.append('upload_preset', 'sammiGram');
		data.append('cloud_name', 'dtabxocmw');
		fetch('https://api.cloudinary.com/v1_1/dtabxocmw/image/upload', {
			method: 'post',
			body: data,
		})
			.then(res => res.json())
			.then(data => {
				console.log(data.url);
				setUrl(data.url);
			})
			.catch(err => {
				console.log(err);
			});
	};

	return (
		<Box w={'80%'} mx={'auto'} py={10}>
			<Flex flexDirection={'column'} gap={8}>
				<Heading>Maqola uchun</Heading>
				<Box w={'full'} h={'350px'}>
					<Image
						className='w-full h-full object-cover'
						src='https://images.unsplash.com/photo-1607705703571-c5a8695f18f6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80'
						alt='Create image'
					/>
				</Box>
				<Input type='text' value={title} onChange={e => setTitle(e.target.value)} variant={'flushed'} placeholder='Message' />
				<Input value={body} onChange={e => setBody(e.target.value)} variant={'flushed'} placeholder='Message' />
				<Input onChange={e => setImage(e.target.files[0])} type='file' variant={'flushed'} placeholder='Message' />
				<Button onClick={() => postData()} variant={'outline'} colorScheme='facebook'>
					Maqola qoshish
				</Button>
			</Flex>
		</Box>
	);
}
