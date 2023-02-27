import { useEffect } from "react";
import { useParams } from "react-router-dom";
function Detail() {
  const { id } = useParams();
  // app.js에서 Route에 path="/movie/:id" 부분에서
  // :id 부분이 내가 받아오는 parameter key 이름이 된다
  // object가 아닌 값만 받아오려면 구조분해할당으로
  // 변수에 { key이름 }을 불러오면 된다

  // 영화상세정보 불러오기
  const getMovie = async () => {
    const json = await (
      await fetch(
        `https://api.themoviedb.org/3/movie/${id}?api_key=5b3941fb446f19f168792e4688ac8ec4&language=ko-KR`
      )
    ).json();
    console.log(json);
  };
  useEffect(() => {
    getMovie();
  }, []);
  return <h1>Detail</h1>;
}
export default Detail;
