import {screen, render} from '@testing-library/react'
import Home from '.'



test('show show an image logo', ()=>{
    render(<Home />)
    const img = screen.getByRole('img');
})


test('Page must have a Search Input', ()=>{
    render(<Home />)
    const searchInput = screen.getByRole('searchInput');
})