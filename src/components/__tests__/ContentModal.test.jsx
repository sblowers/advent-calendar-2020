import { render, screen, act, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { createRef } from 'react'
import ContentModal from '../ContentModal'

function renderModal(props = {}) {
  const ref = createRef()
  const pauseAnimation = vi.fn()
  const playAnimation = vi.fn()
  render(
    <ContentModal
      ref={ref}
      pauseAnimation={pauseAnimation}
      playAnimation={playAnimation}
      {...props}
    />
  )
  return { ref, pauseAnimation, playAnimation }
}

describe('ContentModal', () => {
  it('is hidden before showModal is called', () => {
    renderModal()
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument()
  })

  it('becomes visible after showModal is called', async () => {
    const { ref } = renderModal()
    act(() => { ref.current.showModal(0) })
    expect(await screen.findByRole('dialog')).toBeInTheDocument()
  })

  it('shows A-Side and B-Side tabs', async () => {
    const { ref } = renderModal()
    act(() => { ref.current.showModal(0) })
    await screen.findByRole('dialog')

    expect(screen.getByRole('tab', { name: /A-Side/i })).toBeInTheDocument()
    expect(screen.getByRole('tab', { name: /B-Side/i })).toBeInTheDocument()
  })

  it('calls pauseAnimation when opened', async () => {
    const { ref, pauseAnimation } = renderModal()
    act(() => { ref.current.showModal(0) })
    await screen.findByRole('dialog')
    expect(pauseAnimation).toHaveBeenCalledOnce()
  })

  it('calls playAnimation when closed', async () => {
    const user = userEvent.setup()
    const { ref, playAnimation } = renderModal()

    act(() => { ref.current.showModal(0) })
    await screen.findByRole('dialog')

    await user.click(screen.getByRole('button', { name: /close/i }))

    expect(playAnimation).toHaveBeenCalled()
    await waitFor(() => expect(screen.queryByRole('dialog')).not.toBeInTheDocument())
  })

  it('shows content for every door without crashing', async () => {
    for (let id = 0; id < 25; id++) {
      const ref = createRef()
      const { unmount } = render(
        <ContentModal ref={ref} pauseAnimation={() => {}} playAnimation={() => {}} />
      )
      act(() => { ref.current.showModal(id) })
      await screen.findByRole('dialog')
      unmount()
    }
  })
})
