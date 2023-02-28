import './App.css';
import { useState } from 'react';

function App() {

  const data = [
    {
      name: "Search engines",
      url:["https://www.google.com/", "https://www.bing.com/"]

    }
  ]

  const[lists, setLists] = useState(data)


  const openTabs = (url)=>{
    for(const link of url ){
      window.open(link, "blank")
    }
  }


  return (
    <div className="App">
      Coose your app 
      <div className='list'>
        {lists && lists.map((item)=>{
          return(
            <button className='buttons' onClick={()=> {openTabs(item.url)}}>{item.name}</button>

          )
        })}
      </div>
    </div>
  );
}

export default App;
