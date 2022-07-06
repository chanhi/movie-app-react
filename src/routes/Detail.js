import { useParams } from "react-router-dom";
import React, { useCallback, useEffect, useState } from "react";

function Detail() {
  const [loading, setLoading] = useState(true);
  const [detail, setDetail] = useState([]);
  const { id } = useParams();
  const getMovie = useCallback(async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();
    setDetail(json.data.movie);
    setLoading(false);
    console.log(json);
  }, [id]);
  useEffect(() => {
    getMovie();
  }, [getMovie]);
  //React Hook useEffect has a missing dependency: 'xxx'. Either include it or remove the dependency array. (react-hooks/exhaustive-deps)
  //해당 오류: useEffect내에 사용하고 있는 state를 배열안에 추가시키라는 의미
  //useCallback을 사용하는 이유는 해당 함수가 페이지가 리랜더링 될때 id가 변경될 때만 getMoive가 실행이 된다.
  return (
    <div>
      {loading ? (
        <h1>Loading</h1>
      ) : (
        <div>
          <img src={detail.medium_cover_image} alt="" />
          <h1>{detail.title}</h1>
          <h3>{detail.description_full}</h3>
          <span>{detail.year}</span>
          <hr></hr>
          <span>{detail.rating}</span>
        </div>
      )}
    </div>
  );
}

export default Detail;
