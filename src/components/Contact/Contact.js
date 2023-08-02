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
    } else if (inputName==="email"){
      setEmail(inputValue)
    } else if (inputName==="Message"){
      setMessage(inputValue)
    }
  }

  function validation(e){
    console.log(e.target.name)
    if(e.target.name==="name"){
      if(!e.target.value){
        setErrorMessage('Name Missing')
      } else{
      setErrorMessage('')
      }
    } else if (e.target.name==="email"){
      if(!e.target.value || !/^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/.test(email)){
        setErrorMessage('E-mail Missing or invalid email')
      } else{
      setErrorMessage('')
    } 
    }else if (e.target.name==="Message"){
      if(!e.target.value){
        setErrorMessage('Message Missing')
      } else{
      setErrorMessage('')
      }
    }
  }

 
  const handleSubmit = (e) => { 

    e.preventDefault();

    if(!/^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/.test(email) || !name || !message){
      setErrorMessage('Invalid email or other input missing')
      return;
    }
    alert(`Thank you for contacting me ${name}!`);

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
          onChange={handleInputChange}
          onBlur={validation}/>
        <p className='pt-2'>E-mail</p>
        <input
          name="email"
          value={email}
          type='email'
          placeholder='E-mail'
          onChange={handleInputChange}
          onBlur={validation}/>
        <p className='pt-2'>Message</p>
        <input
          className='message'
          name='Message'
          value={message}
          type='text'
          placeholder='Message'
          onChange={handleInputChange}
          onBlur={validation}/>
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
