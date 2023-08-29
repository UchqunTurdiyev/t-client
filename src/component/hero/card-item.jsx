import { Box, Card, CardBody, Divider, Flex, Heading, Image, Stack, Text } from '@chakra-ui/react';
import { useState, useEffect } from 'react';

export default function CardItem() {
	const [profile, setProfile] = useState([]);
	useEffect(() => {
		fetch('http://localhost:5000/mypost', {
			headers: {
				Authorization: 'Uchqun ' + localStorage.getItem('jwt'),
			},
		})
			.then(res => res.json())
			.then(result => {
				setProfile(result.myPost);
			});
	});
	return (
		<Flex flexDirection={'column'} gap={3} w={'400px'}>
			<Heading>My Post</Heading>
			<Divider />
			{profile.map(item => (
				<Card maxW='sm' key={item._id}>
					<CardBody p={0}>
						<Image src={item.photo} alt={item._id} borderRadius='lg' />
						<Stack mt='6' spacing='3' p={2}>
							<Heading size='md'>{item.title}</Heading>
							<Text>{item.body}</Text>
						</Stack>
					</CardBody>
				</Card>
			))}
		</Flex>
	);
}
