'use client';

import {
	Box,
	Button,
	Text,
	ButtonGroup,
	Card,
	CardBody,
	CardFooter,
	Divider,
	Heading,
	Image,
	Stack,
	Input,
	Flex,
	HStack,
} from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import CardItem from './card-item';

export default function Hero() {
	const [data, setData] = useState([]);

	useEffect(() => {
		fetch('http://localhost:5000/allpost', {
			headers: {
				'Content-Type': 'application/json',
				Authorization: 'Uchqun ' + localStorage.getItem('jwt'),
			},
		})
			.then(res => res.json())
			.then(result => {
				setData(result.posts);
			});
	}, []);
	console.log(data);
	return (
		<Box p='20'>
			<Flex gap={5}>
				<Flex flexDirection={'column'} gap={5}>
					{data.map(item => (
						<Card key={item._id} maxW='4xl' mx={'auto'}>
							<Heading fontWeight={'400'} fontFamily={'monospace'} fontSize={'2xl'} p={4}>
								Author: {item.postedBy.name}
							</Heading>
							<Image src={item.photo} alt={item._id} borderRadius='lg' />
							<Stack mt='2' p={2} spacing='3'>
								<Heading fontSize={'4xl'} size='md'>
									{item.title}
								</Heading>

								<Text fontSize='xl'>{item.body}</Text>
							</Stack>
							<CardFooter>
								<Input type='text' variant='flushed' placeholder='Add a comment...' />
							</CardFooter>
						</Card>
					))}
				</Flex>
				<Stack>
					{data.map(item => (
						<CardItem {...item} />
					))}
				</Stack>
			</Flex>
		</Box>
	);
}
