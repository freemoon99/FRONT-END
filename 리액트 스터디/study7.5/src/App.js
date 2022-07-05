import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import About from './pages/about';
import Peoples from './pages/peoples';
import Menubar from './pages/menubar';
import People from './pages/people';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Menubar />}>
        <Route index element={<Home />} />
        <Route path="/about" element={<About />}/>
        <Route path="/people" element={<Peoples />} />
          <Route path="people/:id" element={<People />} />
      </Route>
    </Routes>
  );
};

export default App;