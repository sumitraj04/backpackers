import "./App.css";
import { ThemeProvider } from "@mui/material/styles";
import { appTheme } from "./AppTheme";
import Router from "./routes";
import Help from "./components/Reusable/Help/Help";
function App() {
  
  return (
    <ThemeProvider theme={appTheme}>
      <Help/>
      <Router />
    </ThemeProvider>
  );
}

export default App;
