import React from "react";

const LiveIndicator = () => {
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			width='20'
			height='20'
			viewBox='0 0 20 20'
			fill='none'
			className='live-indicator'>
			<circle
				cx='10'
				cy='10'
				r='7.5'
				fill='white'
				fillOpacity='0.83'
				className='outer-circle'
			/>
			<circle
				cx='10'
				cy='10'
				r='5'
				fill='#D91538'
				className='inner-circle'
			/>
			<style jsx>{`
				@keyframes pulse {
					0% {
						transform: scale(1);
						opacity: 1;
					}
					50% {
						transform: scale(1.1);
						opacity: 0.7;
					}
					100% {
						transform: scale(1);
						opacity: 1;
					}
				}
				
			`}</style>
		</svg>
	);
};

export default LiveIndicator;
