import React from 'react';

import Layout from '../components/layout';
import Typewriter from 'typewriter-effect';
import '../components/App.css';
import logo from '../images/logo.svg';
import { Link } from "gatsby"
import { FaGithub,FaBold,FaMediumM,FaLinkedin } from 'react-icons/fa';

const IndexPage = () => (
<Layout>
<section class="hero is-light is-fullheight">

<div class="hero-body">

    <div class="container has-text-centered">
        
    <img src={logo} className="App-logo" alt="logo" /> 
    <br/>
<br/> 
      <Typewriter
  options={{
    strings: ['Hai, Selamat Datang', 'Nama Saya', 'Muhammad <strong>Avtara</strong> Khrisna'],
    autoStart: true,
    loop: true,
  }}
/>
<br/>
<br/>
<div class="columns">
  <div class="column">
    <Link className="button is-medium is-fullwidth" to="/blogs">
    <span className="icon">
			<FaBold size="fa-2x" />
		</span>
		<span>Avtara`s Blog</span>
    </Link>
  </div>
  <div class="column">
  <a className="button is-medium is-fullwidth" href="https://medium.com/@avtarakhrisna1">
		<span className="icon">
			<FaMediumM size="fa-2x" />
		</span>
		<span>Medium</span>
    </a>
  </div>
  <div class="column">
  <a className="button is-medium is-fullwidth" href="https://github.com/avtara">
		<span className="icon">
			<FaGithub size="fa-2x" />
		</span>
		<span>Github</span>
    </a>
  </div>
  <div class="column">
  <a className="button is-medium is-fullwidth" href="https://www.linkedin.com/in/muhammad-avtara-khrisna-34a268151/">
		<span className="icon">
			<FaLinkedin size="fa-2x" />
		</span>
		<span>Linkedin</span>
    </a>
  </div>
</div>
    </div>
  </div>


</section>
      
</Layout>
);

export default IndexPage;
