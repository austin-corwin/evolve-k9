import {
    Box,
    Button,
    Flex,
    HStack,
    Heading,
    Icon,
    IconButton,
    Stack,
    Text,
    VStack,
} from '@chakra-ui/react'
import Image from 'next/image'
import React, { Reducer } from 'react'
import { StarIcon } from '@heroicons/react/16/solid'
import { homepageConfig } from '@/app/_config/pages/homepageConfig'
import { start } from 'repl'

interface ITestimonials {
    body: string
}

const indexReducer = (state: number, action: { value: string }) => {
    switch (action.value) {
        case 'increment':
            return state + 1

        case 'decrement':
            return state - 1

        default:
            break
    }
    return state
}

const Testimonials: React.FC<ITestimonials> = () => {
    const { title, items, link } = homepageConfig.testimonials
    const startingIndex = 0
    // const [activeIndex, setActiveIndex] = React.useState<number>(0)
    const [activeIndex, dispatch] = React.useReducer(indexReducer, startingIndex)
    const activeItem = items[activeIndex]
    const handleIncrement = React.useCallback(
        (actionType: 'increment' | 'decrement') => {
            switch (actionType) {
                case 'increment':
                    console.log('activeIndex is ', activeIndex)
                    if (activeIndex > items.length - 2) {
                        return
                    } else {
                        setTruncatedString(true)
                        dispatch({ value: 'increment' })
                    }
                    break

                case 'decrement':
                    setTruncatedString(true)
                    dispatch({ value: 'decrement' })

                default:
                    break
            }
        },
        [activeIndex],
    )
    const [truncatedString, setTruncatedString] = React.useState(true)
    return (
        <VStack alignItems='start' display='flex' gap={{ base: 8 }} px={{ base: 2, lg: 0 }}>
            <Box display='flex' w='full' justifyContent='space-between'>
                <Heading
                    id='testimonials'
                    fontSize={{ base: '4xl', lg: '6xl', xl: '7xl' }}
                    fontFamily='mont'
                    color='brandGreen.300'
                >
                    <Box display='inline-block'>{title}</Box>
                </Heading>
                <Box alignItems={'center'} display='flex' gap={{ base: 1, md: 3 }}>
                    <Button
                        onClick={() => handleIncrement('decrement')}
                        w='50px'
                        h='50px'
                        transform='auto'
                        rounded='full'
                        rotate='180deg'
                        borderColor='brandGreen.300'
                        bg='brandGreen.300'
                        p='2'
                        isDisabled={activeIndex === 0}
                        _hover={{
                            background: 'brandGreen.300',
                        }}
                    >
                        <svg
                            width='100px'
                            height='100px'
                            viewBox='0 0 24 24'
                            fill='currentColor'
                            xmlns='http://www.w3.org/2000/svg'
                        >
                            <path
                                fill-rule='evenodd'
                                clip-rule='evenodd'
                                d='M12.2929 4.29289C12.6834 3.90237 13.3166 3.90237 13.7071 4.29289L20.7071 11.2929C21.0976 11.6834 21.0976 12.3166 20.7071 12.7071L13.7071 19.7071C13.3166 20.0976 12.6834 20.0976 12.2929 19.7071C11.9024 19.3166 11.9024 18.6834 12.2929 18.2929L17.5858 13H4C3.44772 13 3 12.5523 3 12C3 11.4477 3.44772 11 4 11H17.5858L12.2929 5.70711C11.9024 5.31658 11.9024 4.68342 12.2929 4.29289Z'
                                fill='#FFF5D2'
                            />
                        </svg>
                    </Button>
                    <Button
                        onClick={() => handleIncrement('increment')}
                        w='50px'
                        h='50px'
                        _hover={{
                            background: 'brandGreen.300',
                        }}
                        transform='auto'
                        rounded='full'
                        color='white'
                        borderColor='brandGreen.300'
                        bg='brandGreen.300'
                        p='2'
                        isDisabled={activeIndex === items.length - 1}
                    >
                        <svg
                            width='100px'
                            height='100px'
                            viewBox='0 0 24 24'
                            fill='none'
                            xmlns='http://www.w3.org/2000/svg'
                        >
                            <path
                                fill-rule='evenodd'
                                clip-rule='evenodd'
                                d='M12.2929 4.29289C12.6834 3.90237 13.3166 3.90237 13.7071 4.29289L20.7071 11.2929C21.0976 11.6834 21.0976 12.3166 20.7071 12.7071L13.7071 19.7071C13.3166 20.0976 12.6834 20.0976 12.2929 19.7071C11.9024 19.3166 11.9024 18.6834 12.2929 18.2929L17.5858 13H4C3.44772 13 3 12.5523 3 12C3 11.4477 3.44772 11 4 11H17.5858L12.2929 5.70711C11.9024 5.31658 11.9024 4.68342 12.2929 4.29289Z'
                                fill='#FFF5D2'
                            />
                        </svg>
                    </Button>
                </Box>
            </Box>
            <Stack gap={{ base: 16, lg: 20 }} w='full' flexDirection={{ base: 'column' }}>
                <VStack key={activeItem.body} gap={{ base: 4, lg: 8 }} position='relative' w='full'>
                    <React.Fragment key={activeItem.body}>
                        {/* <Box
                            display='flex'
                            alignItems={'start'}
                            position='absolute'
                            fontSize='16rem'
                            left='0'
                            top='-8rem'
                        >
                            "
                        </Box> */}
                        <Text
                            color='brandBlack.300'
                            align='left'
                            fontWeight='medium'
                            fontFamily='mont'
                            fontSize={{ base: 'md', lg: 'lg' }}
                        >
                            <span
                                style={{
                                    fontSize: '12rem',
                                    lineHeight: '0',
                                    position: 'relative',
                                    top: '4rem',
                                    transform: 'rotate(10deg)',
                                    display: 'inline-block',
                                }}
                            >
                                "
                            </span>
                            {truncatedString ? activeItem.body.substring(0, 500) : activeItem.body}
                            {truncatedString ? '...' : ''}
                            {truncatedString ? (
                                <Button
                                    p={0}
                                    bg='none'
                                    fontWeight='bold'
                                    border='none'
                                    onClick={() => setTruncatedString(false)}
                                    ml={2}
                                    mb={0.5}
                                    _hover={{ background: 'none' }}
                                >
                                    See all
                                </Button>
                            ) : (
                                <Button
                                    p={0}
                                    bg='none'
                                    fontWeight='bold'
                                    border='none'
                                    onClick={() => setTruncatedString(true)}
                                    ml={2}
                                    mb={0.5}
                                    _hover={{ background: 'none' }}
                                >
                                    See less
                                </Button>
                            )}
                        </Text>
                        <HStack>
                            {Array.from({ length: activeItem.rating }).map((_) => (
                                <Icon key={Math.random()} as={StarIcon} boxSize={6} />
                            ))}
                        </HStack>
                        <Text> - {activeItem.author}</Text>
                    </React.Fragment>
                </VStack>
            </Stack>
            {/* <Stack gap={{ base: 16, lg: 20 }} w='full' flexDirection={{ base: 'column' }}>
                {items.map(({ rating, body, author }) => (
                    <VStack key={body} gap={{ base: 4, lg: 8 }} w='full'>
                        <React.Fragment key={body}>
                            <HStack>
                                {Array.from({ length: rating }).map((_) => (
                                    <Icon key={Math.random()} as={StarIcon} boxSize={8} />
                                ))}
                            </HStack>
                            <Text
                                color='brandBlack.300'
                                align='center'
                                fontWeight='medium'
                                fontFamily='mont'
                                fontSize={{ base: 'md', lg: 'lg' }}
                            >
                                {body}
                            </Text>
                            <Text> - {author}</Text>
                        </React.Fragment>
                    </VStack>
                ))}
            </Stack> */}
            {link && (
                <VStack w='full'>
                    <Button as='a' target='_blank' href={link} variant='primary'>
                        See More
                    </Button>
                </VStack>
            )}
        </VStack>
    )
}
export default Testimonials
