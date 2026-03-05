import React from 'react';
import Navbar from './components/Navbar';
import Home from './pages/Home';

const App = () => {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 dark:bg-slate-950 dark:text-slate-50 font-sans selection:bg-purple-500/30 transition-colors duration-500">
      <Navbar />
      <Home />
    </div>
  );
};

export default App;