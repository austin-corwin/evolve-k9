import { homepageConfig } from '@/app/_config/pages/homepageConfig'

const submitContactForm = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const target = e.target as HTMLFormElement
    const formData = new FormData(target)
    const favoriteTreatName = homepageConfig.contact.favoriteTreat?.name
    const getFieldValue = (key: string) => formData.get(key)?.toString().trim() ?? ''

    const payload = {
        first_name: getFieldValue('first_name'),
        last_name: getFieldValue('last_name'),
        zip_code: getFieldValue('zip_code'),
        area_of_interest: getFieldValue('area_of_interest'),
        email: getFieldValue('email'),
        phone_number: getFieldValue('phone_number'),
        dogs_name: getFieldValue('dogs_name'),
        dogs_age: getFieldValue('dogs_age'),
        additional_information: getFieldValue('additional_information'),
        favoriteTreat: favoriteTreatName ? getFieldValue(favoriteTreatName) : '',
    }
    const response = await fetch('/api', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Credentials': 'true',
        },
        body: JSON.stringify(payload),
    })
    const content = await response.json()
    if (content) return content
}

export default submitContactForm
