import { describe, expect, it, assert } from 'vitest'
import { sendEmail } from './email'
import { BaseTemplate } from './templates/base_template'
import { render } from '@react-email/render'

describe('Email', () => {

  const html = render(BaseTemplate())
  expect(html).toBeTruthy()

  it.skip('Sends an Email', async () => {
    const response = await sendEmail(html)
    expect(response.accepted).toBe(true)
  })

  it('Parses a React Component to a Html String', () => {
    assert.isString(html)
  })

})