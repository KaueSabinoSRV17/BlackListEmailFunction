import * as nodemailer from 'nodemailer'
import * as env from 'dotenv'

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

export async function sendEmail() {
  const transporter = createTransporter()
  const response = await transporter.sendMail({
    from: USERNAME,
    to: USERNAME,
    subject: 'Test',
    html: '<h1>Testing .env file</h1>'
  })
  return response
}