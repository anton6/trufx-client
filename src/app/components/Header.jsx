import React from 'react';

import NavBar from './NavBar';
import HeaderLink from './HeaderLink';

const Header = () => (
  <div>
    <NavBar>
      <HeaderLink to="/">
        Home
      </HeaderLink>
      <HeaderLink to="/rates">
        Rates
      </HeaderLink>
    </NavBar>
  </div>
);

export default Header;
