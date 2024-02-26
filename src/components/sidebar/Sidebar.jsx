import {
  AccountTreeOutlined,
  AddOutlined,
  ChecklistOutlined,
  DashboardOutlined,
  HelpOutline,
  KeyboardArrowLeftOutlined,
  PeopleAltOutlined,
  SettingsOutlined,
  TableRowsOutlined,
  WatchLaterOutlined,
  WorkOutlineOutlined,
} from "@mui/icons-material/";
import "./sidebar.scss";
import { useState } from "react";

const options = [
  { title: "Dashboard", icon: <DashboardOutlined />, link: "/" },
  { title: "Projects", icon: <WorkOutlineOutlined />, link: "/" },
  { title: "Tasks", icon: <ChecklistOutlined />, link: "/" },
  { title: "Time log", icon: <WatchLaterOutlined />, link: "/" },
  { title: "Resource mgnt", icon: <AccountTreeOutlined />, link: "/" },
  { title: "Users", icon: <PeopleAltOutlined />, link: "/" },
  { title: "Project template", icon: <TableRowsOutlined />, link: "/" },
  { title: "Menu settings", icon: <SettingsOutlined />, link: "/" },
];

function Sidebar() {
  const [selected, setSelected] = useState(0);
  const [showIcons, setShowIcons] = useState(false);

  return (
    <div className="sidebar" style={{ width: showIcons ? "75px" : "230px" }}>
      <div className="sidebarSwitcher" onClick={() => setShowIcons(!showIcons)}>
        <span>
          <KeyboardArrowLeftOutlined />
        </span>
      </div>
      <div
        className="logoWrapper"
        style={{
          width: showIcons && "70px",
          overflow: showIcons && "hidden",
          margin: showIcons && "0 0 0 -20px",
        }}
      >
        <img
          src="https://res.cloudinary.com/dgjtse3aj/image/upload/v1708943082/houseBanao-assignment/ean5jy4oavmubglsnjd1.png"
          className="logo"
        />
      </div>
      <div className="createProject" style={{ padding: showIcons && "0" }}>
        <div
          style={{
            backgroundColor: showIcons && "transparent",
            justifyContent: showIcons && "center",
            marginLeft: showIcons && "-10px",
          }}
        >
          <span>
            <AddOutlined fontSize="medium" />
          </span>
          {!showIcons && <p>Create new project</p>}
        </div>
      </div>
      <div
        className="optionsWrapper"
        style={{ padding: !showIcons ? "20px" : "10px" }}
      >
        {options.map((data, i) => (
          <div
            key={i}
            className={`${!showIcons ? "showOption" : "showIconOption"}`}
            style={{
              background: selected === i && "#fff",
              color: selected === i ? "#E65F2B" : "#fff",
            }}
            onClick={() => setSelected(i)}
          >
            <span>{data.icon}</span>
            <p>{data.title}</p>
          </div>
        ))}
      </div>
      <div className="endOption">
        <HelpOutline fontSize="medium" />
      </div>
    </div>
  );
}

export default Sidebar;
