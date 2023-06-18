/* eslint-disable no-unused-vars */
import React from 'react';

function Intro(){
    return(
        <div className=" flex items-center
        justify-center flex-col text-center pt-20
        pb-6">
                <h1 className='text-4xl md:text-7xl mb-1 md:mb-3 font-bold'>Malakai Holtzclaw</h1>
                
                <p className='text-base md:text-xl mb-3 font-medium'>Computer Science & Physics Student</p>
                <p className='text-sm max-w-xl mb-6 font-bold'>Bio.</p>
    
        </div> 
    )
}

export default Intro;

//For links
/* 
    {' '}
    <a
        href="LINK"
        target="_blank"
        className="text-cyan-600 hover:underline-offset-2 decoration-2 decoration-red-600"
        rel="noreferrer noopener"
    >
        LINKTEXT
    </a>
    {' '}
*/