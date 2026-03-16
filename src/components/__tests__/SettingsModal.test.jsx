import { render, screen, waitFor, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import SettingsModal from '../SettingsModal'

function renderModal(props = {}) {
  const pauseAnimation = vi.fn()
  const playAnimation = vi.fn()
  const resetDoors = vi.fn()
  const showContents = vi.fn()
  const { container } = render(
    <SettingsModal
      pauseAnimation={pauseAnimation}
      playAnimation={playAnimation}
      resetDoors={resetDoors}
      showContents={showContents}
      {...props}
    />
  )
  return { container, pauseAnimation, playAnimation, resetDoors, showContents }
}

describe('SettingsModal', () => {
  it('shows the welcome modal on mount', async () => {
    renderModal()
    expect(await screen.findByRole('dialog')).toBeInTheDocument()
    expect(screen.getByText(/Welcome to Our 2020 Advent Calendar/i)).toBeInTheDocument()
  })

  it('calls pauseAnimation on mount', async () => {
    const { pauseAnimation } = renderModal()
    await screen.findByRole('dialog')
    expect(pauseAnimation).toHaveBeenCalledOnce()
  })

  it('calls playAnimation when closed', async () => {
    const user = userEvent.setup()
    const { playAnimation } = renderModal()
    await screen.findByRole('dialog')

    await user.click(screen.getByRole('button', { name: /close/i }))

    expect(playAnimation).toHaveBeenCalled()
    await waitFor(() => expect(screen.queryByRole('dialog')).not.toBeInTheDocument())
  })

  it('renders the settings cog button', () => {
    const { container } = renderModal()
    expect(container.querySelector('.settings-button')).toBeInTheDocument()
  })

  describe('Reset Doors tab', () => {
    async function openResetTab(user) {
      renderModal()
      await screen.findByRole('dialog')
      await user.click(screen.getByRole('tab', { name: /Reset Doors/i }))
    }

    // Scope queries to the Reset Doors tabpanel to avoid matching the
    // identical "Are you sure?" confirmation that also exists in the Unlock tab.
    function getResetTabpanel() {
      return screen.getByRole('tabpanel', { name: /Reset Doors/i })
    }

    it('shows a Reset Doors button', async () => {
      const user = userEvent.setup()
      await openResetTab(user)
      expect(within(getResetTabpanel()).getByRole('button', { name: /Reset Doors/i })).toBeInTheDocument()
    })

    it('asks for confirmation before resetting', async () => {
      const user = userEvent.setup()
      await openResetTab(user)
      await user.click(within(getResetTabpanel()).getByRole('button', { name: /Reset Doors/i }))
      expect(within(getResetTabpanel()).getByText(/Are you sure\?/i)).toBeInTheDocument()
    })

    it('calls resetDoors and shows a success message when confirmed', async () => {
      const user = userEvent.setup()
      const resetDoors = vi.fn()
      renderModal({ resetDoors })
      await screen.findByRole('dialog')
      await user.click(screen.getByRole('tab', { name: /Reset Doors/i }))
      await user.click(within(getResetTabpanel()).getByRole('button', { name: /Reset Doors/i }))

      const confirmRow = within(getResetTabpanel()).getByText(/Are you sure\?/).closest('div')
      const [checkmarkImg] = confirmRow.querySelectorAll('img')
      await user.click(checkmarkImg)

      expect(resetDoors).toHaveBeenCalledOnce()
      expect(within(getResetTabpanel()).getByText(/Doors have been reset/i)).toBeInTheDocument()
    })

    it('does not call resetDoors when the cross is clicked', async () => {
      const user = userEvent.setup()
      const resetDoors = vi.fn()
      await openResetTab(user)
      await user.click(within(getResetTabpanel()).getByRole('button', { name: /Reset Doors/i }))

      const confirmRow = within(getResetTabpanel()).getByText(/Are you sure\?/).closest('div')
      const [, crossmarkImg] = confirmRow.querySelectorAll('img')
      await user.click(crossmarkImg)

      expect(resetDoors).not.toHaveBeenCalled()
    })
  })

  describe('Unlock Doors tab', () => {
    function getUnlockTabpanel() {
      return screen.getByRole('tabpanel', { name: /Unlock Doors/i })
    }

    it('shows an Unlock Doors button', async () => {
      const user = userEvent.setup()
      renderModal()
      await screen.findByRole('dialog')
      await user.click(screen.getByRole('tab', { name: /Unlock Doors/i }))
      expect(within(getUnlockTabpanel()).getByRole('button', { name: /Unlock Doors/i })).toBeInTheDocument()
    })

    it('door buttons are disabled until unlock is confirmed', async () => {
      const user = userEvent.setup()
      renderModal()
      await screen.findByRole('dialog')
      await user.click(screen.getByRole('tab', { name: /Unlock Doors/i }))

      const doorButtons = within(getUnlockTabpanel()).getAllByRole('button', { name: /^\d+$/ })
      expect(doorButtons).toHaveLength(25)
      doorButtons.forEach(btn => expect(btn).toBeDisabled())
    })

    it('enables door buttons after unlock is confirmed', async () => {
      const user = userEvent.setup()
      renderModal()
      await screen.findByRole('dialog')
      await user.click(screen.getByRole('tab', { name: /Unlock Doors/i }))
      await user.click(within(getUnlockTabpanel()).getByRole('button', { name: /Unlock Doors/i }))

      const confirmRow = within(getUnlockTabpanel()).getByText(/Are you sure\?/).closest('div')
      const [checkmarkImg] = confirmRow.querySelectorAll('img')
      await user.click(checkmarkImg)

      const doorButtons = within(getUnlockTabpanel()).getAllByRole('button', { name: /^\d+$/ })
      doorButtons.forEach(btn => expect(btn).not.toBeDisabled())
    })
  })
})
