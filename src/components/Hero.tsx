import React from "react";
import Image from "next/image";
import { Send, Twitter } from "lucide-react";
import img1 from "../assets/60c3cea8-6e7d-4720-b728-ef51716b992c_6854 2.png";
import artficurated from "../assets/image 25 (1).png";
import artfiShare from "../assets/image 31 (1).png";
import token from "../assets/image.png";
import marketPlace from "../assets/image 42.png";
import foundation from "../assets/image 44.png";
import artinals from "../assets/Artinals.svg";
import connect from "../assets/image 39.png";
import logo from "../assets/ArtfiLogo.svg";
import artinallogo from "../assets/ArtinalsLogo.svg";
import sharelogo from "../assets/Artfishare.svg";
import curatedlogo from "../assets/Curated.svg";
import marketplacelogo from "../assets/Artfimarketplace.svg";
import connectLogo from "../assets/ArtfiConnect.svg";
import foundationLogo from "../assets/ArtfiFoundation.svg";
import tokenLogo from "../assets/Artfi Logo (2).svg";
import discord from '../assets/discord.svg'
import telegram from "../assets/telegram.svg";
import twitter from "../assets/twitter.svg";

const EcosystemCard = ({
	title,
	description,
	imageSrc,
	logo,
	logodesc,
	isLastCard,
}: any) => (
	<div className='relative bg-black md:rounded-[20px] rounded-[12px] overflow-hidden shadow-md lg:w-[325px] md:w-[250px]  lg:h-[266px] md:h-[177px] w-[250px] h-[120px] mx-auto'>
		<Image
			src={imageSrc}
			alt={title}
			layout='fill'
			objectFit='cover'
			className='z-0'
		/>
		<div className='relative z-10 md:p-6 p-4 h-full flex flex-col justify-en'>
			{isLastCard ? (
				<>
					<div className='flex justify-between w-full items-center mb-2'>
						<Image src={logo} alt='logo' className='' />
						<span className='text-white text-sm font-bold'>
							USD debit
						</span>
					</div>
					<h3 className='text-white text-[30px] font-bold mb-1 mt-12 font-irish-grover'>
						THE ART CARD
					</h3>
					<p className='text-white text-[16px] font-agrandir'>
						{description}
					</p>
				</>
			) : (
				<>
					{logo && (
						<div className='flex items-baseline gap-1'>
							<Image src={logo} alt='logo'  className="w-[40%] md:w-[50%]  lg:w-auto"/>
							<h1 className='font-semibold text-white lg:text-[32px] '>
								{logodesc}
							</h1>
						</div>
					)}
					<p className='text-white lg:text-[16px] text-[10px] font-agrandir pr-12 my-auto'>
						{description}
					</p>
				</>
			)}
		</div>
		<div className='absolute bottom-2 right-2 bg-whit rounded-full p-2 shadow-md'>
			<svg
				className='bg-white rounded-full h-12 w-12 p-3'
				xmlns='http://www.w3.org/2000/svg'
				viewBox='0 0 22 16 '
				fill='none'>
				<path
					d='M1 7C0.447715 7 0 7.44772 0 8C0 8.55228 0.447715 9 1 9V7ZM21.7071 8.70711C22.0976 8.31658 22.0976 7.68342 21.7071 7.29289L15.3431 0.928932C14.9526 0.538408 14.3195 0.538408 13.9289 0.928932C13.5384 1.31946 13.5384 1.95262 13.9289 2.34315L19.5858 8L13.9289 13.6569C13.5384 14.0474 13.5384 14.6805 13.9289 15.0711C14.3195 15.4616 14.9526 15.4616 15.3431 15.0711L21.7071 8.70711ZM1 9H21V7H1V9Z'
					fill='black'
				/>
			</svg>
		</div>
	</div>
);

