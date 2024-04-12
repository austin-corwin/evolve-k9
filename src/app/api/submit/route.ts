import { google } from 'googleapis'
import { NextApiResponse } from 'next'
import { NextRequest } from 'next/server'

type SheetFormData = {
    first_name: string
    last_name: string
    zip_code: number
    area_of_interest: string
    email: string
    phone_number: string
}
export async function POST(req: NextRequest, res: NextApiResponse) {
    console.log('req is', req)
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method not allowed' })
    }
    const body = req.body as unknown as SheetFormData

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
            // range: 'Sheet1',
            valueInputOption: 'USER_ENTERED',
            // valueInputOption: 'RAW',
            requestBody: {
                values: [Object.values(body)],
            },
        })
        return res.status(200).json({ success: true, response, body: { data: response.data } })
    } catch (error) {
        console.error(error)
        return res.status(500).json({ error: 'Could not submit form data' })
    }
    // const response = await fetch('/.netlify/functions/submit', {
    //     method: 'POST',
    //     headers: {
    //         'Content-Type': 'application/json',
    //     },
    //     body: JSON.stringify(data),
    // })
    // return response.json()
}
