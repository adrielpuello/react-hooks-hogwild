import React from 'react'
import HogTile from './HogtTile'

function HogContainer({hogData}){
    let hogTile = hogData.map((hog) => {
        return(
            <HogTile
                key={hog.name}
                name={hog.name}
                specialty={hog.specialty}
                greased={hog.greased}
                weight={hog.weight}
                // use bracked notation for strings so that we can access the medal
                medal={hog['highest medal achieved']}
                image={hog.image}
            />
        )
    })
    return(
        <div className='ui three stackable cards'>
            {hogTile}
        </div>
    )
}

export default HogContainer;