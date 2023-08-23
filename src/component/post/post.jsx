'use client';
import { Box, Table, Tbody, Thead } from '@chakra-ui/react';
import Link from 'next/link';
import React from 'react';

export default function post({ data }) {
	return (
		<Box>
			<Table>
				<Thead>1</Thead>
				{data.map(c => (
					<Tbody key={c.id}>
						<Link href={`/posts/${c.id}`}>{c.title}</Link>
					</Tbody>
				))}
			</Table>
		</Box>
	);
}
