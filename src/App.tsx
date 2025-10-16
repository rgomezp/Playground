import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/Layout';
import Playground from './pages/Playground';
import ButtonDocs from './pages/Button';
import CardDocs from './pages/Card';
import FieldPickerDocs from './pages/FieldPicker';
import SearchBarDocs from './pages/SearchBar';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Playground />} />
          <Route path="playground" element={<Playground />} />
          <Route path="button" element={<ButtonDocs />} />
          <Route path="card" element={<CardDocs />} />
          <Route path="fieldpicker" element={<FieldPickerDocs />} />
          <Route path="searchbar" element={<SearchBarDocs />} />
          <Route path="components" element={<Navigate to="/playground" replace />} />
          <Route path="*" element={<Navigate to="/playground" replace />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App
