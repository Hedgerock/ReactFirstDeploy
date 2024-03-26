import './App.css'
import { Header } from './Header';
import { MainPart } from './MainPart';
import { Footer } from './Footer';

export function App() {
  
  return (
    <div className="box">
        <Header />
        <MainPart />
        <Footer />
    </div>
  )
}
