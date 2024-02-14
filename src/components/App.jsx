import { CatalogPage } from 'pages/CatalogPage';
import { ClassifiedsPage } from 'pages/ClassifiedsPage';
import { HomePage } from 'pages/HomePage';
import { Route, Routes } from 'react-router-dom';

export const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/catalog" element={<CatalogPage />} />
        <Route path="/favorites" element={<ClassifiedsPage />} />
      </Routes>
    </div>
  );
};
