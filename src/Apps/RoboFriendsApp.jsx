import React from "react";
import  CardRobot  from '../Components/CardRobot';
import { robots } from '../robots';
;



const RoboFriendsApp = () =>{
    return (
      <div>
        <h1>RoboFriends</h1>
        <div className="py-2 b">
          <CardRobot id={robots[0].id} name={robots[0].name} email={robots[0].email}/>
          <CardRobot id={robots[1].id} name={robots[1].name} email={robots[1].email}/>
          <CardRobot id={robots[2].id} name={robots[2].name} email={robots[2].email}/>
        </div>

    </div>
    );
}
export default RoboFriendsApp;