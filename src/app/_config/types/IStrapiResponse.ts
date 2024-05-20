interface NavItem {
    id: number
    label: string
    url: string
}

interface Logo {
    id: number
    attributes: {
        name: string
        alternativeText: string | null
        caption: string | null
        width: number
        height: number
        formats: any | null // You can specify the formats interface if needed
        hash: string
        ext: string
        mime: string
        size: number
        url: string
        previewUrl: string | null
        provider: string
        provider_metadata: any | null // You can specify the provider metadata interface if needed
        createdAt: string
        updatedAt: string
    }
}

interface Nav {
    id: number
    phoneNumber: string
    logo: {
        data: Logo
    }
    NavItems: NavItem[]
}

interface Button {
    id: number
    label: string
    link: string
}

interface BgImage {
    data: {
        id: number
        attributes: {
            name: string
            alternativeText: string
            caption: string | null
            width: number
            height: number
            formats: any // You can specify the formats interface if needed
            hash: string
            ext: string
            mime: string
            size: number
            url: string
            previewUrl: string | null
            provider: string
            provider_metadata: any | null // You can specify the provider metadata interface if needed
            createdAt: string
            updatedAt: string
        }
    }
}

interface Hero {
    id: number
    subtitle: string
    title: string
    button: Button
    bgImage: BgImage
}

export interface IAttributes {
    createdAt: string
    updatedAt: string
    publishedAt: string
    navigation: Nav
    hero: Hero
}

export interface IStrapiResponse {
    id: number
    attributes: IAttributes
}
