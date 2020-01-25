import React from 'react';
import Sidebar from './Sidebar';
import Header from '../Header';
import DetailApplies from '../detail/DetailApplies';


const Applies = () => {
  return (
    <div className="container-app">
      <Sidebar />
      <div className="section-principal">
        <Header />
        <main>
          <div className="container-tasks">
            <DetailApplies />

          </div>
        </main>
      </div>
    </div>

  );
}

export default Applies;