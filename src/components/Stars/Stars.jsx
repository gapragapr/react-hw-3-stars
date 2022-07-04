import React from 'react'
import Star from '../Star/Star'
import './Stars.css'

export default function Stars({count}){
    if (count < 1 || count > 5 || typeof count !== 'number'){
        return null
    }
    
    const returnStarArr = (count) => {
        const arr = [];
        for(let i = 0; i < count; i++){
            arr.push(<Star key={i}/>)
        }
        return arr
    }

    return(
        <ul className="card-body-stars u-clearfix">
            {returnStarArr(count).map(item => {
                return item
            })}
        </ul>
    )
}