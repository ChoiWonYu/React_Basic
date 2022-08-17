import {Route,Link,Routes} from 'react-router-dom';
import Home from './Home';
import About from './About';
import Profiles from './Profiles';
import NavigateSample from './NavigateSample';
function App() {
  return (    
      <div>
        <ul>
          <li>
            <Link to='/'>홈</Link>
          </li>
          <li>
            <Link to='/about'>소개</Link>
          </li>
          <li>
            <Link to='/profile'>프로필</Link>
          </li>
          <li>
            <Link to='/navigate'>Navigate 예제</Link>
          </li>
        </ul>
        <hr/>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/profile/*" element={<Profiles/>}/>
          <Route path='/navigate' element={<NavigateSample/>}/>
        </Routes>
      </div>
    
  );
}

export default App;
