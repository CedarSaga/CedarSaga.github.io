import React from 'react';
import portfolio from '../data/portfolio';
import portfolioItem from './portfolioItem';


function Portfolio(){
    return(
        <div className='flex flex-col md:flex-row items-center justify-center'>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                Portfolio

                {portfolio.map(project => (
                    <portfolioItem
                        imgUrl={project.imgUrl}
                        title={project.title}
                    />
                ))}


            </div>
        </div> 
    )
}

export default Portfolio;