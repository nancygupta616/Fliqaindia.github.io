import React from 'react';
import img from '../../assets/image/logo/logo1.jpeg';


const Navbar = () => {
return (
	<>
    
	<Nav>
		<NavMenu>
        <div>
    <a class="navbar-brand" href="/">
	<div>
            <img src = {img} alt = ""/>
        </div>
    </a>
    </div>
        <NavLink to='/home' activeStyle>
			Home
		</NavLink>
		<NavLink to='/aboutus' activeStyle>
			About Us
		</NavLink>
		<NavLink to='/services' activeStyle>
			Services
		</NavLink>
		<NavLink to='/freelancers' activeStyle>
			Freelancers
		</NavLink>
		<NavLink to='/blog' activeStyle>
			Blog
		</NavLink>
		<NavLink to='/tutorial' activeStyle>
			Tutorial
		</NavLink>
		<NavLink to='/contactus' activeStyle>
			Contact Us
		</NavLink>
		</NavMenu>
	</Nav>
	</>
);
};

export default Navbar;
