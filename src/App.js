import './App.css';
import Header from './components/header/header';
import Footer from './components/footer/footer';
import ContentCard from './components/main/ContentCard';

function App() {
  return (
    <div className='App'>
      <Header/>
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