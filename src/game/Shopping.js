import React from 'react'

class Shopping extends React.Component {
    render() {
        return (
            <div className="shopping-list">
                <h1>Shopping list for {this.props.name}</h1>
                <ul>
                    <li>Insta</li>
                    <li>Whatsup</li>
                    <li>Oculus</li>
                </ul>
            </div>
        );
    }
}


export default Shopping;