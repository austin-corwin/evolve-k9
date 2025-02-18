import { Box, Button, HStack, Heading, Icon, Stack, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import { StarIcon } from '@heroicons/react/16/solid'
import { homepageConfig } from '@/app/_config/pages/homepageConfig'
import TestimonialButtons from './TestimonialButtons'
import TestimonialText from './TestimonialText'
import { indexReducer } from './helpers/indexReducer'

interface ITestimonials {
    body: string
}

const Testimonials: React.FC<ITestimonials> = () => {
    const [truncatedString, setTruncatedString] = React.useState(true)
    const { title, items, link } = homepageConfig.testimonials
    const startingIndex = 0
    const [activeIndex, dispatch] = React.useReducer(indexReducer, startingIndex)
    const activeItem = items[activeIndex]
    const handleIncrement = React.useCallback(
        (actionType: 'increment' | 'decrement') => {
            switch (actionType) {
                case 'increment':
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

    return (
        <VStack alignItems='start' display='flex' gap={{ base: 8 }} px={{ base: 2, lg: 0 }}>
            <Box display='flex' w='full' justifyContent='space-between' mb={{ base: 0, lg: 6 }}>
                <Heading
                    id='testimonials'
                    fontSize={{ base: '4xl', lg: '6xl', xl: '7xl' }}
                    fontFamily='mont'
                    color='brandGreen.300'
                >
                    <Box display='inline-block'>{title}</Box>
                </Heading>
                <Box
                    alignItems={'center'}
                    display={{ base: 'none', md: 'flex' }}
                    gap={{ base: 1, md: 3 }}
                >
                    <TestimonialButtons
                        onDecrement={() => handleIncrement('decrement')}
                        onIncrement={() => handleIncrement('increment')}
                        isNextDisabled={activeIndex === items.length - 1}
                        isPrevDisabled={activeIndex === 0}
                    />
                </Box>
            </Box>
            <Stack gap={{ base: 16, lg: 20 }} w='full' flexDirection={{ base: 'column' }}>
                <VStack key={activeItem.body} gap={{ base: 4, lg: 8 }} position='relative' w='full'>
                    <React.Fragment key={activeItem.body}>
                        <TestimonialText>
                            {truncatedString
                                ? `${activeItem.body.substring(0, 500)}...`
                                : activeItem.body}
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
                        </TestimonialText>
                        <HStack>
                            {Array.from({ length: activeItem.rating }).map((_) => (
                                <Icon
                                    key={Math.random()}
                                    as={StarIcon}
                                    boxSize={6}
                                    fill='brandOrange.300'
                                />
                            ))}
                        </HStack>
                        <Heading
                            id='testimonials'
                            fontSize={{ base: 'xl', lg: '3xl', xl: '2xl' }}
                            fontFamily='mont'
                            color='brandOrange.300'
                        >
                            <Text> - {activeItem.author}</Text>
                        </Heading>
                        <Box
                            alignItems={'center'}
                            display={{ base: 'flex', md: 'none' }}
                            gap={{ base: 1, md: 3 }}
                        >
                            <TestimonialButtons
                                onDecrement={() => handleIncrement('decrement')}
                                onIncrement={() => handleIncrement('increment')}
                                isNextDisabled={activeIndex === items.length - 1}
                                isPrevDisabled={activeIndex === 0}
                            />
                        </Box>
                    </React.Fragment>
                </VStack>
            </Stack>
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
