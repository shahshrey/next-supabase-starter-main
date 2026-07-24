import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, it, expect } from 'vitest'

import { TaskPreview } from '../task-preview'

describe('TaskPreview', () => {
  it('summarises how many tasks are done', () => {
    render(<TaskPreview />)

    expect(screen.getByText('2 of 5 done')).toBeInTheDocument()
    expect(screen.getByText('40%')).toBeInTheDocument()
  })

  it('updates the summary when a task is ticked off', async () => {
    const user = userEvent.setup()
    render(<TaskPreview />)

    await user.click(screen.getByRole('button', { name: /Ship the Q3 launch checklist/i }))

    expect(screen.getByText('3 of 5 done')).toBeInTheDocument()
    expect(screen.getByText('60%')).toBeInTheDocument()
  })

  it('adds a typed task to the top of the list', async () => {
    const user = userEvent.setup()
    render(<TaskPreview />)

    await user.type(screen.getByLabelText('Add a task'), 'Call the vet{enter}')

    expect(screen.getByText('2 of 6 done')).toBeInTheDocument()
    expect(screen.getAllByRole('button')[0]).toHaveTextContent('Call the vet')
  })

  it('ignores an empty submission', async () => {
    const user = userEvent.setup()
    render(<TaskPreview />)

    await user.type(screen.getByLabelText('Add a task'), '   {enter}')

    expect(screen.getByText('2 of 5 done')).toBeInTheDocument()
  })
})