const EcosystemMap = () => {
	const cards = [
		{
			title: "Artinals",
			description: "Dynamic protocol built on Sui Network",
			imageSrc: artinals,
			logo: artinallogo,
		},
		{
			title: "Artfi Share",
			description: "Own shares in Masterpieces on the Blockchain!",
			imageSrc: artfiShare,
			logo: sharelogo,
		},
		{
			title: "Curated",
			description: "Modern & Contemporary Fine Art Auction!",
			imageSrc: artficurated,
			logo: curatedlogo,
		},
		{
			title: "Marketplace",
			description: "Trade your art share exclusively on Artfi Market!",
			imageSrc: marketPlace,
			logo: marketplacelogo,
		},
		{
			title: "Artfi connect",
			description: "Connecting the Art-world through Blockchain!",
			imageSrc: connect,
			logo: connectLogo,
		},
		{
			title: "Artfi Foundation",
			description: "Custodian for Artfi Share!",
			imageSrc: foundation,
			logo: foundationLogo,
		},
		{
			title: "Artfi Token",
			logodesc: "Token",
			description: "",
			imageSrc: token,
			logo: tokenLogo,
		},
		{
			title: "THE ART CARD",
			description: "by Mobilum Pay",
			imageSrc: img1,
			logo: tokenLogo,
		},
	];

	return (
		<>
			<div className='md:flex lg:flex-col  absolute lg:right-16 lg:top-12 md:top-16 md:right-10 right-12 top-[90%] hidden'>
				<button className='bg-black text-white rounded-full md:w-[25%] lg:w-full'>
					<Image src={discord} alt='Discord' />
				</button>
				<button className='bg-black text-white rounded-full lg:my-2 md:w-[25%] lg:w-full mx-2 lg:mx-0'>
					<Image src={telegram} alt='Telgram' />
				</button>
				<button className='bg-black text-white rounded-full md:w-[25%] lg:w-full'>
					<Image src={twitter} alt='twitter' />
				</button>
			</div>

			<div className='bg-white lg:p-8 md:p-6 p-4  rounded-xl w-full mx-auto'>
				<div className='text-center'>
					<Image src={logo} alt='logo' className='mx-auto w-[30%] md:w-[20%] lg:w-[15%]'  />
					<h2 className='lg:text-[70px] md:text-[50px] text-[28px] font-extrabold font-agrandir text-[#0163F5]'>
						ECOSYSTEM{" "}
						<span className='lg:text-[62px] md:text-[40px] text-[24px] leading-[250%] font-light font-agrandir text-black'>
							Map
						</span>
					</h2>
				</div>

				<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2 md:w-[80%] lg:w-full md:mx-auto'>
					{cards.map((card, index) => (
						<EcosystemCard
							key={card.title}
							{...card}
							isLastCard={index === cards.length - 1}
						/>
					))}
				</div>
			</div>
		</>
	);
};

export default EcosystemMap;
// import React from "react";
// import Image from "next/image";
// import { Send, Twitter } from "lucide-react";
// import img1 from "../assets/60c3cea8-6e7d-4720-b728-ef51716b992c_6854 2.png";
// // import card from "../assets/image 19.png";
// import artficurated from "../assets/image 25 (1).png";
// import artfiShare from "../assets/image 31 (1).png";
// import token from "../assets/image.png";
// import marketPlace from "../assets/image 42.png";
// import foundation from "../assets/image 44.png";
// import artinals from "../assets/Artinals.svg";
// import connect from "../assets/image 39.png";
// import logo from "../assets/ArtfiLogo.svg";
// import artinallogo from "../assets/ArtinalsLogo.svg";
// import sharelogo from "../assets/Artfishare.svg";
// import curatedlogo from "../assets/Curated.svg";
// import marketplacelogo from "../assets/Artfimarketplace.svg";
// import connectLogo from "../assets/ArtfiConnect.svg";
// import foundationLogo from "../assets/ArtfiFoundation.svg";
// import tokenLogo from "../assets/Artfi Logo (2).svg";

