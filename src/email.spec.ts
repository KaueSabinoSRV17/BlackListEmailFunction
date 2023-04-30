import { describe, expect, it } from 'vitest'
import { sendEmail } from './email'

describe('Email', () => {
  it('Sends an Email', async () => {
    const response = await sendEmail()
    expect(response).toBeTruthy()
  })
})