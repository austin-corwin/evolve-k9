import { Text } from '@chakra-ui/react'

const TestimonialText = ({ children }: { children: React.ReactNode }) => {
    return (
        <Text
            color='brandBlack.300'
            align='left'
            fontWeight='medium'
            fontFamily='mont'
            fontSize={{ base: 'md', lg: 'xl' }}
        >
            <span
                style={{
                    fontSize: '12rem',
                    lineHeight: '0',
                    position: 'relative',
                    top: '4rem',
                    transform: 'rotate(10deg)',
                    display: 'inline-block',
                    color: '#BA5624',
                }}
            >
                "
            </span>
            {children}
        </Text>
    )
}

export default TestimonialText
