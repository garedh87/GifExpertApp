import React, { useState } from 'react'
import { AddCategory } from './componets/AddCategory';
import { GifGrid } from './componets/GifGrid';


const GifExpertApp = (props )=> {

   const [categories, setCategories] = useState(['Search GIF'])

    

    return (
        <div className='container mainContainer'>
            <div class='row'>
                <h1>GIF Expert App</h1>
                <h3>Find your favourite GIFs</h3>
               
            </div>

            <hr />
                <div className='row justify-content-sm-center'>
                    <AddCategory setCategories={setCategories}/>
                </div>
            <div className='container'>
                {
                    categories.map(category => (
                        <GifGrid
                            key={category} 
                            category={category} 
                        />
                    ))
                }
            </div>

        </div>

    )
}


export default GifExpertApp
