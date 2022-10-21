//Import React
import React from 'react';

//Use Export to run this in app.js
export class Content extends React.Component{
    //Run Code
    render(){
        return(
            <div className="App">
                <h1>Hello User!</h1>
                {/* Javascript used to show current time on screen */}
                <h2>It's currently {new Date().toLocaleTimeString()}</h2>
            </div>
        );
    }
}