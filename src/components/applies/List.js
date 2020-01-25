import React, { useContext, useEffect } from 'react';
import Apply from './Apply';
import ProjectContext from '../../context/applies/applyContext';

const List = () => {

    //Extraer proyectos del state inicial
    const projectContext = useContext(ProjectContext);
    const { applies, getApplies } = projectContext;
    
     
    //Obtener proyectos cuando carga el componente
    useEffect(() => {
        getApplies();
    }, []);
    

    //Comprobamos que tenga contenido
    if (applies.lenght === 0) return null;
    
    return (
        <ul className="Applies-list">
            {applies.map(apply => (
                <Apply
                    key={apply.id}
                    apply={apply} />
            ))}
        </ul>
    );

}
export default List;