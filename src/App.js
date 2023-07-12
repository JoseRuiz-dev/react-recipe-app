import Pages from "./pages/Pages";
import React from "react";
import Category from "./components/Category";
import { BrowserRouter } from "react-router-dom";
import Search from "./components/Search";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { MdOutlineOutdoorGrill } from "react-icons/md"


function App() {
  return (
    <div className="App">

      <BrowserRouter>
        <Nav>
          <MdOutlineOutdoorGrill />
          <Logo to={'/'}>YumTown</Logo>
        </Nav>
        <Search />
        <Category />
        <Pages />
      </BrowserRouter>

    </div>
  );
}

const Logo = styled(Link)`
text-decoration:none;
font-size:1.5rem;
font-weight: 400;
font-family:'Lobster Two', cursive;
`
const Nav = styled.div`
  padding: 4rem 0rem;
  display:flex;
  justify-content:flex-start;
  align-items: center;
  svg{
    font-size:2rem;
  }
`
export default App;
