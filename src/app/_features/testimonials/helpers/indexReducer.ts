export const indexReducer = (state: number, action: { value: string }) => {
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
