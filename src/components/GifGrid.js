import React from 'react';
import { useFetchGifs } from '../hooks/useFetchGifs';
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({ category }) => {

    const {data: images, loading} = useFetchGifs( category );

    console.log(category)
 
    return (
        <div>
           <h2 className="category__title">{ category }</h2> 

            { loading && <p>Loading...</p> }

            <div className = "gif__container">
              {
              images.map( img => 
                  <GifGridItem 
                        key={ img.id }
                            { ...img }
                  /> 
              )
              }
              
             </div> 
            
        </div>
    )
}
