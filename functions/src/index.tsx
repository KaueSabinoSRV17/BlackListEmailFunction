import * as React from 'react'
import { ReactElement } from 'react'
import * as functions from 'firebase-functions'
import * as nodemailer from 'nodemailer'
import { render } from '@react-email/render'
import { Html } from '@react-email/html'

// // Start writing functions
// // https://firebase.google.com/docs/functions/typescript

const USERNAME = 'cristina.moen27@ethereal.email'
const PASSWORD = 'RzCcMVKynAuT8FkJwQ'

interface ContactData {
  name: string,
  phone: string,
  email: string,
  observation: string
}

function BaseTemplate({ name, phone, email, observation }: ContactData) {
  return (
    <Html>
      <h1>Estou interessado em um show da Blacklist...</h1>
      <p>
        Olá, me chamo {name}, posso ser contatado em:
      </p>
      <dl>
        <dt>Telefone: </dt>
        <dd>{phone}</dd>
        <dt>Email: </dt>
        <dd>{email}</dd>
        <dt>Observação: </dt>
        <dd>{observation}</dd>
      </dl>
    </Html>
  )
}

function createTransporter() {
  return nodemailer.createTransport({
    host: 'smtp.ethereal.email',
    port: 587,
    secure: false,
    auth: {
      user: USERNAME,
      pass: PASSWORD,
    },
  })
}

async function sendNodemailerEmail(transporter: nodemailer.Transporter, element: ReactElement) {
  const html = render(element)
  await transporter.sendMail({
    from: USERNAME,
    to: USERNAME,
    subject: 'Functions',
    html: html,
  })
}

export const sendEmail = functions.https.onRequest(
  async (request, response) => {
    const transporter = createTransporter()
    const { name, email, phone, observation } = request.body as ContactData
    await sendNodemailerEmail(transporter, <BaseTemplate name={name} email={email} phone={phone} observation={observation} />)
    response.status(200).end()
  }
)
