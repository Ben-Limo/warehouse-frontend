import { Login } from "@mui/icons-material";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import Home from "./pages/home/Home";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<Home />} />
            <Route path="login" element />
            <Route path="users">
              <Route index element />
              <Route path=":userId" element />
              <Route path="new" element />
            </Route>
            <Route path="products">
              <Route index element />
              <Route path=":productId" element />
              <Route path="new" element />
            </Route>
          </Route>
          </Routes>
        </BrowserRouter>        
    </div>
  );
}

export default App;
