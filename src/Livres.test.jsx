import { render, screen, fireEvent } from '@testing-library/react'
import Livres from './Livres' // adapte ce chemin selon où se trouve Livres.jsx

describe('Composant Livres', () => {
  test('affiche les livres dans le tableau', () => {
    render(<Livres />)
    expect(screen.getByText('ReactJS')).toBeInTheDocument()
    expect(screen.getByText('Oracle 19C')).toBeInTheDocument()
  })

  test('supprime un livre', () => {
    render(<Livres />)
    const deleteButtons = screen.getAllByText('Delete')
    fireEvent.click(deleteButtons[0])
    expect(screen.queryByText('ReactJS')).not.toBeInTheDocument()
  })
})
