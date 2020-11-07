import react from 'react'
import { Jumbotron, Container, Button } from 'reactstrap'
import { useEffect } from 'react'

const Home = () => {
    useEffect(() => {
        document.title = "Home Welcome To Our Site";
    }, []);
    return (
        <Jumbotron fluid className="text-center">
            <h5 className="display-5">Learn With Vishal Bagde</h5>
            <p>Learn With Vishal Bagde  the cource you learn are raect Js</p>
            <Button color="primary">Click</Button>
        </Jumbotron>
    );
}

export default Home