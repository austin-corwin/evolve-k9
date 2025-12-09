import { google } from 'googleapis'
import { NextRequest, NextResponse } from 'next/server'

type SheetFormData = {
    first_name: string
    last_name: string
    zip_code?: string
    area_of_interest: string
    email: string
    phone_number: string
    dogs_name: string
    dogs_age: string
    additional_information?: string
    favoriteTreat?: string
}

// Next.js App Router route handlers receive only the request (and optional context) argument.
export async function POST(req: NextRequest) {
    const body = (await req.json()) as unknown as SheetFormData

    // Ignore submissions that look like bots (honeypot should stay empty)
    if (body.favoriteTreat && body.favoriteTreat.trim() !== '') {
        return NextResponse.json({ success: true, skipped: true })
    }

    const values = [
        body.first_name ?? '',
        body.last_name ?? '',
        body.zip_code ?? '',
        body.area_of_interest ?? '',
        body.email ?? '',
        body.phone_number ?? '',
        body.additional_information ?? '',
    ]

    try {
        // Prepare google auth
        const auth = new google.auth.GoogleAuth({
            credentials: {
                client_email: process.env.GOOGLE_CLIENT_EMAIL,
                private_key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, '\n'),
            },
            scopes: [
                'https://www.googleapis.com/auth/drive',
                'https://www.googleapis.com/auth/drive.file',
                'https://www.googleapis.com/auth/spreadsheets',
            ],
        })
        const sheets = google.sheets({ version: 'v4', auth })
        const response = await sheets.spreadsheets.values.append({
            spreadsheetId: process.env.GOOGLE_SHEET_ID,
            range: 'A1:G1',
            valueInputOption: 'USER_ENTERED',
            requestBody: {
                values: [values],
            },
        })
        return NextResponse.json({ success: true, response, body: { data: response.data } })
    } catch (error) {
        console.error(error)
        return NextResponse.json({ error: 'Could not submit form data' })
    }
}
