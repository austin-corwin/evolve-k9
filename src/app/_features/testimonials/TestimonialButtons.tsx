import { Button } from '@chakra-ui/react'
import TestimonialButton from './TestimonialButton'

const TestimonialButtons = ({
    onDecrement,
    onIncrement,
    isNextDisabled,
    isPrevDisabled,
}: {
    onDecrement: () => void
    onIncrement: () => void
    isNextDisabled: boolean
    isPrevDisabled: boolean
}) => {
    return (
        <>
            <TestimonialButton onClick={onDecrement} disabled={isPrevDisabled} type='prev' />
            <TestimonialButton onClick={onIncrement} disabled={isNextDisabled} type='next' />
        </>
    )
}

export default TestimonialButtons
