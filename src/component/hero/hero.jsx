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
} from '@chakra-ui/react';
import React from 'react';

export default function Hero() {
	return (
		<Box p='20'>
			<Card maxW='sm'>
				<Image
					src='https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80'
					alt='Green double couch with wooden legs'
					borderRadius='lg'
				/>
				<Stack mt='6' p={3} spacing='3'>
					<Heading size='md'>Title</Heading>

					<Text fontSize='2xl'>It's my post</Text>
				</Stack>
				{/* <Divider /> */}
				<CardFooter>
					<Input type='text' variant='flushed' placeholder='Message...' />
				</CardFooter>
			</Card>
		</Box>
	);
}