const submitContactForm = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const target = e.target as HTMLFormElement
    const formData = {
        first_name: (target?.[0] as HTMLInputElement).value,
        last_name: (target?.[1] as HTMLInputElement).value,
        zip_code: (target?.[2] as HTMLInputElement).value,
        area_of_interest: (target?.[3] as HTMLInputElement).value,
        email: (target?.[4] as HTMLInputElement).value,
        phone_number: (target?.[5] as HTMLInputElement).value,
        dogs_name: (target?.[6] as HTMLInputElement).value,
        dogs_age: (target?.[7] as HTMLInputElement).value,
        additional_info: (target?.[8] as HTMLInputElement).value,
        opt_in: (target?.[9] as HTMLInputElement).checked,
    }
    const response = await fetch('/api', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Credentials': 'true',
        },
        body: JSON.stringify(formData),
    })
    const content = await response.json()
    if (content) return content
}

export default submitContactForm
