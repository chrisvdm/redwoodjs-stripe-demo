import { render } from '@redwoodjs/testing/web'

import PurpleTreesLayout from './PurpleTreesLayout'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('PurpleTreesLayout', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<PurpleTreesLayout />)
    }).not.toThrow()
  })
})
