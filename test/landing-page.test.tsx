import { describe, it, expect } from 'vitest'
import { render, screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import { Cta } from '@/components/features/landing/cta'
import { Faq } from '@/components/features/landing/faq'
import { Hero } from '@/components/features/landing/hero'
import { Pricing } from '@/components/features/landing/pricing'
import { TaskPreview } from '@/components/features/landing/task-preview'

describe('Hero', () => {
  it('points anonymous visitors at sign up and sign in', () => {
    render(<Hero />)

    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(
      /the to-do list that actually gets done/i
    )
    expect(screen.getByRole('link', { name: /start for free/i })).toHaveAttribute(
      'href',
      '/signup'
    )
    expect(screen.getByRole('link', { name: /sign in/i })).toHaveAttribute('href', '/signin')
  })

  it('sends signed in visitors straight to their tasks', () => {
    render(<Hero isSignedIn />)

    expect(screen.getByRole('link', { name: /open my tasks/i })).toHaveAttribute(
      'href',
      '/dashboard'
    )
    expect(screen.queryByRole('link', { name: /start for free/i })).not.toBeInTheDocument()
  })
})

describe('TaskPreview', () => {
  it('updates the completed count and progress when a task is ticked off', async () => {
    const user = userEvent.setup()
    render(<TaskPreview />)

    expect(screen.getByText('2 of 5 done')).toBeInTheDocument()
    expect(screen.getByRole('progressbar')).toHaveAttribute('aria-valuenow', '40')

    await user.click(screen.getByRole('button', { name: /ship the pricing page copy/i }))

    expect(screen.getByText('3 of 5 done')).toBeInTheDocument()
    expect(screen.getByRole('progressbar')).toHaveAttribute('aria-valuenow', '60')
  })

  it('un-completes a task that is ticked again', async () => {
    const user = userEvent.setup()
    render(<TaskPreview />)

    const doneTask = screen.getByRole('button', { name: /30 minute walk/i })
    expect(doneTask).toHaveAttribute('aria-pressed', 'true')

    await user.click(doneTask)

    expect(doneTask).toHaveAttribute('aria-pressed', 'false')
    expect(screen.getByText('1 of 5 done')).toBeInTheDocument()
  })
})

describe('Pricing', () => {
  it('renders three plans that all lead to sign up', () => {
    render(<Pricing />)

    for (const plan of ['Free', 'Pro', 'Teams']) {
      expect(screen.getByText(plan)).toBeInTheDocument()
    }

    const links = screen.getAllByRole('link')
    expect(links).toHaveLength(3)
    for (const link of links) {
      expect(link).toHaveAttribute('href', '/signup')
    }
  })

  it('highlights Pro as the recommended plan', () => {
    render(<Pricing />)

    expect(screen.getByText('Most popular')).toBeInTheDocument()
  })
})

describe('Faq', () => {
  it('reveals an answer when a question is expanded', async () => {
    const user = userEvent.setup()
    render(<Faq />)

    const question = screen.getByText(/is momentum really free/i)
    const details = question.closest('details')!

    expect(details.open).toBe(false)

    await user.click(question)

    expect(details.open).toBe(true)
    expect(within(details).getByText(/does not expire/i)).toBeInTheDocument()
  })
})

describe('Cta', () => {
  it('offers a sign up and a sign in path', () => {
    render(<Cta />)

    expect(screen.getByRole('link', { name: /create your free account/i })).toHaveAttribute(
      'href',
      '/signup'
    )
    expect(screen.getByRole('link', { name: /already have an account/i })).toHaveAttribute(
      'href',
      '/signin'
    )
  })
})
