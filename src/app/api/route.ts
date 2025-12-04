import { google } from 'googleapis'
import { NextRequest, NextResponse } from 'next/server'

type SheetFormData = {
    first_name: string
    last_name: string
    zip_code: number
    area_of_interest: string
    email: string
    phone_number: string
}

// Next.js App Router route handlers receive only the request (and optional context) argument.
export async function POST(req: NextRequest) {
    const body = (await req.json()) as unknown as SheetFormData

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
                values: [Object.values(body)],
            },
        })
        return NextResponse.json({ success: true, response, body: { data: response.data } })
    } catch (error) {
        console.error(error)
        return NextResponse.json({ error: 'Could not submit form data' })
    }
}
