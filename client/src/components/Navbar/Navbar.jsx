import React from "react";


import "./Navbar.css";

function handleClick(e) {
  e.preventDefault();
  document.querySelector(".Navbar .side-menu").classList.toggle("active");
  document.querySelector(".sandwich").classList.toggle("active");

  if(e.target.innerText !== ""){
    let id = e.target.href.split("#");
    id = id[1];

    let scrollY;

    if(id === "banner"){
      scrollY = document.querySelector("#" + id).offsetTop - window.pageYOffset;
    }else if(id === "about-us"){
      scrollY = document.querySelector(".aboutUsRight").offsetTop - window.pageYOffset;
    }else{
      scrollY = document.querySelector("#" + id + " h2").offsetTop - window.pageYOffset;
    }

    scrollY -= document.querySelector(".Navbar").clientHeight;

    window.scrollBy(0, scrollY);
    
  }

}

function Navbar() {
  return (
    <div className="nav-placeholder">
      <nav className="Navbar">
        <img alt="Aqua jr logo" />

        <div className="web-only">
          <div className="links">
            <a className="active" href="#banner" onClick={handleClick}>Início</a>
            <a href="#ExpertiseArea" onClick={handleClick}>Áreas de atuação</a>
            <a href="#about-us" onClick={handleClick}>Sobre nós</a>
            <a href="#testimony" onClick={handleClick}>Depoimentos</a>
            <a href="#contact" onClick={handleClick}>Contato</a>
          </div>
          <a
            className="blog-button"
            href="https://aquajr.wixsite.com/aquajr/blog"
            target="_blank"
            rel="noopener noreferrer"
          >
            Blog
          </a>
        </div>

        <button className="sandwich" name="navbar-menu" onClick={handleClick}>
          <div></div>
          <div></div>
          <div></div>
        </button>

        <aside className="side-menu">
          <div className="side-menu-container">
            <div className="links">
            <a href="#banner" onClick={handleClick}>Início</a>
            <a href="#ExpertiseArea" onClick={handleClick}>Áreas de atuação</a>
            <a href="#about-us" onClick={handleClick}>Sobre nós</a>
            <a href="#testimony" onClick={handleClick}>Depoimentos</a>
            <a href="#contact" onClick={handleClick}>Contato</a>
            </div>
            <a
              className="blog-button"
              href="https://aquajr.wixsite.com/aquajr/blog"
              target="_blank"
              rel="noopener noreferrer"
            >
              Blog
            </a>
          </div>
        </aside>
      </nav>
    </div>
  );
}

export default Navbar;