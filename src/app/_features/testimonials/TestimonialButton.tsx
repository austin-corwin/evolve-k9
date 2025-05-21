import { Button } from '@chakra-ui/react'
import { getIcon } from './helpers/getIcon'

const TestimonialButton = ({
    onClick,
    disabled,
    type,
}: {
    onClick: () => void
    disabled: boolean
    type: 'prev' | 'next'
}) => {
    const icon = getIcon(type)
    return (
        <Button
            onClick={onClick}
            w='50px'
            h='50px'
            transform='auto'
            rounded='full'
            rotate={type === 'prev' ? '180deg' : ''}
            borderColor='brandGreen.300'
            bg='brandGreen.300'
            p='2'
            isDisabled={disabled}
            aria-label={type === 'prev' ? 'Go to previous testimonial' : 'Go to next testimonial'}
            _hover={{
                background: 'brandGreen.300',
            }}
        >
            {icon}
        </Button>
    )
}

export default TestimonialButton
