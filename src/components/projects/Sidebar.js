import React from 'react';
import NewApply from './NewApply';
import List from './List';

const Sidebar = () => {

    return (
        <aside>
            <h1>Solicitudes</h1>
            <NewApply />
            <div className="projects">
                <h2>Tus Solicitudes</h2>
                <List />
            </div>

        </aside>

    );
}

export default Sidebar;