import React from "react";


const CardRobot = (props) =>{
    return(
        <div className="bg-light-pink dib br3 pa3 ma2 grow bw2 shadow-5">
           <img src={`https://robohash.org/${props.id}?200x200`} alt="robots" />
            <section>
                <h1>{props.name}</h1>
                <p>{props.email}</p>
            </section>

        </div>
    );
}

export default CardRobot;