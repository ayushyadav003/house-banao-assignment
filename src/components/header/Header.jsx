import { InputAdornment, Popover, TextField } from "@mui/material";
import "./header.scss";
import {
  KeyboardArrowDown,
  NotificationsNone,
  Search,
} from "@mui/icons-material";
import { useEffect, useState } from "react";
import { apiConfig } from "../../api/apiConfig";
import axios from "axios";

export default function Header({ title }) {
  const [currentUser, setCurrentUser] = useState(null);
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  const getUser = async () => {
    try {
      const apiOptions = {
        method: "Get",
        url: apiConfig["user"],
      };
      const response = await axios(apiOptions);
      if (response?.status === 200) {
        console.log("user", response);
        setCurrentUser(response.data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getUser();
  }, []);

  return (
    <div className="headerWrapper">
      <div className="inner">
        <h2>{title}</h2>
        <div>
          <TextField
            size="small"
            id="outlined-basic"
            placeholder="Search for anything..."
            variant="outlined"
            style={{
              height: "42px",
              borderRadius: "20px",
              color: "#000",
              backgroundColor: "#fff",
            }}
            InputProps={{
              startAdornment: <Search />,
            }}
          />
          <div className="bellIcon">
            <NotificationsNone />
          </div>
          {currentUser && (
            <div onClick={handleClick} className="userWidget">
              <img src={currentUser?.image} height={30} />
              <div>
                <p>{currentUser?.firstName}</p>
                <span>{currentUser?.email}</span>
              </div>
              <KeyboardArrowDown />
            </div>
          )}
          <Popover
            id={id}
            open={open}
            anchorEl={anchorEl}
            onClose={handleClose}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "center",
            }}
            transformOrigin={{
              vertical: "top",
              horizontal: "center",
            }}
          >
            <p style={{ padding: "5px 20px" }}>Coming soon!!!</p>
          </Popover>
        </div>
      </div>
    </div>
  );
}
