import React from 'react';
import Sidebar from './Sidebar';
import Header from '../Header';
import ListApplys from '../tasks/ListApplys';


const Applys = () => {
  return (
    <div className="container-app">
      <Sidebar />
      <div className="section-principal">
        <Header />
        <main>
          <div className="container-tasks">
            <ListApplys />

          </div>
        </main>
      </div>
    </div>

  );
}

export default Applys;