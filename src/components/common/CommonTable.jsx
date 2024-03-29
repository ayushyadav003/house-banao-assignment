import {
  Box,
  CircularProgress,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import "./common.scss";

function getColor(value) {
  if (value < 40) {
    return "red";
  } else if (value < 70) {
    return "yellow";
  } else {
    return "green";
  }
}
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
                {type === "projectSummary" && (
                  <>
                    <TableCell component="th" scope="row">
                      {row?.name}
                    </TableCell>
                    <TableCell component="th" scope="row">
                      {row?.projectManager || "--"}
                    </TableCell>
                    <TableCell component="th" scope="row">
                      {row?.duesDate || "--"}
                    </TableCell>
                    <TableCell component="th" scope="row">
                      <span
                        style={{
                          backgroundColor:
                            row.status === "Completed"
                              ? "#cbdac4"
                              : row.status === "Delayed"
                              ? "#efe0c5"
                              : row.status === "At rist"
                              ? "#f1c6c1"
                              : "#efd1c4",
                          color:
                            row.status === "Completed"
                              ? "#259737"
                              : row.status === "Delayed"
                              ? "#e1ab24"
                              : row.status === "At rist"
                              ? "#ef3e3a"
                              : "#e8764a",
                        }}
                        className="statusWrapper"
                      >
                        {row?.status}
                      </span>
                    </TableCell>
                    <TableCell component="th" scope="row">
                      <Box position="relative" display="inline-flex">
                        <CircularProgress
                          variant="determinate"
                          value={parseInt(row?.progress)}
                          thickness={4}
                          sx={{
                            color: getColor(parseInt(row?.progress)),
                            trailColor: "#e1d9d5",
                          }}
                          className="main-progress"
                        />
                        <CircularProgress
                          variant="determinate"
                          disableShrink
                          value={100}
                          thickness={4}
                          sx={{
                            color: "gray",
                          }}
                          className="overlay-progress"
                        />
                        <Box
                          top={0}
                          left={0}
                          bottom={0}
                          right={0}
                          position="absolute"
                          display="flex"
                          alignItems="center"
                          justifyContent="center"
                        >
                          <Typography
                            variant="caption"
                            component="div"
                            color="textSecondary"
                            style={{
                              fontWeight: "600",
                              color: "#000",
                              fontSize: "10px",
                            }}
                          >
                            {row?.progress}
                          </Typography>
                        </Box>
                      </Box>{" "}
                    </TableCell>
                  </>
                )}
              </TableRow>
            ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
