import React, { Fragment } from 'react'
import { Link } from 'react-router-dom';
import { ListGroup } from 'reactstrap'

const Menus = () => {
    return (
        <Fragment>
            <ListGroup>
                <Link className="list-group-item list-group-item-action" tag="a" to="/">Home</Link>
                <Link className="list-group-item list-group-item-action" tag="a" to="/view-course">All Courses</Link>
                <Link className="list-group-item list-group-item-action" tag="a" to="add-course">Add Courses</Link>
                <Link className="list-group-item list-group-item-action" tag="a" to="">About</Link>
                <Link className="list-group-item list-group-item-action" tag="a" to="">Contact</Link>
                <Link className="list-group-item list-group-item-action" tag="a" to="/game-view">Game</Link>
            </ListGroup>
        </Fragment>
    );
}
    
export default Menus;