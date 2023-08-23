'use client';
import { Box, Button, Flex, Heading, Input } from '@chakra-ui/react';
import React from 'react';

export default function CreatePost() {
	return (
		<Box w={'80%'} mx={'auto'} py={10}>
			<Flex flexDirection={'column'} gap={8}>
				<Heading>Maqola uchun</Heading>
				<Input variant={'flushed'} placeholder='Message' />
				<Input variant={'flushed'} placeholder='Message' />
				<Input type='file' variant={'flushed'} placeholder='Message' />
				<Button variant={'outline'} colorScheme='facebook'>
					Maqola qoshish
				</Button>
			</Flex>
		</Box>
	);
}
