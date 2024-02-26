import { InputAdornment, TextField } from '@mui/material'
import './header.scss'
import { Search } from '@mui/icons-material'

export default function Header({ title }) {
  return (
    <div className="headerWrapper">
      <div className="inner">
        <h2>{title}</h2>
        <div>
          <TextField
            size="small"
            id="outlined-basic"
            label="Search for anything..."
            variant="outlined"
            style={{
              height: '42px',
              borderRadius: '20px',
              color: '#000',
              backgroundColor: '#fff',
            }}
            InputProps={{
              endAdornment: (
                <InputAdornment position="start">
                  <Search />
                </InputAdornment>
              ),
            }}
          />
        </div>
      </div>
    </div>
  )
}
