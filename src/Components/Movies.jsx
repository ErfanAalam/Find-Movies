import React, { useState, useEffect } from 'react'

const Movies = ({ query }) => {

  const [Data, setData] = useState([])
  const [movieId, setMovieId] = useState(null)

  const [videoData, setVideoData] = useState([])

  // const imgsrc = 'emptyimage.jpg'
  const imgsrc = 'emptyimage.jpg'
  const href = "https://www.youtube.com/watch?v="


  useEffect(() => {
    const url = `https://api.themoviedb.org/3/search/movie?query=${query}&api_key=d2c3e4f129f33f3a39481dee98fbdd6e`
    fetch(url).then(response => response.json())
      .then(data => {
        setData(data.results)
        if (data.results.length > 0) {
          setMovieId(data.results[0].id)
        }
      })
  }, [query])

  useEffect(() => {
    if (movieId) {
      const videourl = `https://api.themoviedb.org/3/movie/${movieId}/videos?api_key=d2c3e4f129f33f3a39481dee98fbdd6e&append_to_response=videos`
      fetch(videourl).then(response => response.json())
        .then(videos => {
          setVideoData(videos)
        })
    }
  }, [movieId])



  return (
    <>
      <div className="wrapper">
        {
          Data.length == 0 ?
          <h1>No movie found</h1>
          :
          Data.map((result) => {
            return (
                <div className="box" key={result.id}>
                  <img src={result.poster_path ? "https://image.tmdb.org/t/p/original" + result.poster_path : imgsrc} alt="" />
                  <h2 key={result.id}>{result.title}</h2>
                  {videoData.results && videoData.results.length > 0 && (
                    <a href={href + videoData.results[0].key}>Watch Trial</a>
                  )}
                </div>
            )
          })
        }
      </div>
    </>
  )
}

export default Movies
