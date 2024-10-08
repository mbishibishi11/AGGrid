import { createRoot } from 'react-dom/client'
import { createTheme, ThemeProvider } from "@mui/material/styles";
import App from './App.jsx'
import './index.css'

const theme = createTheme({
  palette: {
      mode: 'light',
  }
});
createRoot(document.getElementById('root')).render(
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
)
