//import logo from './logo.svg';
import './App.css';
import Home from './Home';
import Industries from './Industries';
import Companies from './Companies';
import Career from './Career';
import Contact from './Contact';
import Search from './Search';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';


function App() {
  return (
    <>
      <div className='main-div'>
        <Router>

          <div className='banner'>

            <img src="/images/logo.jpg.png" alt="lodding" className="logo" />
            <nav>
              <ul >
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/Industries">OUR INDUSTRIES<i class="fa-solid fa-caret-down"></i>

                  </Link>
                </li>
                <li>
                  <Link to="/Companies">OUR COMPANIES<i class="fa-solid fa-caret-down"></i></Link>
                </li>
                <li>
                  <Link to="/Career">Career</Link>
                </li>
                <li>
                  <Link to="/Contact">Contact</Link>
                </li>
                <li>
                  <Link to="/contact"><i class="fa-thin fa-magnifying-glass"></i></Link>

                </li>

              </ul>

              <Routes>
                <Route path='/' component={Home}></Route>
                <Route path='/Industries' component={Industries}></Route>
                <Route path='/Companies' component={Companies}></Route>
                <Route path='/Career' component={Career}></Route>
                <Route path='/Contact' component={Contact}></Route>
                <Route path='/Search' component={Search}></Route>
              </Routes>


            </nav>

          </div>

        </Router>
        <div className='media-tag'>
          <ul >
            <li><a href='#'><i class="fa-brands fa-twitter"></i></a></li>
            <li><a href='#'><i class="fa-brands fa-instagram"></i></a></li>
            <li><a href='#'><i class="fa-brands fa-facebook"></i></a></li>


          </ul>
        </div>
        <img src="/images/ramaera.png" alt="lodding" className='image-name' />
        <p className='paragraph1'>An incredible multi-industrial approach oriented towards financial independence, customer focus and serving the best quality to the people.
        </p>

        <a hreaf="#" className='explore' onClick={""}>explore more</a>
      </div>
      <div className='footer-tag'>


        <div className='polygon-tag'>
          <img src="/images/polygon.png" height="350px" width="auto" />
          <div className='paragraph2'> <h1>THERAMAERA <span>EXPANSION</span></h1>

            <p >We are aiming to be a part of the major industrialisation drive in India and embarking our presence in every significant industrial domain including IT.
            </p>
          </div>

        </div>
      </div>
      <div className='tech-tag'>
        <img src="/images/tech.png" height="350px" width="auto" />
        <div className='paragraph2'> <h1>Unleasing the stran <span>EXPANSION</span></h1>

          <p >We believe in innovation and excellence hence , our approach in the field of technology is focused to relish incredible customer experience and stabilising business models for tomorrow.

          </p>
        </div>


      </div >



      <div className='polygon-tag'>
        <img src="/images/box.png" height="350px" width="auto" />
        <div className='paragraph2'> <h1>THERAMAERA <span>EXPANSION</span></h1>

          <p >We are aiming to be a part of the major industrialisation drive in India and embarking our presence in every significant industrial domain including IT.
          </p>
        </div>


      </div>
      <div className='tech-tag'>
        <div className='paragraph2'> <h1>THERAMAERA <span>EXPANSION</span></h1>

          <p >We are aiming to be a part of the major industrialisation drive in India and embarking our presence in every significant industrial domain including IT.
          </p>
        </div>
        <img src="/images/tiphin.png" height="350px" width="auto" />

      </div>
      <div className='polygon-tag'>
        <img src="/images/vegitable.png" height="350px" width="auto" />
        <div className='paragraph2'> <h1>THERAMAERA <span>EXPANSION</span></h1>

          <p >We are aiming to be a part of the major industrialisation drive in India and embarking our presence in every significant industrial domain including IT.
          </p>
        </div>


      </div>
      <div className='tech-tag'>
        <div className='paragraph2'> <h1>THERAMAERA <span>EXPANSION</span></h1>

          <p >We are aiming to be a part of the major industrialisation drive in India and embarking our presence in every significant industrial domain including IT.
          </p>
        </div>
        <img src="/images/network.png" height="350px" width="auto" />

      </div>
      <div className='tech-tag'>
        <img src="/images/polygon.png" height="350px" width="auto " />
      </div>


    </>)
}
export default App;
