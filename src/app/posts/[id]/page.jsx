'use client';
import { Heading, Text } from '@chakra-ui/react';
import axios from 'axios';

async function getDetailedPage(id) {
	const { data } = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`);

	return data;
}

export default async function PostsDetailPage({ params }) {
	const data = await getDetailedPage(params.id);
	return (
		<div>
			saad
			<Heading>{data.title}</Heading>
			<Text color={'red.600'}>{data.body}</Text>
		</div>
	);
}
