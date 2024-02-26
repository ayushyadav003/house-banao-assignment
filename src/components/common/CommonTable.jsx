import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@mui/material'
import './common.scss'

export default function CommonTable({ head, data, type }) {
  return (
    <TableContainer component={Paper} className="tableContainer">
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            {head.length > 0 &&
              head.map((headData, i) => (
                <TableCell className="boldCell" key={i}>
                  {headData}
                </TableCell>
              ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {data.length > 0 &&
            data.map((row, i) => (
              <TableRow key={i}>
                {type === 'projectSummary' && (
                  <>
                    <TableCell component="th" scope="row">
                      {row?.name}
                    </TableCell>
                    <TableCell component="th" scope="row">
                      {row?.projectManager || '--'}
                    </TableCell>
                    <TableCell component="th" scope="row">
                      {row?.duesDate || '--'}
                    </TableCell>
                    <TableCell component="th" scope="row">
                      {row?.status}
                    </TableCell>
                    <TableCell component="th" scope="row">
                      <span>
                        <span>
                          <span>100%</span>
                        </span>
                      </span>
                    </TableCell>
                  </>
                )}
              </TableRow>
            ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}
