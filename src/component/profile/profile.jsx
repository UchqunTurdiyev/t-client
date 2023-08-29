'use client';
import { Box, Flex, Grid, GridItem, HStack, Heading, Image, Text } from '@chakra-ui/react';

import React, { useEffect, useState } from 'react';

export default function Profile() {
	const [post, setPost] = useState([]);

	useEffect(() => {
		fetch('http://localhost:5000/mypost', {
			headers: {
				Authorization: 'Uchqun ' + localStorage.getItem('jwt'),
			},
		})
			.then(res => res.json())
			.then(result => {
				setPost(result.myPost);
			});
	}, []);
	console.log(post);
	return (
		<Box className='w-full h-full '>
			<Flex w={'80%'} mx={'auto'} justifyContent={'space-between'} className='border-b-2 border-gray-600 py-10'>
				<Box w={44} h={44} borderRadius={'full'} position={'relative'}>
					<Image
						src='https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60'
						alt='User'
						className='rounded-full'
					/>
				</Box>
				<Flex flexDirection={'column'}>
					<Heading>Uchqun Turdiev</Heading>
					<HStack my={6} gap={6}>
						<Text>Posts: 99</Text>
						<Text>Following: 99</Text>
						<Text>Follow: 99</Text>
					</HStack>
				</Flex>
			</Flex>

			{/* Gallery ==================== */}
			<Box p='20'>
				<Grid templateColumns='repeat(auto-fit, minmax(300px, 1fr))' gap={'6'}>
					{post.map(el => (
						<GridItem key={el._id} h={80} position={'relative'}>
							<Image fill src={el.photo} alt={el.title} />
						</GridItem>
					))}
				</Grid>
			</Box>
		</Box>
	);
}