// const EcosystemCard = ({
// 	title,
// 	description,
// 	imageSrc,
// 	logo,
// 	logodesc,
// }: any) => (
// 	<div className='relative bg-black rounded-[20px] overflow-hidden shadow-md lg:w-[325px] lg:h-[266px]'>
// 		<Image
// 			src={imageSrc}
// 			alt={title}
// 			layout='fill'
// 			objectFit='cover'
// 			className='z-0'
// 		/>
// 		<div className='relative z-10 p-6  h-full flex flex-col justify-en'>
// 			{logo && (
// 				<div className=' flex items-baseline gap-1'>
// 					<Image src={logo} alt='logo' />
// 					<h1 className="font-semibol text-white text-[32px]">{logodesc} </h1>
// 				</div>
// 			)}
// 			<p className='text-white text-[16px] font-agrandir pr-12 my-auto '>{description}</p>
// 		</div>
// 		<div className='absolute bottom-2 right-2 bg-whit rounded-full p-2 shadow-md'>
// 			<svg
// 				xmlns='http://www.w3.org/2000/svg'
// 				className='h-8 w-8 bg-white rounded-full p-1'
// 				viewBox='0 0 20 20'
// 				fill='black'>
// 				<path
// 					fillRule='evenodd'
// 					d='M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z'
// 					clipRule='evenodd'
// 				/>
// 			</svg>
// 		</div>
// 	</div>
// );

// const EcosystemMap = () => {
// 	return (
// 		<div className='bg-white p-8 rounded-xl w-full  mx-auto  '>
// 			<div className='text-center '>
// 				<Image src={logo} alt='logo' className='mx-auto' />
// 				<h2 className='lg:text-[70px] md:text-[50px] text-[28px] font-extrabold font-agrandir text-[#0163F5]  '>
// 					ECOSYSTEM{" "}
// 					<span className='lg:text-[62px] md:text-[40px] text-[24px] leading-[250%] font-light font-agrandir text-black'>
// 						Map
// 					</span>
// 				</h2>
// 			</div>

// 			<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2 '>
// 				<EcosystemCard
// 					title='Artinals'
// 					description='Dynamic protocol built on Sui Network'
// 					imageSrc={artinals}
// 					logo={artinallogo}
// 				/>
// 				<EcosystemCard
// 					title='Artfi Share'
// 					description='Own shares in Masterpieces on the Blockchain!'
// 					imageSrc={artfiShare}
// 					logo={sharelogo}
// 				/>
// 				<EcosystemCard
// 					title='Curated'
// 					description='Modern & Contemporary Fine Art Auction!'
// 					imageSrc={artficurated}
// 					logo={curatedlogo}
// 				/>
// 				<EcosystemCard
// 					title='Marketplace'
// 					description='Trade your art share exclusively on Artfi Market!'
// 					imageSrc={marketPlace}
// 					logo={marketplacelogo}
// 				/>
// 				<EcosystemCard
// 					title='Artfi connect'
// 					description='Connecting the Art-world through Blockchain!'
// 					imageSrc={connect}
// 					logo={connectLogo}
// 				/>
// 				<EcosystemCard
// 					title='Artfi Foundation'
// 					description='Custodian for Artfi Share!'
// 					imageSrc={foundation}
// 					logo={foundationLogo}
// 				/>
// 				<EcosystemCard
// 					title='Artfi Token'
// 					logodesc='Token'
// 					description=''
// 					imageSrc={token}
// 					logo={tokenLogo}
// 				/>
// 				<EcosystemCard
// 					title='THE ART CARD'
// 					description='by Mobilum Pay'
// 					imageSrc={img1}
// 					logo={tokenLogo}
// 				/>
// 			</div>

// <div className='flex justify-end space-x-4 mt-'>
// 	<button className='p-2 bg-black text-white rounded-full'>
// 	</button>
// 	<button className='p-2 bg-black text-white rounded-full'>
// 		<Send size={24} />
// 	</button>
// 	<button className='p-2 bg-black text-white rounded-full'>
// 		<Twitter size={24} />
// 	</button>
// </div>
// 		</div>
// 	);
// };

// export default EcosystemMap;
