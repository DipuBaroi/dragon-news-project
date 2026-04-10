import React from 'react';
import MarqueeImport from "react-fast-marquee"

const Marquee = MarqueeImport.default || MarqueeImport;


const LatestNews = () => {
    return (
        <div className='flex items-center gap-3 p-3 bg-base-200'>
            <p className='text-base-100 bg-secondary px-3 py-2'>Latest</p>
            
            <Marquee pauseOnHover={true} speed={60} >
                   <p className='font-bold mr-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, consequuntur!</p>
                   <p className='font-bold mr-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, consequuntur!</p>
                   <p className='font-bold mr-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, consequuntur!</p>
            </Marquee>
            
             
            
        </div>
    );
};

export default LatestNews;