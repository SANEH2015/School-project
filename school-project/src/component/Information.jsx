  import React from 'react'
  import Image from '../assets/school1.jpg'
  import Image2 from '../assets/school2.jpg'

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
              Get an overview of everything we can offer you by viewing our fact sheet.</p>
          <img src={Image}
        
          alt="Image"
          style={{
            width: '100%',
            height: '150px',
            borderRadius: '10px 10px 0 0',
            objectFit: 'cover',
          }}
        />

        <p>You get the excellent Curro education
          We are committed to providing learners with a quality education. That is why our approach to teaching the national CAPS curriculum is based on project-based learning and self-discovery. This approach allows our high school learners to explore the learning material beyond just the textbook through research, experiments and assignments, while preparing for the IEB exams in Grade 12. Teaching takes place in English, and our specialised elective subjects even include Drama and Visual Arts.
          Curro’s dedication to a quality education extends to the private college on our campus. NCV programmes provide students with workplace-ready skills and knowledge, which means that your child can immediately employable if they choose not to study further. Furthermore, class sizes are limited so that lecturers can pay personal attention to each student.</p>

          <img src={Image2}  style={{
            width: '100%',
            height: '150px',
            borderRadius: '10px 10px 0 0',
            objectFit: 'cover',
          }}>
      </img>
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
