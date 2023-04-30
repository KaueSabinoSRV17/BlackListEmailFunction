import * as nodemailer from 'nodemailer'

async function main() {
  
  const testAccount = await nodemailer.createTestAccount()

  const transporter = nodemailer.createTransport({
    host: "smtp.ethereal.email",
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user: 'gene41@ethereal.email', // generated ethereal user
      pass: 'wmSp3a9h9qS6HA6pZU', // generated ethereal password
    }
  })

}