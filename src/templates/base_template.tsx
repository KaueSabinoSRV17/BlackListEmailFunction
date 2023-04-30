import * as React from 'react'
import { Html } from '@react-email/html'

export function BaseTemplate(): React.ReactElement {
    return (
      <Html>
        <h1>From React with Types</h1>
      </Html>
    )
}