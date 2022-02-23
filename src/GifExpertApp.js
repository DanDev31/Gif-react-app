import React from 'react'
import { useState } from 'react'
import { AddCategory } from './components/AddCategory'
import { GifGrid } from './components/GifGrid'

export const GifExpertApp = () => {

    const [categories, setCategories] = useState([])   

    return (
        <div className="container">
           <h1 className="app__title">Gif App</h1> 
            <AddCategory setCategories = { setCategories } categories = { categories }/>
           <hr />
            
            <ol>
                {
                    categories.map(category => 
                        <GifGrid 
                        category = { category }
                        key = { category }/>
                    )
                }
            </ol>
           
        </div>
    )
}


