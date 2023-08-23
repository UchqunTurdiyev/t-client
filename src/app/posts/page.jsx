import axios from 'axios';
import React from 'react';
import { notFound } from 'next/navigation';
import { Post } from '@/component';

async function getData() {
	const { data } = await axios.get('https://jsonplaceholder.typicode.com/posts?_limit=10');
	return data;
}

export default async function PostsPage() {
	const data = await getData();

	if (!data.length) {
		notFound();
	}

	return (
		<>
			<Post data={data} />
		</>
	);
}
