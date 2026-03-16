import { render } from '@testing-library/react'
import titleContents from '../titleContents'
import sideAContents from '../sideAContents'
import sideBContents from '../sideBContents'

const DOOR_IDS = Array.from({ length: 25 }, (_, i) => i)

describe('titleContents', () => {
  it.each(DOOR_IDS)('returns content for door %i', (id) => {
    expect(titleContents(id)).toBeTruthy()
  })

  it.each(DOOR_IDS)('renders without crashing for door %i', (id) => {
    const { unmount } = render(<>{titleContents(id)}</>)
    unmount()
  })

  it('returns null/undefined for an invalid door id', () => {
    // default case — should not crash the app
    expect(() => titleContents(99)).not.toThrow()
  })
})

describe('sideAContents', () => {
  it.each(DOOR_IDS)('returns content for door %i', (id) => {
    expect(sideAContents(id)).toBeTruthy()
  })

  it.each(DOOR_IDS)('renders without crashing for door %i', (id) => {
    const { unmount } = render(<>{sideAContents(id)}</>)
    unmount()
  })

  it('each door includes an iframe (YouTube embed)', () => {
    DOOR_IDS.forEach((id) => {
      const { container, unmount } = render(<>{sideAContents(id)}</>)
      expect(container.querySelector('iframe')).not.toBeNull()
      unmount()
    })
  })
})

describe('sideBContents', () => {
  it.each(DOOR_IDS)('returns content for door %i', (id) => {
    expect(sideBContents(id)).toBeTruthy()
  })

  it.each(DOOR_IDS)('renders without crashing for door %i', (id) => {
    const { unmount } = render(<>{sideBContents(id)}</>)
    unmount()
  })
})
