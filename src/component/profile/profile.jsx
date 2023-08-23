'use client';
import { Box, Flex, Grid, GridItem, HStack, Heading, Text } from '@chakra-ui/react';
import Image from 'next/image';
import React from 'react';

export default function Profile() {
	return (
		<Box className='w-full h-full '>
			<Flex w={'80%'} mx={'auto'} justifyContent={'space-between'} className='border-b-2 border-gray-600 py-10'>
				<Box w={44} h={44} borderRadius={'full'} position={'relative'}>
					<Image
						fill
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
					<GridItem h={80} position={'relative'}>
						<Image
							fill
							src='https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60'
							alt='User'
						/>
					</GridItem>
					<GridItem h={80} position={'relative'}>
						<Image
							fill
							src='https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60'
							alt='User'
						/>
					</GridItem>
					<GridItem h={80} position={'relative'}>
						<Image
							fill
							src='https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60'
							alt='User'
						/>
					</GridItem>
				</Grid>
			</Box>
		</Box>
	);
}
