import Header from "./Header";
import './styles/App.css'

function App() {
  
  return (
    <div className="box">
        <Header />
        <div className="main-box">
            <div className="main-part-box container1536">
              <div className="navigation">Navigation</div>
              <div className="main-part">Main-part</div>
            </div>
        </div>
        <div className="footer">
            <div className="footer-box container1536">
              Footer
            </div>
        </div>
    </div>
  )
}

export default App;
