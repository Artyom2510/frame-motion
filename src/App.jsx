import React, {useState} from 'react';
import Fade from './Fade';
import Slide from './Slide';

export default function App() {

	const [isToggled, setToggled] = useState(false);

	return (
		<>
			<header className="header">Header</header>
			<main className="main">
				<button
					className="btn"
					onClick={() => setToggled(!isToggled)}
				>
					Click me
				</button>
				<Fade isActive={isToggled}>
					<div className="card">
						<h4 className="card__title">Title</h4>
						<p className="card__desc">Something here</p>
					</div>
				</Fade>
				<Slide isActive={isToggled}>
					<div className="card">
						<h4 className="card__title">Title</h4>
						<p className="card__desc">Something here</p>
					</div>
				</Slide>
				<Slide isActive={isToggled} direction={-1}>
					<div className="card">
						<h4 className="card__title">Title</h4>
						<p className="card__desc">Something here</p>
					</div>
				</Slide>
			</main>
		</>
	);
}
