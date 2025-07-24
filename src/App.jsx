import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { PanelPrincipal } from "./modules/pages/PanelPrincipal";
import { Contacto } from "./modules/pages/Contacto";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Routes>
          {/* ruta inicial */}
          <Route path="/" element={<Navigate to="/home" />} />
          
          {/* demas rutas */}
          <Route path="/home" element={<PanelPrincipal />} />
          <Route path="/contacto" element={<Contacto />} />
          
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
