import React from 'react';
import { render, fireEvent} from '@testing-library/react'; 
import Form from './ContactForm';

//completed a smoke test
describe('checks form inputs', ()=> {
    it('renders without crashing', () => {
        render(<Form />)
    });
    
    
    it('check the form',  () => {
    const { getByText, getByRole } = render(<Form/>);
    const firstName =   getByText(/first name/i)
    const lastName = getByText(/last name/i);
    const email = getByText(/email/i);
    const msg = getByText(/message/i);
    const btn  = getByRole("button", {name:/submit/i});
    
    
    fireEvent.change(firstName, {target:{name: "firstName"} });
    fireEvent.change(lastName, {target: {name:'lastName' } });
    fireEvent.change(email, {target:{name:'email'} });
    fireEvent.change(msg, {target:{name:"message"} });
    
    fireEvent.click(btn);
    
    })

})
