import React, { useContext, useEffect } from 'react';
import Apply from './Apply';
import ApplyContext from '../../../context/sidebar/applyContext';

const List = () => {

    //Extraer proyectos del state inicial
    const applyContext = useContext(ApplyContext);
    const { applies, getApplies } = applyContext;
    console.log(applies);
     
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