import * as nodemailer from 'nodemailer'
import * as env from 'dotenv'
import { render } from '@react-email/render'

env.config()
const { USERNAME, PASSWORD, TESTING } = process.env

function createTransporter() {
  return nodemailer.createTransport({
    host: TESTING ? 'smtp.ethereal.email' : 'smtp.gmail.com',
    service: 'gmail',
    port: TESTING ? 587 : 465,
    secure: !TESTING, // true only on not testing enviroments
    auth: {
      type: 'login',
      user: USERNAME, 
      pass: PASSWORD,
    }
  })
}

export async function sendEmail(html: React.ReactElement) {
  const transporter = createTransporter()
  const response = await transporter.sendMail({
    from: USERNAME,
    to: USERNAME,
    subject: 'Test',
    html: html 
  })
  return response
}