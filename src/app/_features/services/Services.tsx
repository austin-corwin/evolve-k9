import { Box, Button, HStack, Heading, Icon, Stack, Text, VStack } from '@chakra-ui/react'
import Image from 'next/image'
import React from 'react'
import { HomeIcon, AcademicCapIcon, BookOpenIcon } from '@heroicons/react/16/solid'
import ServicesCard from '@/app/_components/ServicesCard'

interface IServices {}

const Services: React.FC<IServices> = () => {
    return (
        <Stack gap={{ base: 8, md: 16 }} w='full' flexDirection={{ base: 'column' }}>
            <Heading
                id='about'
                // fontSize={{ base: 'md', lg: '3xl', xl: '4xl' }}
                fontSize={{ base: 'md', lg: '6xl', xl: '7xl' }}
                fontFamily='mont'
                color='brandBlack.100'
            >
                <Box fontSize={{ base: '4xl', lg: '6xl', xl: '7xl' }} display='inline-block'>
                    {/* Programs{' '} */}
                    <Text display='inline-block' color='brandGreen.300'>
                        Programs
                    </Text>{' '}
                </Box>
            </Heading>
            <Stack direction={{ base: 'column', lg: 'column' }} gap={12}>
                <ServicesCard icon={BookOpenIcon} title='Training'>
                    <VStack gap={8} alignItems={'start'}>
                        <VStack alignItems={'start'}>
                            <Text color='brandOrange.300' fontSize='xl' fontWeight='semibold'>
                                Package 1 - Basic
                            </Text>
                            <Text>
                                Doggo ipsum very taste wow long doggo very jealous pupper, ur givin
                                me a spook. Heckin angery woofer mlem boof doggorino, boof heckin
                                good boys and girls. Blop long water shoob fluffer he made many
                                woofs big ol doggorino heckin good boys and girls big ol, you are
                                doing me the shock sub woofer pats mlem he made many woofs
                                puggorino.
                            </Text>
                        </VStack>
                        <VStack alignItems={'start'}>
                            <Text color='brandOrange.300' fontSize='xl' fontWeight='semibold'>
                                Package 2 - Advanced
                            </Text>
                            <Text>
                                Doggo ipsum very taste wow long doggo very jealous pupper, ur givin
                                me a spook. Heckin angery woofer mlem boof doggorino, boof heckin
                                good boys and girls. Blop long water shoob fluffer he made many
                                woofs big ol doggorino heckin good boys and girls big ol, you are
                                doing me the shock sub woofer pats mlem he made many woofs
                                puggorino.
                            </Text>
                        </VStack>
                        <VStack alignItems={'start'}>
                            <Text color='brandOrange.300' fontSize='xl' fontWeight='semibold'>
                                Package 3 - Most Advanced
                            </Text>
                            <Text>
                                Doggo ipsum very taste wow long doggo very jealous pupper, ur givin
                                me a spook. Heckin angery woofer mlem boof doggorino, boof heckin
                                good boys and girls. Blop long water shoob fluffer he made many
                                woofs big ol doggorino heckin good boys and girls big ol, you are
                                doing me the shock sub woofer pats mlem he made many woofs
                                puggorino.
                            </Text>
                        </VStack>
                    </VStack>
                </ServicesCard>
            </Stack>
        </Stack>
    )
}
export default Services
