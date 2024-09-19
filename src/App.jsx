import { BrowserRouter, Route, Routes } from "react-router-dom";
import {
  AppLayout,
  HomePage,
  Login,
  PageNotFound,
  Pricing,
  Product,
} from "./pages";
import { CityList, CountryList, Form } from "./components";
import { cities } from "./data";

function App() {
  console.log({ cities });
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="product" element={<Product />} />
        <Route path="login" element={<Login />} />
        <Route path="pricing" element={<Pricing />} />
        <Route path="app" element={<AppLayout />}>
          <Route path="cities" element={<CityList />} />
          <Route path="countries" element={<CountryList />} />
          <Route path="form" element={<Form />} />
        </Route>
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
