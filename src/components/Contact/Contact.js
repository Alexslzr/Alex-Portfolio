import React, {useState} from 'react';
import './contact.css'


export default function Contact() {

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [errorMessage, setErrorMessage] = useState('');


  const handleInputChange = (e)=>{
    const {target} = e;
    const inputName = target.name
    const inputValue = target.value

    if(inputName=== "name"){
      setName(inputValue)
    } else if (inputName === "email"){
      setEmail(inputValue)
    } else {
      setMessage(inputValue)
    }
  }
 
  const handleSubmit = (e) => { 

    e.preventDefault();

    if(/^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/.test(email) || !name){
      setErrorMessage('Missing Name, or invalid email')
      return;
    }
    alert(`Hello ${name}`);

    setName('')
    setEmail('')
    setMessage('')
    setErrorMessage('')
  }

  return (
    <div className='mx-3 my-5 d-flex flex-column align-items-center'>
      <form className='form'>
        <p className='pt-2'>Name</p>
        <input 
          name="name"
          value={name}
          type='text'
          placeholder='Name'
          onChange={handleInputChange}/>
        <p className='pt-2'>E-mail</p>
        <input
          name="email"
          value={email}
          type='email'
          placeholder='E-mail'
          onChange={handleInputChange}/>
        <p className='pt-2'>Message</p>
        <input
          className='message'
          name='Message'
          value={message}
          type='text'
          placeholder='Message'
          onChange={handleInputChange}/>
        <button type='button' onClick={handleSubmit}>Submit</button>
      </form>
      {errorMessage && (
        <div>
          <p className="error-text">{errorMessage}</p>
        </div>
      )}
    </div>
  );
}
