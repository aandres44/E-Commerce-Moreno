import react from "react";
import styled from "@emotion/styled";
import Carousel from "./Carousel";
import Navbar from "./Navbar";
import {
  FaSearch,
  FaHome,
  FaFacebook,
  FaInstagram,
  FaTwitter,
} from "react-icons/fa";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const AppEngine = () => {
  return (
    <div>
      <Header>
        <h1 style={{ width: "100%", fontFamily: "Lucida Sans" }}>PROMOBILIA</h1>
        <h3 style={{ fontFamily: "Lucida Sans", marginTop: "15px" }}>
          Una inmobiliaria muy bonis y ermoza y llena de magia para toda la
          familia y los sobrinos y los reyes magos
        </h3>
      </Header>
      <Carousel></Carousel>
      <Butt>Ver propiedades</Butt>
      <About>
        <h1 style={{ fontFamily: "Lucida Sans", marginTop: "0px" }}>
          ¿Quienes somos?
        </h1>
        <p
          style={{
            textAlign: "center",
            padding: "190px",
            paddingTop: "30px",
            paddingBottom: "100px",
            lineHeight: "27px",
            fontFamily: "Lucida Sans",
          }}
        >
          KJHAIUHDF IUHIGUIFUG JHB JHGJHV JHGJ SFS SGS G NSGN SNFSGN SGN SGN SGN
          SFGN SFG NSGF NGSF BSFG BS KJHAIUHDF IUHIGUIFUG JHB JHGJHV JHGJ SFS
          SGS G NSGN SNFSGN SGN SGN SGN SFGN SFG NSGF NGSF BSFG BS KJHAIUHDF
          IUHIGUIFUG JHB JHGJHV JHGJ SFS SGS G NSGN SNFSGN SGN SGN SGN SFGN SFG
          NSGF NGSF BSFG BS KJHAIUHDF IUHIGUIFUG JHB JHGJHV JHGJ SFS SGS G NSGN
        </p>
        <img
          src="https://i1.wp.com/www.webcancun.com.mx/directorio/wp-content/uploads/2019/05/inmobiliaria-bozati-cancun.jpg?fit=1250%2C1042&ssl=1"
          alt="imagen"
          style={{
            width: "50vw",
            height: "50vh",
            marginTop: "-5%",
            marginBottom: "30px",
          }}
        ></img>
      </About>
      <Footer style={{ backgroundColor: "#ffa801" }}>
        <FaFacebook style={{ color: "white", paddingLeft: "65%" }} />
        <FaInstagram style={{ color: "white", paddingLeft: "40px" }} />
        <FaTwitter style={{ color: "white", paddingLeft: "40px" }} />
      </Footer>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" />
        </Switch>
      </Router>
    </div>
  );
};

const Menu = styled.div`
  position: fixed;
  width: 100%;
  height: 6vh;
  background-color: #40739e;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Header = styled.div`
  text-align: center;
  justify-content: center;
  height: 15vh;
  margin-bottom: -30px;
  padding: 5px;
  margin-top: 75px;
`;

const Butt = styled.button`
  border: 1px solid #00d2d3;
  border-radius: 15px;
  background: none;
  padding: 8px 8px;
  font-family: monospace;
  cursor: pointer;
  color: #00d2d3;
  transition: 0.8s;
  position: absolute;
  top: 90%;
  left: 45.2%;
  overflow: hidden;
  &:hover {
    color: white;
    background: #00d2d3;
  }
  ::before {
    content: "";
    position: absolute;
    left: 0;
    width: 100%;
    height: 0%;
    background: #00d2d3;
    z-index: -1;
    transition: 0.8s;
    top: 0;
    border-radius: 0 0 50% 50%;
  }
  &:hover::before {
    height: 180%;
  }
`;

const Footer = styled.div`
  background-color: #7ed6df;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 5vh;
`;

const About = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`;

export default AppEngine;
