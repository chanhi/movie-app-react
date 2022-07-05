import React, { useEffect, useState } from "react";
import Movie from "../components/Movie";
//import PropTypes from "prop-types"

function Home() {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const getMovies = async () => {
    const json = await (
      await fetch(
        `https://yts.mx/api/v2/list_movies.json?minimum_rating=8.5&sort_by=year` //평점 8.5이상, 연도순 정렬
      )
    ).json();
    setMovies(json.data.movies);
    setLoading(false);
  };
  useEffect(() => {
    getMovies();
  }, []);
  return (
    <div>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <div>
          {movies.map((movie) => (
            <Movie
              coverImg={movie.medium_cover_image}
              title={movie.title}
              summary={movie.summary}
              genres={movie.genres}
            />
          ))}
        </div>
      )}
    </div>
  );
  //map(()=> ) map을 실행시킨 리스트의 모든 값에 대해서 각각 지정한 함수를 실행해준다
  //index는 react에서 필요로 함 -> 경고문구 뜸
}

export default Home;