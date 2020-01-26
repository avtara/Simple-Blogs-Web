import React	 from 'react'
import { Link } from 'gatsby'
import logo from '../images/logo.png'

const NavbarItem = props => (
	<Link className="navbar-item is-capitalized" to={props.page}>
	  {props.pagename}
	</Link>
  )
  const NavbarBurger = props => (
	<div
	  onClick={props.toggleMenu}
	  className={`navbar-burger burger ${props.active ? 'is-active' : ''}`}
	>
	  <span />
	  <span />
	  <span />
	</div>
  )

export default class Navbar extends React.Component {
	state = {
	  activeMenu: false,
	}
	toggleMenu = () => {
	  this.setState({
		activeMenu: !this.state.activeMenu,
	  })
	}
	render() {
	  return (
		<nav className="navbar has-shadow">
		  <div className="container">
		  <div className="navbar-brand">
			<Link className="navbar-item" to="/">
				<img src={logo} alt="logo" style={{marginRight: 5 + 'px'}} />
                <p><strong>Avtara Blog`s</strong></p>
			</Link>
			<NavbarBurger
			  active={this.state.activeMenu}
			  toggleMenu={this.toggleMenu}
			/>
		  </div>
		  <div
			className={`navbar-menu ${this.state.activeMenu ? 'is-active' : ''}`}>
			<div className="navbar-end">
			  <NavbarItem page="/" pagename="Home" />
			  <NavbarItem page="/blogs/" pagename="Blogs" />
			</div>
		  </div>
		  </div>
		</nav>
	  )
	}
  }

