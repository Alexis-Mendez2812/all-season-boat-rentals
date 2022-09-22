import React from "react";
import "./styles.css";
import video from "./videoBrujula.mp4";
import ReactPlayer from "react-player";
export default function GameDetail() {
	return (
		<div className="container">
            <div className="header" >

			<div className="video">
				<ReactPlayer
					url={video}
					playing
                    volume={0}
					loop
					width="100%"
					height="auto"
                    
                    />
			</div>
            
			<div>
			<h2>HAVE ANY QUESTIONS?</h2>
			<p>(331)-304-8779</p>
			</div>
			<div>
			<h1>Frequently Asked Questions</h1>
			</div>
                    </div>

				<div className="answer" >
			<div className="answerText" >
					<h3>How can I make a reservation?</h3>
					<p>
						You can make a reservation by using our easy-book system on each
						boat listing. Each boat will require a deposit between $500 and
						$1000 dollars.
					</p>
				</div>
				<div className="triangulo"> </div>
			</div>

				<div className="answer" >
			<div className="answerText" >
					<h3>How many passengers can I bring on board?</h3>
					<p>
						The boat charterer can only bring 12 passengers aboard for a total
						of 13 people.
					</p>
				</div>
				<div className="triangulo"> </div>
			</div>

				<div className="answer" >
			<div className="answerText" >
					<h3>Are animals allowed on board?</h3>
					<p>As a general rule, pets are not allowed.</p>
				</div>
					<div className="triangulo"> </div>
			</div>

			<div className="answer" >

			<div className="answerText" >
			<h3>What is the pick up time?</h3>
			<p>
				Your day begins at the time stated in the signed charter agreement. We
				recommend arriving 30 minutes before boarding time to take full
				advantage of every minute of your voyage.
			</p>
			</div>
				<div className="triangulo"> </div>
            </div>
			<div className="answer" >
				<div className="answerText" >
					<h3>Can I bring alcohol and food?</h3>
					<p>You can bring your own food and alcohol.</p>
				</div>
				<div className="triangulo"> </div>
			</div>
			<div className="answer" >
				<div className="answerText" >
					<h3>What is the due date for the remaining balance of my charter?</h3>
					<p>You must pay in full 96 hours before boarding.</p>
				</div>
				<div className="triangulo"> </div>
			</div>
		</div>
	);
}
