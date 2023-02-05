import React from 'react'

export default function Options() {
    //Tehdään for loop, joka käy luvut läpi 0-5 aina 0.25 välein
    let percentages = []
    
    for (let i = 0;i <= 5;i = i + 0.25){
        percentages.push(i)
    }

  return (
    percentages.map(percentage => {
        return <option value={percentage}>{percentage.toFixed(2)}%</option>
    })
  )
}
