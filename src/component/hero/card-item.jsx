import { Card, CardBody, Heading, Text } from '@chakra-ui/react';
import React from 'react';

export default function CardItem({ body, title }) {
	return (
		<Card maxW={'sm'}>
			<CardBody>
				<Heading>{title}</Heading>
				<Text>{body}</Text>
			</CardBody>
		</Card>
	);
}
