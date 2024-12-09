import { useEffect, useState } from 'react'
import './App.css'
import searchIcon from './assets/search.svg'
import MovieCard from './components/MovieCard'

function App() {
	const apiKey = ''
	const apiUrl = `/?apikey=${apiKey}`
	// const egUrl = 'https://www.omdbapi.com/?apikey=21a42c27&s=spiderman'

	const [inputText, setInputText] = useState('')
	const [movies, setMovies] = useState([])

	const searchMovies = async (title) => {
		const response = await fetch(`${apiUrl}&s=${title}`)
		const data = await response.json()

		data.Response === 'True' ? setMovies(data.Search) : setMovies([]);
	}
	useEffect(() => {
		// searchMovies('batman')
		console.log(import.meta.env.VITE_API_URL);
		console.log(import.meta.env.VITE_API_KEY);
		
	}, [])

	return (
		<div className='app'>
			<h1>MovieLand</h1>
			<div className='search'>
				<input
					placeholder='Search for movies'
					value={inputText}
					onChange={e => setInputText(e.target.value)}
				/>
				<img
					src={searchIcon}
					alt='search'
					onClick={() => inputText.length > 0 && searchMovies(inputText)}
				/>
			</div>
			{
				movies.length > 0
					? (
						<div className='container'>
							{movies.map((movie, index) => (
								<MovieCard
									key={index}
									movie={movie}
								/>
							))}
						</div>
					)
					: (
						<div className='empty'>
							<h2>No movies found</h2>
						</div>
					)
			}
		</div>
	)
}

export default App
