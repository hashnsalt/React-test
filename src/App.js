import './App.css';
import {Routes, Route, Link, useNavigate} from 'react-router-dom';
import data from './pages/shopData';
import { Container, Nav, Navbar, Row, Col } from 'react-bootstrap';
import About from './pages/About';
import Details from './pages/Details';
import Cart from './pages/Cart';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addItem } from './pages/store';

function App() {

  const navigate = useNavigate();
  const [bests] = useState(data);
  const dispatch = useDispatch();

  return (
    <div className="App">
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand
            onClick={() => {
              navigate("/");
            }}
          >
            Navbar
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link
              onClick={() => {
                navigate("/");
              }}
            >
              Home
            </Nav.Link>
            <Nav.Link
              onClick={() => {
                navigate("/about");
              }}
            >
              About
            </Nav.Link>
            <Nav.Link
              onClick={() => {
                navigate("/about/info");
              }}
            >
              Infomation
            </Nav.Link>
            {/* <Nav.Link
              onClick={() => {
                navigate("/detail");
              }}
            >
              Detail
            </Nav.Link> */}
            <Nav.Link
              onClick={() => {
                navigate("/cart");
              }}
            >
              Cart
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <Routes>
        <Route
          path="/"
          element={
            <Container>
              <img src={process.env.PUBLIC_URL+'/images/visual_main_01.jpg'} alt="" style={{width:'85%'}} />
              <h2>BEST 상품</h2>
              <Row>
                {
                  bests.map((best, i) => {
                    return (
                      <Col>
                        <Link to={`/detail/${i}`}>
                          <img src={best.image} alt="" style={{ width: 280 }} />
                          <h4>{best.title}</h4>
                          <p>{best.desc}</p>
                          <p>{best.price}원</p>
                        </Link>
                        <button onClick={() => [
                          dispatch(addItem({id: best.id, title: best.title, count: 1}))
                        ]}>장바구니</button>
                      </Col>
                    );
                  })
                }
              </Row>
            </Container>
          }
        ></Route>
        <Route path="about" element={<About />}>
          <Route path="info" element={<div>Infomation</div>} />
          <Route path="loca" element={<div>location</div>} />
        </Route>
        <Route path="detail/:id" element={<Details bes={bests}/>} />
        <Route path="cart" element={<Cart />} />
      </Routes>
    </div>
  );
}

export default App;
