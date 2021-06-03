import React,{useContext,useState,useEffect} from 'react'
import axios from 'axios';
const NewsContext=React.createContext();
export const useNews=()=>{
    return  useContext(NewsContext)
}
export const NewsProvider = ({children}) => {
    const [newsData,setNewsData]=useState("hello this is newsData context")
    const [loading,setLoading]=useState(true);
    const [error,seterror]=useState('')

    const getNews=()=>{
        setLoading(true)
      let apiUrl="http://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=2ae5d92ef04d41469f239acc1b745e0d"
      axios.get(apiUrl)
      .then((res)=>{
         setNewsData(res.data.articles) 
        setLoading(false)})
      .catch(err=>seterror(err))
      }

    // useEffect(()=>{
    //     setLoading(false)
    // },[])
     const value={
        newsData,
        getNews,
        loading,
        error
    }
    return (
        <NewsContext.Provider value={value}>
            {children}
        </NewsContext.Provider>
    )
}

