import { describe, expect, it } from 'vitest'
import { config } from 'dotenv'

config() // Env variables

describe('Configuration', () => {

  const { USERNAME, PASSWORD } = process.env
  
  it('.env file works', () => {
    expect(USERNAME).toBeTruthy()
    expect(PASSWORD).toBeTruthy()
  })

})