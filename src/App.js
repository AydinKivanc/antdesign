import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

import SharedLayout from "./pages/SharedLayout";
import Home from "./pages/Home";
import ButtonSample from "./pages/ButtonSample";
import FormSample from "./pages/FormSample";
import FormAlertsMessages from "./pages/FormAlertsMessages";
import InputSample from "./pages/InputSample";
import SelectSample from "./pages/SelectSample";
import DateRangeTimePickers from "./pages/DateRangeTimePickers";
import Spins from "./pages/Spins";
import TableSample from "./pages/TableSample";
import TableSortFilterPagination from "./pages/TableSortFilterPagination";
import TableRowSelectOptions from "./pages/TableRowSelectOptions";
import Icons from "./pages/Icons";
import AddDeleteEditDisplayRecords from "./pages/AddDeleteEditDisplayRecords";
import SearchFilter from "./pages/SearchFilter";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="/buttonsample" element={<ButtonSample />} />
          <Route path="/formsample" element={<FormSample />} />
          <Route path="/formalertsmessages" element={<FormAlertsMessages />} />
          <Route path="/inputsample" element={<InputSample />} />
          <Route path="/selectsample" element={<SelectSample />} />
          <Route path="/tablesample" element={<TableSample />} />
          <Route path="/spins" element={<Spins />} />
          <Route
            path="/tablesortgilterpagination"
            element={<TableSortFilterPagination />}
          />

          <Route
            path="/daterangetimepickers"
            element={<DateRangeTimePickers />}
          />
          <Route
            path="/tablesortfilterpagination"
            element={<TableSortFilterPagination />}
          />
          <Route
            path="/tablerowselectoptions"
            element={<TableRowSelectOptions />}
          />
          <Route
            path="/adddeleteadit"
            element={<AddDeleteEditDisplayRecords />}
          />
          <Route path="/icons" element={<Icons />} />
          <Route path="/searchfilter" element={<SearchFilter />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
