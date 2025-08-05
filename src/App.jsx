import { useState, useEffect } from 'react';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import About from './components/About/About';
import Experience from './components/Experience/Experience';
import Projects from './components/Projects/Projects';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import './styles/global.css';

function App() {
  // Check if user has a theme preference in localStorage
  const [isDarkTheme, setIsDarkTheme] = useState(() => {
    const savedTheme = localStorage.getItem('theme');
    return savedTheme === 'dark';
  });

  const toggleTheme = () => {
    setIsDarkTheme(prevTheme => !prevTheme);
  };

  // Save theme preference to localStorage when it changes
  useEffect(() => {
    localStorage.setItem('theme', isDarkTheme ? 'dark' : 'light');
  }, [isDarkTheme]);

  return (
    <>
      <Navbar isDarkTheme={isDarkTheme} toggleTheme={toggleTheme} />
      <Profile />
      <About />
      <Experience />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
