import React  from 'react'
import axios from "axios"
import { useState, useEffect } from 'react'


function Contact() {
    const [Contact, setContact]= useState([])

   async function getContact(){
    await axios.get("/admin/getWebsiteDetails")
    .then((res)=>{
        let result = res.data.result
        // console.log(result[0].AboutUs)
        setContact(result[0].Contact)
    })
    }

    useEffect(()=>{
getContact()
    },[])

  return (
    
    <>
{/*      
{
        Contact.map((descrip, di) => {
          return (
            <>
              {
                descrip.type == "unordered-list-item" ?

                  <ul style={{ listStyleType: "disc" }}>
                    <li>
                      {descrip.text}

                    </li>
                  </ul>

                  : descrip.type == "ordered-list-item" ?

                    <ol >
                   
                        {descrip.text}

                      
                    </ol>
                    :
                    <>
                      {descrip.text}
                      <br></br>
                    </>

              }
            </>
          )
        })} */}
        <div style={{marginLeft:"20px", marginTop:"20px"}}>
          <div style={{fontSize:"x-large", fontWeight:"bold"}}>Get in touch with Us by below contact details</div>
        <p>
          Phone No:<br></br>
           +918792090021
          
        </p>
        <p>
          mail address:<br></br>
           admin@itwalkin.com
        </p>
        <p>
        Contact us:
        BLUENETWORKS 
        Shop no: 3-37, 3rd floor,
        6th main road,
        Grand Majestic Mall,
        Gandhinagar,
        BENGALURU-560009
        </p>
        </div>
    </>

    // <div style={{marginLeft:"2%", marginTop:"10px"}}> {Contact} </div>
  )
}

export default Contact

