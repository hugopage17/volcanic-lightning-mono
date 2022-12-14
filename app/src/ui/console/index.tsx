import * as React from "react";
import { styled, useTheme, Theme, CSSObject } from "@mui/material/styles";
import { ButtonGroup, Button, Box, Switch } from "@mui/material";
import { Feature } from "@global-volcanic-lightning/types";
import MuiDrawer from "@mui/material/Drawer";
import MuiAppBar, { AppBarProps as MuiAppBarProps } from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import HistoryIcon from "@mui/icons-material/History";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import DashboardIcon from "@mui/icons-material/Dashboard";
import MapIcon from "@mui/icons-material/Map";
import ExportIcon from "@mui/icons-material/DownloadOutlined";
import TableChartIcon from "@mui/icons-material/TableChart";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";

import MapComponent from "./map";
import TableComponent from "./table";
import DashboardComponent from "./dashboard";
import Loader from "../components/Loader";
import ErrorComponent from "../components/Error";
import AppContext from "../../AppContext";
import { palette } from "../../colorPalette";
import downloadCSV from "../../api/formatCSV";
import AboutDialog from "../dialogs/AboutDialog";

const drawerWidth = 200;

const openedMixin = (theme: Theme): CSSObject => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme: Theme): CSSObject => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const MaterialUISwitch = styled(Switch)(({ theme }) => ({
  width: 62,
  height: 34,
  padding: 7,
  "& .MuiSwitch-switchBase": {
    margin: 1,
    padding: 0,
    transform: "translateX(6px)",
    "&.Mui-checked": {
      color: "#fff",
      transform: "translateX(22px)",
      "& .MuiSwitch-thumb:before": {
        backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
          "#fff"
        )}" d="M4.2 2.5l-.7 1.8-1.8.7 1.8.7.7 1.8.6-1.8L6.7 5l-1.9-.7-.6-1.8zm15 8.3a6.7 6.7 0 11-6.6-6.6 5.8 5.8 0 006.6 6.6z"/></svg>')`,
      },
      "& + .MuiSwitch-track": {
        opacity: 1,
        backgroundColor: theme.palette.mode === "dark" ? "#8796A5" : "#aab4be",
      },
    },
  },
  "& .MuiSwitch-thumb": {
    backgroundColor: theme.palette.mode === "dark" ? "#003892" : "#001e3c",
    width: 32,
    height: 32,
    "&:before": {
      content: "''",
      position: "absolute",
      width: "100%",
      height: "100%",
      left: 0,
      top: 0,
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center",
      backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
        "#fff"
      )}" d="M9.305 1.667V3.75h1.389V1.667h-1.39zm-4.707 1.95l-.982.982L5.09 6.072l.982-.982-1.473-1.473zm10.802 0L13.927 5.09l.982.982 1.473-1.473-.982-.982zM10 5.139a4.872 4.872 0 00-4.862 4.86A4.872 4.872 0 0010 14.862 4.872 4.872 0 0014.86 10 4.872 4.872 0 0010 5.139zm0 1.389A3.462 3.462 0 0113.471 10a3.462 3.462 0 01-3.473 3.472A3.462 3.462 0 016.527 10 3.462 3.462 0 0110 6.528zM1.665 9.305v1.39h2.083v-1.39H1.666zm14.583 0v1.39h2.084v-1.39h-2.084zM5.09 13.928L3.616 15.4l.982.982 1.473-1.473-.982-.982zm9.82 0l-.982.982 1.473 1.473.982-.982-1.473-1.473zM9.305 16.25v2.083h1.389V16.25h-1.39z"/></svg>')`,
    },
  },
  "& .MuiSwitch-track": {
    opacity: 1,
    backgroundColor: theme.palette.mode === "dark" ? "#8796A5" : "#aab4be",
    borderRadius: 20 / 2,
  },
}));

interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})<AppBarProps>(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

const StyledButton = styled(Button)(() => ({
  color: palette.secondary,
  textTransform: "none",
}));

const Console: React.FC = () => {
  const themeHook = useTheme();
  const [open, setOpen] = React.useState<boolean>(false);
  const [openAboutDialog, toggleAboutDialog] = React.useState<boolean>(false);

  const handleDrawerOpen = () => setOpen(true);
  const handleDrawerClose = () => setOpen(false);

  const {
    selectedPanel,
    setPanel,
    lightning,
    loading,
    error,
    theme,
    setTheme,
  } = React.useContext(AppContext);

  const iconsList = [
    {
      name: "Map",
      icon: <MapIcon />,
    },
    {
      name: "Dashboard",
      icon: <DashboardIcon />,
    },
    {
      name: "Table",
      icon: <TableChartIcon />,
    },
  ];

  return (
    <Box sx={{ display: "flex", zIndex: 120 }}>
      <CssBaseline />
      <AppBar position="fixed" open={open}>
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          <div style={{ display: "flex", alignItems: "center" }}>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={handleDrawerOpen}
              edge="start"
              sx={{
                marginRight: 5,
                ...(open && { display: "none" }),
              }}
            >
              <MenuIcon />
            </IconButton>
          </div>
          <div>
            <ButtonGroup
              disabled={loading}
              variant="text"
              aria-label="text button group"
            >
              <StyledButton
                aria-label="toolbar-export-button"
                title="View History"
                endIcon={<HistoryIcon />}
                onClick={() => null}
              >
                History
              </StyledButton>
              <StyledButton
                aria-label="toolbar-export-button"
                title="Export to CSV"
                endIcon={<ExportIcon />}
                onClick={() =>
                  downloadCSV(
                    lightning?.features as Feature[],
                    lightning?.timestamp as string
                  )
                }
              >
                Export
              </StyledButton>
            </ButtonGroup>
            <MaterialUISwitch
              sx={{ m: 1 }}
              aria-label="toolbar-theme-toggle"
              checked={theme === "dark" ? true : false}
              onChange={(event) =>
                setTheme(event.target.checked ? "dark" : "light")
              }
            />
          </div>
        </Toolbar>
      </AppBar>
      <Drawer variant="permanent" open={open}>
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {themeHook.direction === "rtl" ? (
              <ChevronRightIcon />
            ) : (
              <ChevronLeftIcon />
            )}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <div style={{ flexGrow: 1, display: "flex" }}>
          <List sx={{ width: "100%" }}>
            {iconsList.map((icon) => (
              <ListItem
                onClick={() => setPanel(icon.name)}
                title={icon.name}
                key={`drawer-icon-${icon.name}`}
                disablePadding
                sx={{ display: "block" }}
                aria-label={`console-drawer-icon-${icon.name}`}
              >
                <ListItemButton
                  sx={{
                    minHeight: 64,
                    justifyContent: open ? "initial" : "center",
                    px: 2.5,
                  }}
                >
                  <ListItemIcon
                    sx={{
                      minWidth: 0,
                      mr: open ? 3 : "auto",
                      justifyContent: "center",
                      color:
                        selectedPanel === icon.name
                          ? palette.primary
                          : theme === "dark"
                          ? "white"
                          : "#212121",
                    }}
                  >
                    {icon.icon}
                  </ListItemIcon>
                  <ListItemText
                    primary={icon.name}
                    sx={{
                      opacity: open ? 1 : 0,
                      color:
                        selectedPanel === icon.name
                          ? palette.primary
                          : theme === "dark"
                          ? "white"
                          : "#212121",
                    }}
                  />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </div>
        <List sx={{ display: "flex" }}>
          <ListItem
            title="About"
            disablePadding
            sx={{ display: "block" }}
            aria-label="console-drawer-icon-info"
            onClick={() => toggleAboutDialog(true)}
          >
            <ListItemButton
              sx={{
                minHeight: 64,
                justifyContent: open ? "initial" : "center",
                px: 2.5,
              }}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 3 : "auto",
                  justifyContent: "center",
                  color: theme === "dark" ? "white" : "#212121",
                }}
              >
                <HelpOutlineIcon />
              </ListItemIcon>
              <ListItemText
                primary="About"
                sx={{
                  opacity: open ? 1 : 0,
                  color: theme === "dark" ? "white" : "#212121",
                }}
              />
            </ListItemButton>
          </ListItem>
        </List>
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1 }}>
        <DrawerHeader />
        {loading && <Loader />}
        {!loading && error && <ErrorComponent />}
        {!loading && !error && (
          <div>
            {selectedPanel === "Map" && (
              <MapComponent features={lightning?.features as Feature[]} />
            )}
            {selectedPanel === "Table" && (
              <TableComponent lightning={lightning?.features as Feature[]} />
            )}
            {selectedPanel === "Dashboard" && (
              <DashboardComponent
                lightning={lightning?.features as Feature[]}
              />
            )}
          </div>
        )}
      </Box>
      <AboutDialog
        open={openAboutDialog}
        handleClose={() => toggleAboutDialog(false)}
      />
    </Box>
  );
};

export default Console;
