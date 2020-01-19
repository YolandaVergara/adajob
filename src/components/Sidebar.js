import React from 'react';
import NewApply from './projects/NewApply';

const Sidebar = () => {

    return (
        <aside>
            <h1>Solicitudes</h1>
            <NewApply />
            <div className="projects">
                <h2>Tus Solicitudes</h2>
            </div>

        </aside>

    );
}

export default Sidebar;