import * as React from 'react';
import Checkbox from '@mui/material/Checkbox';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import ListItemText from '@mui/material/ListItemText';
import MenuItem from '@mui/material/MenuItem';
import OutlinedInput from '@mui/material/OutlinedInput';
import Select from '@mui/material/Select';

export function DropdownForm(props) {
  const { medicos, label, values, onChangeFunction } = props;

  return (
    <div>
      <FormControl sx={{ m: 1, width: 390 }}>
        <InputLabel id="demo-multiple-checkbox-label">{label}</InputLabel>
        <Select
          labelId="demo-multiple-checkbox-label"
          id="demo-multiple-checkbox"
          multiple
          value={values}
          onChange={onChangeFunction}
          input={<OutlinedInput label={label} />}
          renderValue={(selected) => selected.join(', ')}
          MenuProps={{
            style: {
              maxHeight: 48 * 4.5 + 8,
              width: 250,
            },
          }}
        >
          {medicos.map((item, key) => (
            <MenuItem key={key} value={item._id}>
              <Checkbox checked={values.indexOf(item._id) > -1} />
              <ListItemText primary={item.nombre} />
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}