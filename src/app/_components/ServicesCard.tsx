import {
    Card,
    CardFooter,
    Box,
    Stack,
    CardBody,
    Heading,
    Text,
    Button,
    Icon,
} from '@chakra-ui/react'
import Image from 'next/image'
import React from 'react'

interface ICard {
    icon: React.ForwardRefExoticComponent<Omit<React.SVGProps<SVGSVGElement>, 'ref'>>
    title: string
    children?: React.ReactNode
}

const ServicesCard: React.FC<ICard> = ({ icon, title, children }) => {
    return (
        <Card
            direction={{ base: 'column', sm: 'row' }}
            overflow='hidden'
            variant='outline'
            gap={8}
            border='none'
            w='full'
            bg='brandTan.300'
        >
            <Box
                display='flex'
                alignItems='center'
                justifyContent='center'
                w='full'
                pos='relative'
                minW={{ base: '100%', sm: '200px' }}
                maxW={{ base: '100%', sm: '200px' }}
                minH={{ base: '200px' }}
                maxH={{ base: '200px' }}
                bg='brandBlack.300'
                rounded='xl'
            >
                {/* <Image objectFit='cover' src='/assets/marcusdogs.jpeg' alt='Caffe Latte' fill /> */}
                <Icon fill='white' as={icon} boxSize={24} />
            </Box>
            <Stack>
                <CardBody pt={0}>
                    <Heading color='brandBlack.300' size='xl'>
                        {title}
                    </Heading>
                    <Text py='2'>{children}</Text>
                </CardBody>
                <CardFooter>
                    <Button variant='primary'>Reach out</Button>
                </CardFooter>
            </Stack>
        </Card>
    )
}
export default ServicesCard
