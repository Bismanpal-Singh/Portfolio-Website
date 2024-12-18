import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "/Users/bisman/Documents/Portfolio-Website/src/components/themeprovider.tsx";
import { HomePage } from "/Users/bisman/Documents/Portfolio-Website/src/HomePage/HomePage.tsx";
import './App.css'

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;