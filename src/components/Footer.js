import React from 'react';

class Footer extends React.Component {
  render() {
    return (
      <div className="footer">
        <h3>Projeto Solar System - TRYBE</h3>
        <p className="p">Alberto Fernandes Couto</p>
        <p className="p">Turma 22 - Tribo A</p>
        <img
          className="img-footer"
          src="https://i.pinimg.com/564x/41/d4/1b/41d41b50c9f877922ff8c211c2baf80e.jpg"
          alt="img-footer"
        />
      </div>
    );
  }
}

export default Footer;
