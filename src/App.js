import "./App.css";
import NavBar from './components/organisms/NavBar';
import Footer from './components/organisms/Footer';
import routeArray from './utils/router';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Routes>
          {routeArray.map((routeObject) => {
            return (
              <Route
              key={routeObject.path}
              path={routeObject.path}
              element={<routeObject.element />}
              />
            )}
          )}
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
