import React from 'react'

const Movielist = (props) => {
	let string = 'https://image.tmdb.org/t/p/w185_and_h278_bestv2' + props.poster_path
	return (
		<section>
			<section class="outline">
				<section class="over">
					<h1>{props.name}</h1>
				</section>
				<section class="under">
					<p>{props.overview}</p>
					<img src={string} id="pic" />
				</section>
			</section>
		</section>
	)
}

export default Movielist
