import React, { useEffect, useState } from 'react';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { Container, Box } from '@mui/material';
import '../App.css';
import Data from '../Data';
import DepartmentCheckbox  from './DepartmentCheckbox';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom'

const columns: GridColDef[] = [
  { field: 'userId', headerName: 'USERID', width: 100 , },
  { field: 'id', headerName: 'ID', width: 10 },
  { field: 'title', headerName: 'TITLE', width: 300 },
  { field: 'body', headerName: 'BODY', width: 800 },
];

interface Department{
  department:string;
  sub_departments : string[];

}

const Second: React.FC = () => {
  const [data, setUsers] = useState<Data[]>([]);
  const departments: Department[] = [
    { 'department': 'customer_service', 'sub_departments': ['support', 'customer_success'] },
    {'department': 'design','sub_departments':["graphic_design",'product_design',"web-design"]},
  ];

  useEffect(() => {
    fetchData();
  }, []);

  // function to retrive the jsonData from an API

  const fetchData = async () => {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts');
      const jsonData = await response.json();
      setUsers(jsonData);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };


  return (
    <>
    <div style={{ height: 500, width: '100%' }}>
      <DataGrid   getRowHeight={() => 'auto'} rows={data} columns={columns} />
    </div>
    <Container sx={{ ml: 5 }}>
      <Box mt={4} mb={5}>
        <h1 className='heading'>Checkbox List</h1>
        {departments.map((department, index) => (
        <DepartmentCheckbox key={index} department={department} />
         ))}
        <Link to = "/" >
        <Button type="button" variant="contained" color="primary"  sx={{mt: 3}}>
            Back
          </Button>
        </Link>
      </Box>
    </Container>
    </>
  );
};

export default Second;