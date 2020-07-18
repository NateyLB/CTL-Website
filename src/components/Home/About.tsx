import  React, { useEffect } from 'react';

/**
 * @desc the about section in the landing page
 * @param props not used
 */
const About = props =>{
    useEffect(()=>{
        document.title="CausingTheLost"
    },[])
    return(
        <section id="about">
            <h1>About</h1>
            <p> CausingTheLost is an online avant-garde custom embroidery boutique by Nicholas White. Full custom embroidery can be done on an array of 
                garments suchs as pants, shirts, jackets, with an emphasis on hats. Hats can be sourced in-house or be provided by you. Custom work is done end-to-end
                with the customer, from design to fabric, we are with you evey step of the way. Please take a look some of CausingTheLost's work and contact with 
                inquiries.
            </p>
            <img className='bullet' src={require('../../resources/favicon_io_transparent/favicon.ico')} alt="CausingTheLost.logo"></img>
            <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
                exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla 
                pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            

        </section>
    )
}

export default About;