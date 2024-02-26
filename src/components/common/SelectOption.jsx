import { MenuItem, Select } from '@mui/material'

export default function SelectOption({ value, setValue, options }) {
  return (
    <Select
      id="demo-simple-select"
      name="class"
      displayEmpty
      fullWidth
      size="small"
      value={value}
      onChange={(e) => setValue(e.target.value)}
      style={{
        height: '38px',
        borderRadius: '20px',
        color: '#000',
        backgroundColor: '#fff',
        width: 'fit-content',
      }}
    >
      {options.map((option, i) => (
        <MenuItem value={option.val} key={i}>
          {option.title}
        </MenuItem>
      ))}
    </Select>
  )
}
