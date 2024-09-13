import React from 'react'
import { FaPhoneSquareAlt } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";
import { IoLocationOutline } from "react-icons/io5";
import { SlSocialInstagram } from "react-icons/sl";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import '../Footer.css'
export default function Footer() {
  return (
    <div>
        <footer>
        <div className="containerFooter" style={{backgroundColor:"darkblue",color:"white",display:"flex",gap:'25%'}}>
        <h1>CURRO</h1>
        <div className="contact" >
          <h2>Contact details</h2>
          <><FaPhoneSquareAlt  style={{marginRight:"10px"}}/></>+35 465 9123 <br></br>
          <><AiOutlineMail style={{marginRight:"10px"}}/></>curros@gmail.com<br></br>
          <><IoLocationOutline style={{marginRight:"10px"}}/></> 196 Alexandra road pietermaritzburg 
                  
        <p>&copy; 2024 Curro Schools</p>
        </div>
          <div className="follow-us" style={{marginBottom:"3.2%"}}>
          <h2 style={{display:'flex',justifyContent:"center"}}>follow us</h2>
                <div className="icons" style={{display:'flex',justifyContent:"center"}}>
                <SlSocialInstagram  size={50} color='#FF6FCC' style={{margin:"10px"}}/>
                <FaFacebook size={50} color='#2058FF'style={{margin:"10px"}}/>
                <FaTwitter size={50}  color='#5CA4FF'style={{margin:"10px"}}/>
                </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
