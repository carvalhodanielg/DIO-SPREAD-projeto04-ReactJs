import {screen, render} from '@testing-library/react'
import Home from '.'



test('show show an image logo', ()=>{
    render(<Home />)
    const img = screen.getByRole('mainLogo');
})


test('Page must have a all char Name', ()=>{
    render(<Home />)
    const charName= screen.getByRole('charName');
})


test('Page must have a all char Title', ()=>{
    render(<Home />)
    const charTitle= screen.getByRole('charTitle');
})

test('Page must have a all char Image', ()=>{
    render(<Home />)
    const charImage= screen.getByRole('charImage');
})


test('Page must have a all char Logo', ()=>{
    render(<Home />)
    const charLogo= screen.getByRole('charLogo');
})