//Import React
import React from 'react';

//Use Export to run this in app.js
export class Header extends React.Component{
    render(){
        return(
            <div>
                {/* Print to screen */}
                <h1>My Header in another component</h1>
            </div>
        );
    }
}