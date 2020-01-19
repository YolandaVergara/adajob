import React from 'react';
import Apply from './Apply';

const List = () => {

    const projects = [
        { name: 'Empresa 1' },
        { name: 'Empresa 2' },
        { name: 'Empresa 3' }
    ]
    return (
        <ul className="applys-list">
            {projects.map(project => (
                <Apply project={project} />
            ))}
        </ul>
    );

}
export default List;