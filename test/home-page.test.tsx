import { render, screen } from '@testing-library/react'
import { describe, expect, it, vi } from 'vitest'
import Home from '@/app/page'
import { createClient } from '@/lib/supabase/server'

vi.mock('@/lib/supabase/server')

const mockGetUser = vi.fn()

vi.mocked(createClient).mockResolvedValue({
  auth: {
    getUser: mockGetUser,
  },
} as never)

describe('Home page', () => {
  it('presents the task manager landing page to signed-out visitors', async () => {
    mockGetUser.mockResolvedValue({
      data: { user: null },
      error: null,
    })

    render(await Home())

    expect(
      screen.getByRole('heading', {
        name: /Turn scattered work into a calm, focused plan/i,
      })
    ).toBeInTheDocument()
    expect(screen.getByText(/FlowPilot keeps tasks, priorities, and team momentum/i)).toBeInTheDocument()
    expect(
      screen
        .getAllByRole('link', { name: /Start organizing free/i })
        .every((link) => link.getAttribute('href') === '/signup')
    ).toBe(true)
    expect(screen.getByText(/Today by priority/i)).toBeInTheDocument()
  })

  it('points signed-in users back to their dashboard', async () => {
    mockGetUser.mockResolvedValue({
      data: { user: { id: 'user_123' } },
      error: null,
    })

    render(await Home())

    expect(
      screen
        .getAllByRole('link', { name: /Open workspace/i })
        .every((link) => link.getAttribute('href') === '/dashboard')
    ).toBe(true)
  })
})
