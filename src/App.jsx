import { Routes, Route } from 'react-router-dom';
import Layout from './components/layouts/Layout';
import Home from './pages/Home';
import Analytics from './pages/Analytics';
import Food from './pages/menu/Food';
import Drinks from './pages/menu/Drinks';
import Staff from './pages/Staff'

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/staff" element={<Staff />} />
        <Route path="/analytics" element={<Analytics />} />
        <Route path="/menu/food" element={<Food />} />
        <Route path="/menu/drinks" element={<Drinks />} />
      </Route>
    </Routes>
  );
}