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

  //Personalizar Tema

 
// createTheme creates a new theme named solarized that overrides the build in dark theme
createTheme('custom', {
  text: {
    primary: '#268bd2',
    secondary: '#2aa198',
  },
  background: {
    default: '#002b36',
  },
  context: {
    background: '#cb4b16',
    text: '#FFFFFF',
  },
  divider: {
    default: '#073642',
  },
  action: {
    button: 'rgba(0,0,0,.54)',
    hover: 'rgba(0,0,0,.08)',
    disabled: 'rgba(0,0,0,.12)',
  },
}, 'dark');

const MyComponent = () => (
  <DataTable
    title="Arnold Movies"
    columns={columns}
    theme="solarized"
  />
);

  // 4- Mostrar la Data en DataTable


  return (
    <div className="App">
        <h1>React DataTable</h1>
      <DataTable 
        columns={columns}
        data={users}
        theme='custom'
        pagination
      />

    </div>
  );
}

export default App;
