import React,{useEffect} from 'react'
import Card from "./Card"
import Grid from "@material-ui/core/Grid"
import {useNews} from '../context/NewsProvider'
const NewsListing = () => {
    const {newsData,getNews,loading,error}=useNews()
useEffect(() => {
    getNews();

}, [])
if(!loading)
{
    console.log(newsData)
}
    return (

     
            
            <Grid container alignItems="center" justify="center">
  {
     !loading && newsData?.map(news=>{
          return(<><Grid item xs={6} sm={3} md={12} spacing={5} justify="center" alignItems="center"><Card img={news.urlToImage}  title={news.title}/></Grid></>)
      })
  }
          </Grid>  
     
    )
}

export default NewsListing
