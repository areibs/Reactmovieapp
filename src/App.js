import MovieList from "./movie-components/MovieList";
import ReviewForm from "./movie-components/reviewForm"
import StarRating from "./movie-components/StarRating";
import './App.css';


function App() {
  return (
    <div className="App">
      <MovieList/>
      <ReviewForm/>
      <StarRating />
    </div>
  );
}

export default App;
