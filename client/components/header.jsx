import React from 'react';

function Header(props) {
  return (
    <div className="row justify-content-between mt-5 mb-2 mr-2 ml-2">
      <h2>Student Grade Table</h2>
      <h4>Average Grade <span className="badge badge-secondary">{props.average}</span></h4>
    </div>
  );
}

export default Header;
