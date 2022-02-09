import data from './data/data';
import SingleContent from './component/singleContent';
import './App.css';
import {useState} from 'react'

function App(){
  const [content, setContent] = useState(data) //content become to array //it's not neccessary to use.
  return (
    <main>
      <div className='container'>
        <h1>Web Develop Tools of 2021</h1>
        <section>
          {content.map((element)=>{
            return <SingleContent {...element} key={element.id}/>
          })}
            
        </section>
        

      </div>
    </main>
  );
}

export default App;
