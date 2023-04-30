import { describe, expect, it, assert } from 'vitest'
import { sendEmail } from './email'
import { BaseTemplate } from './templates/base_template'
import { render } from '@react-email/render'

describe('Email', () => {

  it.skip('Sends an Email', async () => {
    const response = await sendEmail()
    expect(response).toBeTruthy()
  })

  it('Parses a React Component to a Html String', () => {
    const html = render(BaseTemplate())
    expect(html).toBeTruthy()
    assert.isString(html)
  })

})