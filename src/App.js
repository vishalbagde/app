import './App.css';
import { Button, Jumbotron, Col, Row, Container } from 'reactstrap'
import { ToastContainer, toast } from 'react-toastify'
import Home from './components/Home'
import Course from './components/SingleCource';
import AllCourse from './components/AllCourses';
import AddCourse from './components/AddCourse';
import Header from './components/Header';
import Menus from './components/Menus';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Shopping from './game/Shopping'
import GameView from './game/GameView';

function App() {

  const notify = () => toast("Wow So easy", {
    position: "top-center"
  });

  return (
    <div>
      <Router>
        <ToastContainer />
        <Container>
          <Header></Header>
          <Row>
            <Col md={4} >
              <Menus></Menus>
            </Col>
            <Col md={8}>
              <Route path="/" component={Home} exact></Route>
              <Route path="/add-course" component={AddCourse} exact></Route>
              <Route path="/view-course" component={AllCourse} exact></Route>
              <Route path="/game-view" component={GameView} exact></Route>
            </Col>
          </Row>
        </Container>
      </Router>
    </div>
  );
}

export default App;
