import React, {useState} from 'react'

function HogTile({name, specialty, greased, weight, medal, image}){
    //Parameter #1
    //this sets the state to false by default, so when you load the page for the first time,
    //the function below will not be active.
    const [showDetail, setShowDetail] = useState(false)
    function show(){
    //by setting showDetail to true, the information below will only present if you have clicked on the image.
        if(showDetail === true) {
            return (
                <div>
                    <h5>{specialty}</h5>
                    {/* used if else statement to provide specific text depending on the condition */}
                    <h5>{greased ? "Grease Lightning" : "Dry Guy"}</h5>
                    <h5>{weight}</h5>
                    <h5>{medal}</h5>
                </div>
            )
        }
    }

    return(
        //dive className allows the cards to stack and arrange themselves in a certain way.
        <div className='ui card eight wide column pigTile'>
            <h3>{name}</h3>
            {/* instead of writing a seperate function to handle the onClick event, we are using arrow
            notation in order to invoke it within the <img> tag */}
            <img onClick={() => setShowDetail((showDetail) => !showDetail)} src={image} alt={name}></img>\
            {/* this last bit right here is what makes the function actually work */}
            {show()}
        </div>
    )
}

export default HogTile;