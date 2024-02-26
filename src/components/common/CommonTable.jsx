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
                      <span
                        style={{
                          backgroundColor:
                            row.status === 'Completed'
                              ? '#cbdac4'
                              : row.status === 'Delayed'
                              ? '#efe0c5'
                              : row.status === 'At rist'
                              ? '#f1c6c1'
                              : '#efd1c4',
                          color:
                            row.status === 'Completed'
                              ? '#259737'
                              : row.status === 'Delayed'
                              ? '#e1ab24'
                              : row.status === 'At rist'
                              ? '#ef3e3a'
                              : '#e8764a',
                        }}
                        className="statusWrapper"
                      >
                        {row?.status}
                      </span>
                    </TableCell>
                    <TableCell component="th" scope="row">
                      <span className="progress">
                        100%
                        {/* <span className="progressInner1">
                          <span className="progressInner2">100%</span> */}
                        {/* </span> */}
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
