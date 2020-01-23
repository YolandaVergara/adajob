import React, { useContext, useEffect } from 'react';
import Apply from './Apply';
import ProjectContext from '../../context/projects/projectContext';

const List = () => {

    //Extraer proyectos del state inicial
    const projectContext = useContext(ProjectContext);
    const { projects, getProjects } = projectContext;
    
    //Obtener proyectos cuando carga el componente
    useEffect(() => {
        getProjects();
    }, []);

    //Comprobamos que tenga contenido
    if (projects.lenght === 0) return null;
    return (
        <ul className="applys-list">
            {projects.map(project => (
                <Apply
                    key={project.id}
                    project={project} />
            ))}
        </ul>
    );

}
export default List;