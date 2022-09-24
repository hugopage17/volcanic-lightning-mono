import React from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { Amplify } from "aws-amplify";

import "./App.css";
import Console from "./ui/console";
import AppContext from "./AppContext";
import useLightning from "./hooks/useLightning";
import useSetTheme from "./hooks/useSetTheme";
import { palette } from "./colorPalette";
import awsConfig from "./aws-exports";

Amplify.configure(awsConfig);

const App = () => {
  const { theme, setTheme } = useSetTheme();
  const darkTheme = createTheme({
    palette: {
      mode: theme ?? "light",
      primary: { main: palette.primary },
      // secondary: palette.secondary as PaletteColorOptions
    },
  });

  const { lightning, loading, reload, error } = useLightning();

  const [selectedPanel, setPanel] = React.useState("Map");

  return (
    //@ts-ignore
    <ThemeProvider theme={darkTheme}>
      <AppContext.Provider
        value={{
          lightning,
          loading,
          reload,
          error,
          selectedPanel,
          setPanel,
          setTheme,
          theme,
        }}
      >
        <Console />
      </AppContext.Provider>
    </ThemeProvider>
  );
};

export default App;
