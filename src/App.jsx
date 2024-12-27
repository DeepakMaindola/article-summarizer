import React  from "react";
import {useState} from "react";
import axios from "axios"
function App(){
  const[text , setText] = useState(null)
  const[summary, setSummary] = useState("")
  const handleInput = (e)=>{
    setText(e.target.value)
  }

  const summarize = async ()=> {
    const options = {
      method: 'GET',
      url: 'https://article-extractor-and-summarizer.p.rapidapi.com/summarize',
      params: {
        url: text,
        lang: 'en',
        engine: '2'
      },
      headers: {
        'x-rapidapi-key': '49699fa06cmsh62b5292f53b0fb2p1bc0fcjsn96968760f9ad',
        'x-rapidapi-host': 'article-extractor-and-summarizer.p.rapidapi.com'
      }
    };
    const response = await axios.request(options)
    setSummary(response.data.summary)
  }
  console.log(text)
  return(
    <div className="text-blue-600 text-xl">
      <div className="h-screen w-screen bg-slate-300 flex items-center justify-center flex-col gap-y-10">
        <h1 className = "text-2xl font-bold">Article Summarizer</h1>
        <div className = "flex item-center justify-center gap-x-2"> 
          <input type="text" className ="outline-none border-none rounded-lg px-5" onChange={handleInput} />
          <button className="bg-black text-white px-1.5 rounded-lg" onClick={summarize}>Summarize</button>
        </div>
        <div className = "w-96 h-64 bg-gray-400 overflow-x-hidden text-black">
          {summary}
        </div>
      </div>
    </div>
  )
}

export default App;