'use client';
import { Box, Spinner } from '@chakra-ui/react';
import React from 'react';

export default function LoadingPost() {
	return (
		<Box mt={'200px'} zIndex={50}>
			<Spinner thickness='4px' speed='0.65s' emptyColor='white' color='blue.500' size='xl' />
		</Box>
	);
}
