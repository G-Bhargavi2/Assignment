import React, { useState } from 'react';
import { Checkbox, FormControlLabel, List, ListItem, Typography } from '@mui/material';

interface Department {
  department: string;
  sub_departments: string[];
}

interface DepartmentCheckboxProps {
  department: Department;
}

const DepartmentCheckbox: React.FC<DepartmentCheckboxProps> = ({ department }) => {
  const [selectedSubDepartments, setSelectedSubDepartments] = useState<string[]>([]);
  const isDepartmentSelected = selectedSubDepartments.length === department.sub_departments.length;

  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { checked } = event.target;
    if (checked) {
      setSelectedSubDepartments([...department.sub_departments]);
    } else {
      setSelectedSubDepartments([]);
    }
  };

  const handleSubDepartmentCheckboxChange = (subDepartment: string) => (
    event: React.ChangeEvent<HTMLInputElement>) => {
    const { checked } = event.target;
    if (checked) {
      setSelectedSubDepartments([...selectedSubDepartments, subDepartment]);
    } else {
      setSelectedSubDepartments(selectedSubDepartments.filter((subDep) => subDep !== subDepartment));
    }
  };

  return (
    <div>
      <FormControlLabel
        control={
          <Checkbox
            checked={isDepartmentSelected}
            indeterminate={!isDepartmentSelected && selectedSubDepartments.length > 0}
            onChange={handleCheckboxChange}
          />
        }
        label={<Typography variant="body1">{department.department}</Typography>}
      />
      <List>
        {department.sub_departments.map((subDepartment, index) => (
          <ListItem key={index} dense>
            <FormControlLabel
              control={
                <Checkbox
                  checked={selectedSubDepartments.includes(subDepartment)}
                  onChange={handleSubDepartmentCheckboxChange(subDepartment)}
                />
              }
              label={<Typography variant="body2">{subDepartment}</Typography>}
            />
          </ListItem>
        ))}
      </List>
    </div>
  );
};

export default DepartmentCheckbox;
