import './App.css';
import JSONDATA from './example.json';
import {useState} from 'react';

function App() {
  const [searchTerm, setSearchTerm] = useState('')
  return (
    <div className="App">
  <header>
    <h1>🏖 해변으로 가요 🏝</h1>
  </header>
  <div className="App">
    <div className="search">
    <input type="text" placeholder="검색어를 입력하세요..." onChange={event => {setSearchTerm(event.target.value)}}/>
    </div>
    <div className="container">
    {JSONDATA.filter((val)=> {
      if (searchTerm == "")
      {return val}
      else if (val.sta_nm.toLowerCase().includes(searchTerm.toLowerCase()) || val.sido_nm.toLowerCase().includes(searchTerm.toLowerCase()))
      {return val}
    }).map((val, key)=> {
      return <div className="beaches" key={key}>
        <img src={val.beach_img}/>
        <h5>{val.sta_nm}</h5>
        </div>
    })}
    </div>
  </div>
  </div>
  );
}




export default App;
