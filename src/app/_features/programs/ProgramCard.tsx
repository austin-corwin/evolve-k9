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
    action?: {
        label: string
        href: string
    }
}

const ProgramCard: React.FC<ICard> = ({ icon, title, children, action }) => {
    return (
        <Card
            direction={{ base: 'column', md: 'row' }}
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
                minW={{ base: '100%', md: '200px' }}
                maxW={{ base: '100%', md: '200px' }}
                minH={{ base: '200px' }}
                maxH={{ base: '200px' }}
                bg='brandBlack.300'
                rounded='xl'
            >
                <Icon fill='white' as={icon} boxSize={24} />
            </Box>
            <Stack>
                <CardBody px={0} pt={0}>
                    <Heading color='brandBlack.300' size='xl'>
                        {title}
                    </Heading>
                    <Box py='2'>{children}</Box>
                </CardBody>
                {action?.label && (
                    <CardFooter p={0}>
                        <Button as='a' href={action.href} variant='primary'>
                            {action.label}
                        </Button>
                    </CardFooter>
                )}
            </Stack>
        </Card>
    )
}
export default ProgramCard
