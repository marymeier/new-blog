import React from 'react';
import './NavigationBar.css';

function NavigationBar() {
  return (
    <div>
      <nav className="navigation">
        <ul>
          <li><Tab class="active">Mary</Tab></li>
          <li><Tab>Danielle</Tab></li>
        </ul>
      </nav>
      <h1>Create New Blogs</h1>
    </div>
  );
}

export default NavigationBar;
