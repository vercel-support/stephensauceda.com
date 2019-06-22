import React from 'react'
import { render } from '@testing-library/react'

import Index from '../pages/index'

test('should say my name', () => {
  const { getByText } = render(<Index />)
  expect(getByText('Stephen Sauceda')).not.toBeNull()
})
