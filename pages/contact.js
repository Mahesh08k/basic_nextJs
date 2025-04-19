import React, { useState } from 'react'
import styles from '../styles/Contact.module.css'

const contact = () => {

  const [name , setName] = useState('')
  const [email , setEmail] = useState('')
  const [phone , setPhone] = useState('')
  const [desc , setDesc] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
   
    const data = {name,email,phone,desc}
    fetch('http://localhost:3000/api/postcontact/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    }).then((response) => {
      return response.text()
    }).then((data) => {
      console.log(data)
      setDesc('')
      setEmail('')
      setName('')
      setPhone('')
      alert('Your form has been submitted successfully')
    })
  }

  const handleChange =(e) => {
    if(e.target.name === 'name'){
      setName(e.target.value)
    }
    else if(e.target.name === 'email'){
      setEmail(e.target.value)
    }
    else if(e.target.name === 'phone'){
      setPhone(e.target.value)
    }
    else if(e.target.name === 'desc'){
      setDesc(e.target.value)
    }
    
  }

  return (
    <div className={styles.container}>
      <h1 style={{textAlign:'center'}}>Contact Us</h1>
      <hr />
      <form onSubmit={handleSubmit}>
        <div >
            <label htmlFor="name" className="form-label">Your Name</label>
            <input  type="text" value={name} onChange={handleChange} className="form-control" id="name" name='name'style={{marginBottom : '10px'}} aria-describedby="emailHelp" required/>
        </div>
        <div >
          <label htmlFor="email" className="form-label">Email address</label>
          <input type="email" value={email} onChange={handleChange} className="form-control" id="email" name='email' aria-describedby="emailHelp" style={{marginBottom : '10px'}} required />
          <div id="emailHelp" className="form-text" style={{marginBottom : '10px'}}>We'll never share your email with anyone else.</div>
        </div>
        <div >
            <label htmlFor="phone" className="form-label">Phone</label>
            <input type="text" value={phone} onChange={handleChange} className="form-control no-arrow" id="phone" name='phone' aria-describedby="emailHelp" style={{marginBottom : '10px'}} required />
        </div>
        <div >
          <label htmlFor="desc">Description</label>
          <textarea className="form-control" value={desc} name='desc' onChange={handleChange} placeholder="Leave your note here" id="desc" style={{height: '100px'}}></textarea>  
        </div>
        
            <button  type="submit" className="btn btn-primary" style={{marginTop : '10px' , marginBottom:'10px'}}>Submit</button>
     </form>
    </div>
  )
}

export default contact
