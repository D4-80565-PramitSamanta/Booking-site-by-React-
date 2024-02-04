import { BrowserRouter,Route,Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import List from "./pages/list/Lists";
import Hotel from "./pages/hotels/Hotel";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route      path="/"   element={<Home/>}    />
          <Route      path="/hotels"   element={<List/>}    />
          <Route      path="/hotels/:id"   element={<Hotel/>}    />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
