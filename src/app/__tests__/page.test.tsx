import React from 'react'
import { render, screen, fireEvent, waitFor } from '@testing-library/react'
import HomePage from '../page'

// モックの使用
jest.mock('next/navigation', () => ({
  useRouter() {
    return {
      push: jest.fn(),
    }
  },
}))

describe('HomePage', () => {
  it('validates URL input and updates state accordingly', async () => {
    render(<HomePage />)

    // 入力フィールドを取得
    //const input = screen.getByPlaceholderText('Enter URL to check') as HTMLInputElement
    const input = screen.getByPlaceholderText('https://〜') as HTMLInputElement

    // 無効なURLを入力
    fireEvent.change(input, { target: { value: 'invalid-url' } })

    // 状態が更新されるのを待つ
    await waitFor(() => {
      //expect(screen.getByText('Please enter a valid URL')).toBeInTheDocument()
      expect(screen.getByText('無効なURLです')).toBeInTheDocument()
    })

    // 有効なURLを入力
    fireEvent.change(input, { target: { value: 'https://www.example.com' } })

    // 無効なURLを入力
    //fireEvent.change(input, { target: { value: 'https://www.example.com' } })

    // 状態が更新されるのを待つ
    await waitFor(() => {
      //expect(screen.queryByText('Please enter a valid URL')).not.toBeInTheDocument()
      expect(screen.queryByText('無効なURLです')).not.toBeInTheDocument()
    })

    // Submitボタンが有効になっていることを確認
    //const submitButton = screen.getByRole('button', { name: /check/i })
    //expect(submitButton).not.toBeDisabled()
  })
})