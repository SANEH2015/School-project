import React from 'react'
import Image from '../assets/school1.jpg'

export default function Information() {
  return (
    <div style={{display:"flex",justifyContent:"center"}} >
        <div className="text" style={{
        width: '600px',
        margin: '20px',
        padding: '20px',
        border: '1px solid #ddd',
        borderRadius: '10px',
        boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',}}>
        <p>Curro Thatchfield has a high school in Thatchfield Hills, Centurion that provides the excellent Curro education to learners from Grade 8 to Grade 12. Our class sizes are limited to no more than 25, so that your child can get personal attention, and we have a wide variety of specialised subjects and activities. Teaching takes place in English, we are an IEB school, and we also offer a school transport option.

We share our campus with a private college that offers NCV programmes from Level 2 to Level 4. NCV is a high-standard alternative from Grade 10 to Grade 12, through which learners choose their career path after Grade 9. By having this college on our campus, your child remains in a school-like environment among peers of their age. Visit this page on our website to discover more about NCV.

Get an overview of everything we can offer you by viewing our fact sheet.

 </p>
 <img src={Image}
       
        alt="Image"
        style={{
          width: '100%',
          height: '150px',
          borderRadius: '10px 10px 0 0',
          objectFit: 'cover',
        }}
      />
        </div>



        <div
      style={{
        width: '250px',
        margin: '20px',
        padding: '20px',
        border: '1px solid #ddd',
        borderRadius: '10px',
        boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
      }}
    >
     
      
    </div>
    </div>
  )
}
