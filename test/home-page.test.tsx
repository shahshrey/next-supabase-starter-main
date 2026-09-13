import { render, screen } from '@testing-library/react'
import { describe, expect, it, vi } from 'vitest'
import Home from '@/app/page'

vi.mock('@/lib/supabase/server', () => ({
  createClient: vi.fn(() => Promise.resolve({
    auth: {
      getUser: vi.fn(() => Promise.resolve({ data: { user: null }, error: null })),
    },
  })),
}))

describe('Home page', () => {
  it('presents the app as a task manager landing page', async () => {
    render(await Home())

    expect(screen.getByRole('heading', { name: /Turn busywork into momentum/i })).toBeInTheDocument()
    expect(screen.getByText(/Plan, assign, and ship tasks/i)).toBeInTheDocument()
    expect(screen.getByText('Today')).toBeInTheDocument()
    expect(screen.getAllByText('Priority matrix').length).toBeGreaterThan(0)
    expect(screen.getByRole('link', { name: /Start organizing/i })).toHaveAttribute('href', '/signup')
  })
})
