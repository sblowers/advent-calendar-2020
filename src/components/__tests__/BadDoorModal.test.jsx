import { render, screen, act, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { createRef } from 'react'
import BadDoorModal from '../BadDoorModal'

function renderModal(props = {}) {
  const ref = createRef()
  const pauseAnimation = vi.fn()
  const playAnimation = vi.fn()
  render(
    <BadDoorModal
      ref={ref}
      pauseAnimation={pauseAnimation}
      playAnimation={playAnimation}
      {...props}
    />
  )
  return { ref, pauseAnimation, playAnimation }
}

describe('BadDoorModal', () => {
  it('is hidden before showModal is called', () => {
    renderModal()
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument()
  })

  it('becomes visible after showModal is called', async () => {
    const { ref } = renderModal()
    act(() => { ref.current.showModal(5) })
    expect(await screen.findByRole('dialog')).toBeInTheDocument()
  })

  it('displays the correct number of days to wait', async () => {
    const { ref } = renderModal()
    act(() => { ref.current.showModal(7) })
    await screen.findByRole('dialog')
    expect(screen.getByText('7')).toBeInTheDocument()
  })

  it('calls pauseAnimation when the modal opens', async () => {
    const { ref, pauseAnimation } = renderModal()
    act(() => { ref.current.showModal(3) })
    await screen.findByRole('dialog')
    expect(pauseAnimation).toHaveBeenCalledOnce()
  })

  it('calls playAnimation and hides when the close button is clicked', async () => {
    const user = userEvent.setup()
    const { ref, playAnimation } = renderModal()

    act(() => { ref.current.showModal(3) })
    await screen.findByRole('dialog')

    await user.click(screen.getByRole('button', { name: /close/i }))

    expect(playAnimation).toHaveBeenCalled()
    await waitFor(() => expect(screen.queryByRole('dialog')).not.toBeInTheDocument())
  })
})
