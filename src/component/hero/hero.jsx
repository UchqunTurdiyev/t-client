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
	IconButton,
	FormControl,
} from '@chakra-ui/react';
import React, { useContext, useEffect, useState } from 'react';
import CardItem from './card-item';
import { AiFillLike, AiFillDislike } from 'react-icons/ai';
import { UserContext } from '@/app/providers';
import { TfiCommentAlt } from 'react-icons/tfi';
import { RiMailSendLine } from 'react-icons/ri';
import { TiDeleteOutline } from 'react-icons/ti';
import Link from 'next/link';
import LoadingPost from '../loading';

export default function Hero() {
	const [data, setData] = useState([]);
	const [showComment, setShowComment] = useState(false);
	const { state, dispatch } = useContext(UserContext);

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

	const likePost = id => {
		fetch('http://localhost:5000/like', {
			method: 'put',
			headers: {
				'Content-Type': 'application/json',
				Authorization: 'Uchqun ' + localStorage.getItem('jwt'),
			},
			body: JSON.stringify({
				postId: id,
			}),
		})
			.then(res => res.json())
			.then(result => {
				const newData = data.map(item => {
					if (item._id === result._id) {
						return result;
					} else {
						return item;
					}
				});
				setData(newData);
			})
			.catch(err => console.log(err));
	};

	const unLikePost = id => {
		fetch('http://localhost:5000/unlike', {
			method: 'put',
			headers: {
				'Content-Type': 'application/json',
				Authorization: 'Uchqun ' + localStorage.getItem('jwt'),
			},
			body: JSON.stringify({
				postId: id,
			}),
		})
			.then(res => res.json())
			.then(result => {
				console.log(result);
				const newData = data.map(item => {
					if (item._id === result._id) {
						return result;
					} else {
						return item;
					}
				});
				setData(newData);
			})
			.catch(err => console.log(err));
	};

	const commentsPost = (text, postId) => {
		fetch('http://localhost:5000/comments', {
			method: 'put',
			headers: {
				'Content-Type': 'application/json',
				Authorization: 'Uchqun ' + localStorage.getItem('jwt'),
			},
			body: JSON.stringify({
				postId,
				text,
			}),
		})
			.then(res => res.json())
			.then(result => {
				const newData = data.map(item => {
					if (item._id === result._id) {
						return result;
					} else {
						return item;
					}
				});
				setData(newData);
			})
			.catch(err => console.log(err));
	};

	const deletePost = postId => {
		fetch(`http://localhost:5000/deletepost/${postId}`, {
			method: 'delete',
			headers: {
				Authorization: 'Uchqun ' + localStorage.getItem('jwt'),
			},
		})
			.then(res => res.json())
			.then(result => {
				const newData = data.filter(s => s._id !== result);
				setData(newData);
			})
			.then(err => console.log(err));
	};

	return (
		<Box w={'80%'} m={'auto'} py={6}>
			<Flex gap={10} justifyContent={'space-between'}>
				<Flex w={'full'} flexDirection={'column'} gap={5}>
					{data.length ? (
						data
							.map(item => (
								<Card key={item._id} w='full' mx={'auto'}>
									<Link href={item.postedBy._id !== state._id ? `/user-profile/${item.postedBy._id}` : '/profile'}>
										<Heading fontWeight={'400'} fontFamily={'monospace'} fontSize={'2xl'} p={4}>
											Author: {item.postedBy.name}
										</Heading>
									</Link>
									<Image w={'full'} h={'420px'} objectFit={'cover'} src={item.photo} alt={item._id} borderRadius='lg' />
									<Stack mt='1' px={2} spacing='3'>
										<Flex alignItems={'center'} justifyContent={'space-between'}>
											<Heading fontSize={'4xl'} size='md'>
												{item.title}
											</Heading>
											<HStack py={4} pr={5}>
												{item.likes.includes(state._id) ? (
													<IconButton
														onClick={() => unLikePost(item._id)}
														isRound={true}
														variant='outline'
														colorScheme='red'
														aria-label='Done'
														fontSize='16px'
														icon={<AiFillDislike />}
													/>
												) : (
													<IconButton
														onClick={() => likePost(item._id)}
														isRound={true}
														variant='outline'
														colorScheme='green'
														aria-label='Done'
														fontSize='16px'
														icon={<AiFillLike />}
													/>
												)}
												<Text pr={4} as={'i'}>
													{item.likes.length}
												</Text>
												<TfiCommentAlt onClick={() => setShowComment(prev => !prev)} size={'24px'} cursor={'pointer'} />
												<Text as='i'>{item.comments.length}</Text>
											</HStack>
										</Flex>

										<Text fontSize='xl'>{item.body}</Text>
									</Stack>
									<CardFooter flexDirection={'column'}>
										{showComment
											? item.comments.map(el => (
													<Text key={el._id} borderBottom={'1px dashed #555'} my={1}>
														<Text as={'b'} mr={2} color={'green.500'}>
															{el.postedBy.name}:{' '}
														</Text>
														{el.text}
													</Text>
											  ))
											: null}
										{}
										<form
											onSubmit={e => {
												e.preventDefault();
												commentsPost(e.target[0].value, item._id);
											}}
										>
											<Input type='text' variant='flushed' placeholder='Add a comment...' />
											<Flex justifyContent={'space-between'} alignItems={'center'} mt={2}>
												<Button type='submit' rightIcon={<RiMailSendLine />}>
													Send message
												</Button>
												{item.postedBy._id === state._id && (
													<Button onClick={() => deletePost(item._id)} rightIcon={<TiDeleteOutline size={'22px'} />}>
														Delete post
													</Button>
												)}
											</Flex>
										</form>
									</CardFooter>
								</Card>
							))
							.reverse()
					) : (
						<LoadingPost />
					)}
				</Flex>
				<Stack>
					<CardItem />
				</Stack>
			</Flex>
		</Box>
	);
}
