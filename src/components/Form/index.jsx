import React, {useState} from 'react';
import { Button } from "../Button";
import { Input } from "../Input";
import Radio from "../Radio";
import Textarea from "../Textarea";


function Form(){ 

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [photo, setPhoto] = useState('');
    const [position, setPosition] = useState('');

    const [nameError, setNameError] = useState('error text');
    const [emailError, setEmailError] = useState('error text');
    const [phoneError, setPhoneError] = useState('error text');

    const [empty, setEmpty] = useState(false);

    const [isPending, setIsPending] = useState(false);


    const handleSubmit = (e) => {
        e.preventDefault();

        const users = {name, email, phone, position, photo}

        users.append('file', photo[0])

        setIsPending(true);
        
        fetch("http://localhost:8000/users", {
            method: 'POST',
            headers: {'Content-Type':'application/json'},
            body: JSON.stringify(users)
        }).then(() => {
            console.log('well');
            setIsPending(false);

        })
    }

    const blurHandler = (e) =>{

        if(e.target.name){
            setEmpty(true)
            
        }
    }
   
    return(
        <form className="form" onSubmit={handleSubmit}>
            {(empty && nameError) && <div>{nameError}</div>}
            <Input name='name' onBlur={(e) => blurHandler(e)} value={name} onChange={(e) => setName(e.target.value)} id="name" type="text" placeholder="Your name"/>
            {(empty && emailError) && <div>{emailError}</div>}
            <Input name='email' onBlur={(e) => blurHandler(e)} value={email} onChange={(e) => setEmail(e.target.value)} id="email" type="email" placeholder="Email"/>
            {(empty && phoneError) && <div>{phoneError}</div>}
            <Input name='phone' onBlur={(e) => blurHandler(e)} value={phone} onChange={(e) => setPhone(e.target.value)} id="phone" type="tel" placeholder="Phone" help="+38 (XXX) XXX - XX - XX"/>
            <p>Select your position</p>
            <Radio
            id="radio-1"
            name="position"
            text="Frontend developer"
            onChange={(e) => setPosition(e.target.value)}
            value="Frontend"
            />
            <Radio
            id="radio-2"
            name="position"
            text="Backend developer"
            onChange={(e) => setPosition(e.target.value)}
            value="Back"
            />
            <Radio
            id="radio-3"
            text="Designer"
            name="position"
            onChange={(e) => setPosition(e.target.value)}
            value="Designer"
            />
            <Radio
            id="radio-4"
            name="position"
            text="QC"
            onChange={(e) => setPosition(e.target.value)}
            value="qc"
            />
            <Textarea
            name="file"
            onChange={(e) => setPhoto(e.target.files[0])}
            value= {photo}
            
            />
            {!isPending && <Button type="submit" id="yellow" text="Add user"/>}
            {isPending && <Button type="submit" id="yellow" text="Add user" disabled/>}
        </form>
    );
    
}

export default Form;