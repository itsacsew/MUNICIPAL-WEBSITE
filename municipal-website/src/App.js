// App.js
import React from 'react';
import NavigationTabs from './components/NavigationTabs';
import Dashboard from './components/Dashboard';
import ContentSection from './components/ContentSection';
import QuickInfo from './components/QuickInfo';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <NavigationTabs />
      <Dashboard />
      <ContentSection />
      <QuickInfo />
      <Footer />
    </div>
  );
}

export default App;