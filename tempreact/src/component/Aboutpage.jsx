import React from 'react';
import image from "../component/images/aboutimages.jpg";
import "../component/about.css"

export default function Aboutpage() {
    return (
        <section>
            <div className='about_section'>

                <div className='about_image'>
                    <img src={image} alt="" />
                </div>

                <div className='about_content'>
                    <h2>About us </h2>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. t has survived not only five centuries.</p>
                    <button type='button'>Read More</button>
                </div>
                
            </div>
        </section>
    )
}
