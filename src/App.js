import { useEffect, useState } from 'react';
import './App.css';
import Header from './components/header/Header';
import Loading from './components/Loading';
import News from './components/News';
const url =
  "https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=60e6b87f97004b68b7be74f502cafee8";
  function App() {
  const [loading,setLoading]= useState(true)

  const [news, setNews] = useState([])

  const removeNews =(publishedAt)=>{
    const newNewsArr = news.filter((newNews) => newNews.publishedAt !== publishedAt);
    setNews(newNewsArr);
  }

 

  const fetchNews = async()=>{
    setLoading(true)
    try {
      const responce = await fetch(url)
      const data = await responce.json()
      setLoading(false)
      setNews(data.articles)
    } catch (error) {
      setLoading(false)
      console.log(error)
    }
  }

  useEffect(()=>{
      fetchNews()
  },[])


  if(loading){
   
    return <main>
      <Loading />
    </main>
  }
  if(news.length === 0){
    return (
      <main>
        <h2>No News To Show</h2>
        <h3>please Refresh</h3>
        <button onClick={fetchNews}>Refresh</button>
      </main>
    );
  }

  return (
    <>
    <Header />
    <main>
      <News news={news} removeNews={removeNews} />
    </main>
    </>
  );
}

export default App;
