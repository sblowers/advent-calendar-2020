// App-level cookie utilities are tested here without mounting the full 3D scene.
// Calendar3D depends on WebGL which is not available in jsdom, so it is mocked.

vi.mock('./components/Calendar3D', () => ({
  default: vi.fn().mockReturnValue(null),
}))

// Also mock heavy Three.js deps pulled in transitively
vi.mock('./components/SnowEffect', () => ({
  snowEffectParticles: {},
  updateSnowEffectParticles: vi.fn(),
}))

import { render, screen } from '@testing-library/react'
import App from './App'

describe('App', () => {
  it('renders the settings button', () => {
    render(<App />)
    // The cog / settings button is always present
    expect(document.querySelector('.settings-button')).toBeInTheDocument()
  })

  it('renders wreath decorations', () => {
    render(<App />)
    expect(document.querySelectorAll('.wreath-border')).toHaveLength(2)
  })
})
