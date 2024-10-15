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
import discord from "../assets/discord.svg";
import telegram from "../assets/telegram.svg";
import twitter from "../assets/twitter.svg";
import share from "../assets/share.svg";
import masterCard from "../assets/masterCard.svg";
const EcosystemCard = ({
	title,
	description,
	imageSrc,
	logo,
	logodesc,
	isLastCard,
}: any) => (
	<div
		className={`relative ${
			title == "Artfi Share" ? "bg-[#D7D0C4]" : "bg-black"
		} md:rounded-[20px] rounded-[12px] overflow-hidden shadow-md lg:w-[100%] 3xl:w-full  md:w-[250px]  lg:h-[30vh] 3xl:h-[30vh] md:h-[177px] w-[250px] h-[120px] mx-auto`}>
		<Image
			src={imageSrc}
			alt={title}
			layout='fill'
			objectFit='cover'
			className={`z-0 ${
				title == "Artfi Share" ? "hidden md:block " : ""
			}`}
		/>
		<div className='relative z-10 md:p-6 p-4 h-full flex flex-col justify-en'>
			{isLastCard ? (
				<>
					<div className='flex justify-between w-full items-center mb-2'>
						<Image src={logo} alt='logo' className='' />

						<div className='flex items-center  justify-between'>
							<svg
								className='lg:w-[70px] md:w-[60px] lg:h-[44px] md:h-[35px] w-[40px] h-[25px]'
								xmlns='http://www.w3.org/2000/svg'
								viewBox='0 0 70 44'
								fill='none'>
								<path
									d='M51.0437 18.9597H54.8736C56.1397 18.9597 57.2581 18.7275 58.2288 18.2633C59.2205 17.7991 60.0435 17.166 60.6976 16.3642C61.3729 15.5623 61.8793 14.6339 62.2169 13.5788C62.5757 12.5237 62.755 11.3948 62.755 10.192C62.755 9.36904 62.6601 8.63049 62.4702 7.97635C62.3013 7.3011 62.0165 6.72081 61.6156 6.23548C61.2146 5.75014 60.6976 5.38087 60.0646 5.12765C59.4527 4.85333 58.7036 4.71617 57.8173 4.71617H54.0823L51.0437 18.9597ZM49.9676 0.538086H58.1338C61.3201 0.538086 63.7151 1.30829 65.3189 2.84869C66.9226 4.368 67.7244 6.5309 67.7244 9.33739C67.7244 11.2998 67.4501 13.1251 66.9015 14.8132C66.3528 16.5013 65.5299 17.9679 64.4326 19.2129C63.3564 20.4368 61.9954 21.3969 60.3495 22.0932C58.7247 22.7896 56.8255 23.1377 54.6521 23.1377H45.2197L49.9676 0.538086Z'
									fill='white'
								/>
								<path
									d='M28.3988 15.6362C28.3566 16.438 28.4515 17.1133 28.6837 17.6619C28.9158 18.1894 29.2534 18.6115 29.6965 18.928C30.1397 19.2445 30.6672 19.4766 31.2791 19.6243C31.8911 19.751 32.5558 19.8143 33.2732 19.8143C33.7797 19.8143 34.2861 19.751 34.7925 19.6243C35.299 19.4977 35.7526 19.3078 36.1536 19.0546C36.5756 18.8014 36.9132 18.4743 37.1664 18.0734C37.4408 17.6725 37.5779 17.1871 37.5779 16.6174C37.5779 16.0688 37.4091 15.6256 37.0715 15.288C36.7339 14.9293 36.2907 14.6233 35.7421 14.3701C35.2146 14.1169 34.6026 13.8953 33.9063 13.7054C33.231 13.5155 32.5452 13.315 31.8489 13.104C31.1314 12.893 30.4351 12.6398 29.7598 12.3443C29.0846 12.0489 28.4726 11.6691 27.924 11.2049C27.3965 10.7406 26.9639 10.1709 26.6263 9.49565C26.3097 8.82041 26.1515 7.99745 26.1515 7.02678C26.1515 5.7607 26.4153 4.68452 26.9428 3.79826C27.4703 2.912 28.1561 2.19455 29.0002 1.64591C29.8442 1.07617 30.7938 0.664695 31.8489 0.411477C32.9251 0.137159 34.0118 0 35.1091 0C36.2696 0 37.3564 0.137159 38.3692 0.411477C39.4032 0.664695 40.3 1.08672 41.0597 1.67756C41.8404 2.2684 42.4524 3.02806 42.8955 3.95652C43.3597 4.86388 43.5918 5.97171 43.5918 7.28H38.8757C38.8968 6.64696 38.8018 6.11942 38.5908 5.69739C38.4009 5.25426 38.116 4.89554 37.7362 4.62122C37.3775 4.3469 36.9449 4.15698 36.4384 4.05148C35.932 3.92487 35.3939 3.86156 34.8242 3.86156C34.36 3.86156 33.8852 3.91432 33.3998 4.01982C32.9356 4.10423 32.5136 4.26249 32.1337 4.49461C31.7539 4.70562 31.4479 4.99049 31.2158 5.34922C30.9837 5.70794 30.8677 6.15107 30.8677 6.67861C30.8677 7.22725 31.0681 7.69148 31.4691 8.0713C31.8911 8.43003 32.387 8.736 32.9567 8.98922C33.5475 9.22133 34.1489 9.41125 34.7609 9.55896C35.3728 9.68556 35.8687 9.79107 36.2485 9.87548C37.1348 10.1076 37.9472 10.3819 38.6857 10.6984C39.4243 10.9939 40.0573 11.3842 40.5849 11.8696C41.1335 12.3549 41.5555 12.9457 41.851 13.6421C42.1464 14.3384 42.2941 15.193 42.2941 16.2059C42.2941 17.5564 42.0092 18.7064 41.4395 19.656C40.8909 20.6056 40.1734 21.3758 39.2871 21.9666C38.422 22.5574 37.4408 22.9795 36.3435 23.2327C35.2462 23.507 34.1595 23.6442 33.0833 23.6442C29.9181 23.6442 27.5547 23.0006 25.9932 21.7134C24.4528 20.4262 23.6826 18.4005 23.6826 15.6362H28.3988Z'
									fill='white'
								/>
								<path
									d='M19.7826 13.6737C19.445 15.2985 19.0124 16.7334 18.4849 17.9784C17.9784 19.2234 17.3032 20.2679 16.4591 21.112C15.6151 21.935 14.5811 22.568 13.3572 23.0111C12.1333 23.4332 10.6457 23.6442 8.89426 23.6442C7.79699 23.6442 6.71026 23.5281 5.63409 23.296C4.57901 23.0639 3.62945 22.6946 2.78539 22.1882C1.96243 21.6606 1.28719 20.9748 0.759652 20.1308C0.253217 19.2656 0 18.2106 0 16.9656C0 16.3958 0.0527536 15.8366 0.158261 15.288C0.263768 14.7183 0.369275 14.1591 0.474783 13.6104L3.22852 0.538086H8.19791L5.44417 13.6104C5.40197 13.8003 5.34922 14.0219 5.28591 14.2751C5.24371 14.5072 5.19096 14.7605 5.12765 15.0348C5.08545 15.3091 5.04325 15.5729 5.00104 15.8261C4.97994 16.0582 4.96939 16.2692 4.96939 16.4591C4.96939 16.7334 5.02214 17.05 5.12765 17.4087C5.25426 17.7674 5.47583 18.105 5.79235 18.4216C6.10887 18.717 6.54145 18.9702 7.09009 19.1812C7.63872 19.3922 8.34562 19.4977 9.21078 19.4977C10.2237 19.4977 11.0466 19.3711 11.6797 19.1179C12.3127 18.8436 12.8191 18.4743 13.199 18.0101C13.5999 17.5248 13.9059 16.9339 14.1169 16.2376C14.349 15.5412 14.56 14.771 14.7499 13.927L17.567 0.538086H22.5363L19.7826 13.6737Z'
									fill='white'
								/>
								<path
									d='M65.8319 31.7715H67.7237L67.1783 34.4132H68.9338L68.627 35.8619H66.8715L65.9682 40.1739C65.9228 40.3671 65.883 40.5489 65.8489 40.7193C65.8148 40.8897 65.7978 41.0261 65.7978 41.1284C65.7978 41.3215 65.8376 41.4806 65.9171 41.6056C66.008 41.7192 66.2012 41.776 66.4966 41.776C66.6443 41.776 66.8034 41.776 66.9738 41.776C67.1556 41.7646 67.3431 41.7362 67.5362 41.6908L67.2124 43.1224C66.9624 43.1793 66.6954 43.2247 66.4114 43.2588C66.1273 43.2929 65.8603 43.3099 65.6103 43.3099C65.2581 43.3099 64.9684 43.2645 64.7411 43.1736C64.5139 43.0827 64.3321 42.9634 64.1957 42.8157C64.0707 42.6566 63.9798 42.4805 63.923 42.2873C63.8776 42.0828 63.8548 41.8783 63.8548 41.6737C63.8548 41.5033 63.8662 41.3158 63.8889 41.1113C63.923 40.9068 63.9514 40.7648 63.9741 40.6852L64.9797 35.8619H63.4458L63.7526 34.4132H65.2865L65.8319 31.7715Z'
									fill='white'
								/>
								<path
									d='M60.6469 31.0557H62.5729L62.1979 32.8964H60.272L60.6469 31.0557ZM59.9482 34.4132H61.8911L60.0675 43.2247H58.1245L59.9482 34.4132Z'
									fill='white'
								/>
								<path
									d='M49.5459 31.0557H51.4888L50.5855 35.4188L50.6196 35.4529C51.2786 34.6007 52.1706 34.1746 53.2954 34.1746C53.8181 34.1746 54.284 34.2655 54.693 34.4473C55.1134 34.6291 55.4656 34.8848 55.7497 35.2143C56.0338 35.5324 56.2496 35.9131 56.3974 36.3562C56.5451 36.7993 56.6189 37.2822 56.6189 37.8049C56.6189 38.498 56.5223 39.1854 56.3292 39.8671C56.136 40.5375 55.8463 41.1397 55.46 41.6738C55.0736 42.2078 54.5907 42.6396 54.0113 42.9691C53.4318 43.2986 52.7614 43.4633 52.0001 43.4633C51.3184 43.4633 50.7332 43.3383 50.2447 43.0884C49.7674 42.8384 49.3811 42.3896 49.0857 41.7419H49.0516L48.796 43.2247H47.0234L49.5459 31.0557ZM52.6137 35.7085C52.1251 35.7085 51.699 35.8335 51.3354 36.0835C50.9718 36.3335 50.6651 36.6573 50.4151 37.055C50.1765 37.4413 49.9947 37.8731 49.8697 38.3503C49.7561 38.8161 49.6993 39.2706 49.6993 39.7138C49.6993 40.3955 49.864 40.9352 50.1935 41.3329C50.523 41.7306 51.0457 41.9294 51.7615 41.9294C52.2501 41.9294 52.6762 41.8044 53.0398 41.5544C53.4034 41.3045 53.7045 40.9863 53.9431 40.6C54.1931 40.2137 54.3749 39.7876 54.4885 39.3218C54.6135 38.8445 54.676 38.3844 54.676 37.9412C54.676 37.2595 54.5112 36.7198 54.1817 36.3221C53.8522 35.9131 53.3295 35.7085 52.6137 35.7085Z'
									fill='white'
								/>
								<path
									d='M43.9276 38.0434C43.939 37.9866 43.9447 37.9412 43.9447 37.9071C43.9447 37.8616 43.9447 37.8162 43.9447 37.7707V37.498C43.9447 36.9754 43.7799 36.5493 43.4504 36.2198C43.1209 35.8789 42.6664 35.7085 42.0869 35.7085C41.3597 35.7085 40.7803 35.93 40.3485 36.3732C39.9167 36.8049 39.6043 37.3617 39.4111 38.0434H43.9276ZM45.3422 40.4977C45.0355 41.5317 44.5185 42.2873 43.7913 42.7645C43.0641 43.2303 42.1665 43.4633 41.0984 43.4633C40.5417 43.4633 40.0247 43.378 39.5475 43.2076C39.0816 43.0258 38.6782 42.7702 38.3374 42.4406C37.9965 42.0998 37.7295 41.6964 37.5363 41.2306C37.3432 40.7533 37.2466 40.2136 37.2466 39.6114C37.2466 38.9297 37.3545 38.265 37.5704 37.6173C37.7863 36.9697 38.0988 36.3902 38.5078 35.8789C38.9282 35.3676 39.4395 34.9586 40.0417 34.6518C40.6553 34.3336 41.3541 34.1746 42.1381 34.1746C42.9221 34.1746 43.5584 34.3052 44.0469 34.5666C44.5355 34.8279 44.9162 35.1574 45.1888 35.5551C45.4615 35.9528 45.6433 36.3902 45.7342 36.8674C45.8365 37.3446 45.8876 37.7991 45.8876 38.2309C45.8876 38.4468 45.8763 38.6456 45.8535 38.8274C45.8308 39.0092 45.8081 39.174 45.7854 39.3217H39.2236C39.2123 39.3785 39.2009 39.4296 39.1895 39.4751C39.1895 39.5205 39.1895 39.566 39.1895 39.6114V39.8841C39.1895 40.4977 39.3486 40.992 39.6668 41.3669C39.9963 41.7419 40.536 41.9293 41.2859 41.9293C41.8086 41.9293 42.2574 41.81 42.6323 41.5714C43.0073 41.3328 43.2629 40.9749 43.3993 40.4977H45.3422Z'
									fill='white'
								/>
								<path
									d='M33.9514 43.2247H32.0937L32.3664 42.0317L32.3323 41.9976C31.946 42.5657 31.5199 42.952 31.054 43.1565C30.5882 43.3611 30.0939 43.4633 29.5712 43.4633C29.3213 43.4633 29.0031 43.4292 28.6168 43.3611C28.2305 43.2929 27.8499 43.1395 27.4749 42.9009C27.1113 42.6509 26.7988 42.2873 26.5375 41.8101C26.2762 41.3329 26.1455 40.6795 26.1455 39.8501C26.1455 39.1343 26.2534 38.4412 26.4693 37.7708C26.6852 37.0891 26.9977 36.4812 27.4067 35.9471C27.8158 35.4131 28.3157 34.987 28.9066 34.6689C29.4974 34.3394 30.1734 34.1746 30.9347 34.1746C31.5256 34.1746 32.0596 34.2826 32.5368 34.4984C33.014 34.7143 33.3663 35.0893 33.5935 35.6233H33.6276L34.5991 31.0557H36.542L33.9514 43.2247ZM33.1163 37.8219C33.1163 37.5379 33.0765 37.2652 32.997 37.0038C32.9288 36.7425 32.8152 36.5209 32.6561 36.3391C32.5084 36.146 32.3096 35.9926 32.0596 35.879C31.8096 35.7653 31.5142 35.7085 31.1733 35.7085C30.6279 35.7085 30.1621 35.8335 29.7758 36.0835C29.3894 36.3221 29.0713 36.6402 28.8213 37.0379C28.5714 37.4356 28.3839 37.8844 28.2589 38.3844C28.1453 38.8729 28.0885 39.3615 28.0885 39.8501C28.0885 40.5091 28.2532 41.0204 28.5827 41.384C28.9122 41.7476 29.4179 41.9294 30.0996 41.9294C30.5995 41.9294 31.037 41.7987 31.4119 41.5374C31.7869 41.2761 32.0994 40.9466 32.3493 40.5489C32.6107 40.1398 32.8038 39.6967 32.9288 39.2195C33.0538 38.7309 33.1163 38.2651 33.1163 37.8219Z'
									fill='white'
								/>
							</svg>
							<Image
								src={masterCard}
								alt={logo}
								className='w-[40%] md:hidden'
							/>
						</div>
					</div>
					<h3 className='text-white lg:text-[30px] md:text-[20px] text-[12px] font-bold lg:mt-8 font-irish-grover'>
						THE ART CARD
					</h3>
					<p className='text-white lg:text-[16px] text-[10px] font-light'>
						{description}
					</p>
					<div className='mt-4 hidden md:block 3xl:mt-10 3xl:absolute bottom-8 '>
						<Image src={masterCard} alt={logo} />
					</div>
				</>
			) : (
				<>
					{logo && (
						<div
							className={`flex items-baseline gap-1 ${
								title == "Artfi Share" ? "#D7D0C4" : ""
							}`}>
							<Image
								src={logo}
								alt='logo'
								className={` md:w-[50%]  lg:w-auto ${
									title == "Artfi Token"
										? "w-[30%]"
										: "w-[40%]"
								}  `}
							/>
							<h1 className='font-semibold text-white lg:text-[32px] '>
								{logodesc}
							</h1>
						</div>
					)}
					<p
						className={` lg:text-[16px] text-[10px] font-agrandir pr-12 md:pr-0 mt-6 3xl:text-[22px] 3xl:mt-10  ${
							title == "Artfi Share" ? "text-black" : "text-white"
						}`}>
						{description}
					</p>
				</>
			)}
		</div>
		<div className='absolute bottom-2 right-2 bg-whit rounded-full p-2 shadow-m'>
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
			imageSrc: share,
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
			<div className='lex lex-col  absolute lg:right-16 lg:top-12 md:top-16 md:right-10 right-12 top-[90%] hidden'>
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
					<Image
						src={logo}
						alt='logo'
						className='mx-auto w-[30%] md:w-[20%] lg:w-[15%] '
					/>
					<h2 className='lg:text-[70px] md:text-[50px] text-[28px] font-extrabold font-agrandir text-[#0163F5]'>
						ECOSYSTEM{" "}
						<span className='lg:text-[62px] md:text-[40px] text-[24px] leading-[250%] font-light font-agrandir text-black'>
							Map
						</span>
					</h2>
				</div>

				<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2 md:w-[80%] 3xl:w-[80%] lg:w-full md:mx-auto pb-8 md:pb-0'>
					{cards.map((card, index) => (
						<EcosystemCard
							key={card.title}
							{...card}
							isLastCard={index === cards.length - 1}
						/>
					))}
				</div>

				<div className='hidden mx-auto fle justify-center'>
					<button className='bg-black text-white rounded-full w-[10%] lg:w-full'>
						<a
							href='https://discord.gg/artfiglobal'
							target='_blank'
							rel='noopener noreferrer'>
							<Image src={discord} alt='Discord' />
						</a>
					</button>
					<button className='bg-black text-white rounded-full lg:my-2 w-[10%] lg:w-full mx-4 lg:mx-0'>
						<a
							href='http://'
							target='_blank'
							rel='noopener noreferrer'>
							<Image src={telegram} alt='Telgram' />
						</a>
					</button>
					<button className='bg-black text-white rounded-full w-[10%] lg:w-full'>
						<a
							href='https://x.com/artfiglobal'
							target='_blank'
							rel='noopener noreferrer'>
							<Image src={twitter} alt='twitter' />
						</a>
					</button>
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
