import React, {Component, useState} from 'react';
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
    const [nameEmpty, setNameEmpty] = useState(false);
    const [emailEmpty, setEmailEmpty] = useState(false);
    const [phoneEmpty, setPhoneEmpty] = useState(false);

    const [nameError, setNameError] = useState('Name is empty');
    const [emailError, setEmailError] = useState('Email is empty');
    const [phoneError, setPhoneError] = useState('Phone is empty');
    const [positionError, setPositionError] = useState('Any position isnot selected');

    const [isPending, setIsPending] = useState(false);

    const handleSubmit = (e) => {

        e.preventDefault();

        const users = {name, email, phone, position, photo}

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

    const handleSubmission = () => {
        const formData = new FormData();

        formData.append('File', photo);

        fetch(
            'https://freeimage.host/api/upload?key=6d207e02198a847aa98d0a2a901485a5',
            {
                method: 'POST',
                body: formData,
            }
        )
        .then((response) => response.json())
        .then((result) => {
            console.log('Success:', result);
            setPhoto(result.data.imageurl)
        })
        .catch((error) => {
            console.error('Error:', error);
        });
    };




    return(
        <form className="form" onSubmit={handleSubmit}>
            <Input name='name' value={name} onChange={(e) => setName(e.target.value)} id="name" type="text" placeholder="Your name" />
            <Input name='email' value={email} onChange={(e) => setEmail(e.target.value)} id="email" type="email" placeholder="Email"/>
            <Input name='phone'  value={phone} onChange={(e) => setPhone(e.target.value)} id="phone" type="tel" placeholder="Phone" help="+38 (XXX) XXX - XX - XX"/>
            <p>Select your position</p>
            <Radio
            id="radio-1"
            name="position"
            text="Frontend developer"
            onChange={(e) => setPosition(e.target.value)}
            value="Frontend developer"
            />
            <Radio
            id="radio-2"
            name="position"
            text="Backend developer"
            onChange={(e) => setPosition(e.target.value)}
            value="Backend developer"
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
            value="QC"
            />
            <Textarea
            name="file"
            onChange={handleSubmission}
            value= {photo}
            
            />
            {!isPending && <Button type="submit" id="yellow" text="Add user"/>}
            {isPending && <Button type="submit" id="yellow" text="Add user" disabled/>}
        </form>
    );
    
}

export default Form;