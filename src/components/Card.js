import React from 'react';
import './Card.css';

const Card = ({name,email,id,username}) => {
	return (
		<div className = 'tc bg-light-green dib br3 pa2 ma2 grow bw2 shadow-5'>
			<img alt='robots' src={`https://robohash.org/${id}?100x100`} />
			<div>
				<h2>{name} : {username}</h2>
				<p>{email}</p>
			</div>
		</div>
	);
}

export default Card;