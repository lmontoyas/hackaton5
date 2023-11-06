import React from 'react';
import { useEffect, useState } from 'react';
import { fetchGroups } from '../../api/dataService';
import 'devextreme/data/odata/store';
import DataGrid, { Column, } from 'devextreme-react/data-grid';

export default function Groups() {
    const [groupsWithPersonCount, setGroupsWithPersonCount] = useState();
    
    useEffect (() =>{
        fetchGroups()
        .then((response)=>{
            const groupsData = response.data;

            console.log(groupsData);
            setGroupsWithPersonCount(groupsData.map(group =>({
                id: group.id,
                name: group.name,
                tipo: group.tipo,
                personCount: group.members ? group.members.length: 0 //Contreo de personas
            }))) 
        }).catch((error) =>{
            console.log(error);
        })    
    },[]);

  return (
    <DataGrid

    className={'dx-card wide-card'}
    dataSource={groupsWithPersonCount}
    showBorders={false}
    >
        <Column dataField='id' width={50} />
        <Column dataField='name' />
        <Column dataField='tipo' />
        <Column dataField='personCount' caption="Number of Person"/>
    
      </DataGrid>
  )
}