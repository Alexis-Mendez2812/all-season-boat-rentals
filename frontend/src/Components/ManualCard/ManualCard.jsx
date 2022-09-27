import React from 'react'
import Card from './Card'
import yates from './yates'
const ManualCard = () => {
  console.log(yates)
  let arr = [1,2,3,4,5,6,7]
    return (
    <div>
      {arr.map((e)=>(<Card key={e} e={e} />))}
    </div>
  )
}

export default ManualCard
