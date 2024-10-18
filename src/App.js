import logo from './logo.svg';
import './App.css';
import './main.css';

function App() {
  return (
<div id="header" class="header d-flex align-items-center fixed-top">
    <div class="container-fluid container-xl position-relative d-flex align-items-center">

      <a href="index.html" class="logo d-flex align-items-center me-auto">
      
        <img src="" alt="" class="img-f\\"/>
        <h1 class="sitename">TIH</h1>
      </a>

      <nav id="navmenu" class="navmenu">
        <ul>
          <li><a href="index.html#hero" class="">Home</a></li>
          <li><a href="index.html#about">About</a></li>
          <li><a href="index.html#services">Services</a></li>
          <li><a href="index.html#products">Products</a></li>
          <li><a href="index.html#team">Team</a></li>
          <li><a href="index.html#gallery">Gallery</a></li>
          <li><a href="index.html#contact">Contact</a></li>
        </ul>
        <i class="mobile-nav-toggle d-xl-none bi bi-list"></i>
      </nav>
    </div>
  </div>
   
  );
}

export default App;
