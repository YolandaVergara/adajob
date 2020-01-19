import React from 'react';
import Apply from './Apply';

const List = () => {

    const projects = [
        { name: 'Liquid' },
        { name: 'Accenture' },
        { name: 'Redradit' }
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