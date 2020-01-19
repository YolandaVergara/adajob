import React from 'react';
import Sidebar from './Sidebar';
import Header from '../Header';

const Applys = () => {
  return (
    <div className="container-app">
      <Sidebar />
      <div className="section-principal">
        <Header />
        <main>
          <div className="container-taskss">

          </div>
        </main>
      </div>
    </div>

  );
}

export default Applys;