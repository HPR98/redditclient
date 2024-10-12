import './App.css';
import Header from './components/header/header';
import Footer from './components/footer/footer';
import ContentCard from './components/main/ContentCard';
import MenuLeft from './components/menu_left/menuLeft';
import MenuRight from './components/menu_right/menuRight';
import { useState } from 'react';

function App() {
  const [leftIsOpen, leftSetOpen] = useState(false) 
  const [rightIsOpen, rightSetOpen] = useState(false)

  const toggleLeftMenu = () => {
    leftSetOpen(!leftIsOpen);
  }
  const toggleRightMenu = () => {
    rightSetOpen(!rightIsOpen)
  }



  return (
    <div className='App'>
      <Header toggleLeftMenu={toggleLeftMenu} toggleRightMenu={toggleRightMenu} leftIsOpen={leftIsOpen} rightIsOpen={rightIsOpen} />
      <MenuLeft isOpen={leftIsOpen} />
      <MenuRight isOpen={rightIsOpen} />
      <main className='main'>
        <ContentCard/>
        <ContentCard/>
        <ContentCard/>
      </main>
      <Footer/>
    </div>
  );
}

export default App;