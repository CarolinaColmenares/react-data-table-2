import React, { useState, useEffect } from 'react';
import 'styled-components';
import './App.css';
import DataTable, { createTheme } from 'react-data-table-component';

const App = () => {
  // 1- Configurar los hooks
  const [users, setUsers] = useState([])

  // 2- Función para mostrar los Datos con Fetch

  const URL = 'https://gorest.co.in/public/v2/users'
  const showData = async () => {
    const response = await fetch(URL)
    const data     = await response.json()
    console.log(data)
    setUsers(data)
  }

  useEffect(() =>{
    showData()
  }, [])

  // 3- Configurar las columns para Datatable

  const columns =[
    {
      name:'ID',
      selector: row =>row.id
    },
    {
      name:'NAME',
      selector: row =>row.name
    },{
      name:'EMAIL',
      selector: row =>row.email
    },
  ]

  // 4- Mostrar la Data en DataTable


  return (
    <div className="App">

      <DataTable 
        columns={columns}
        data={users}
      />

    </div>
  );
}

export default App;
