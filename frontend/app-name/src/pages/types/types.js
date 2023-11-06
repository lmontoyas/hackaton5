import React from 'react';
import { useEffect, useState } from 'react';
import { fetchTypes } from '../../api/dataService';
import 'devextreme/data/odata/store';
import DataGrid, { Column, } from 'devextreme-react/data-grid';

export default function Groups() {
    const [typesWithGroupsCount, setTypesWithGroupCount] = useState();
    
    useEffect (() =>{
        fetchTypes()
        .then((response)=>{
            const typesData = response.data;

            console.log(typesData);
            setTypesWithGroupCount(typesData.map(type =>({
                id: type.id,
                name: type.name
            }))) 
        }).catch((error) =>{
            console.log(error);
        })    
    },[]);

  return (
    <DataGrid

    className={'dx-card wide-card'}
    dataSource={typesWithGroupsCount}
    showBorders={false}
    >
        <Column dataField='id' width={50} />
        <Column dataField='name' />    
      </DataGrid>
  )
}