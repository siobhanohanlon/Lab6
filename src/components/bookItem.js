//Import React
import React from "react";
//Import Cards
import Card from 'react-bootstrap/Card';

export class BookItem extends React.Component{
    render(){
        return(
            //Print out info from Array as Cards
            <Card>
                {/* Book Title */}
                <Card.Header>{this.props.book.title}</Card.Header>
                <Card.Body>
                    {/* Show Picture and author to screen */}
                    <blockquote className = "blockqoute mb-0">
                        <img src = {this.props.book.thumbnailUrl}></img>
                        <footer>
                            {this.props.book.authors[0]}
                        </footer>
                    </blockquote>
                </Card.Body>
          </Card>
        )
    }
}