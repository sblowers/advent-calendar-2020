import haveaniceday from "../images/haveaniceday.gif"


const sideBContents = (door_id) => {
	switch(door_id+1) {
		case 1: 
			return(
					<div>
						<h5 style = {{marginTop: "10px"}}>All I Need - Jacob Collier</h5>
						<p>
							{`I found this guy down a YouTube rabbit hole but it was a real treat of a find. 
							He seems like such a wholesome artist with absolute buckets of talent. Unfortunately,
							most of his stuff is more 'big-brain' music and goes over my head. But he has a couple of
							pop tracks that are really well put together!`}
						</p>
						<div style = {{width: "100%", textAlign: "center"}}>
							<iframe 
								title= "All I Need" 
								src="https://www.youtube.com/embed/MJpiozQUJvE" 
								frameBorder="0" 
								allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
								allowFullScreen />
						</div>
						<span><b>BONUS</b></span>
						<p>
							{`For those of you that are musically inclined, he also releases videos going into how he
							produces his songs. It's really interesting to see how detailed orientated he is when mixing songs.
							This is his breakdown for the song above: `}
						</p>
						<div style = {{width: "100%", textAlign: "center"}}>
							<iframe 
								title= "All I Need  Logic Session" 
								src="https://www.youtube.com/embed/sRIjprauHgk" 
								frameBorder="0" 
								allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
								allowFullScreen />
						</div>
						
					</div>
				)
			
			
		case 2: 
			return(
					<div>
						<h5 style = {{marginTop: "10px"}}>BOY - Charlie Puth</h5>
						<p>
							{`If you watched the bonus video yesterday you would have heard this song described
							as a 'mid-tempo banger'. Wbicb is exactly what it is. Also contains a nifty jazz solo 
							in the middle.`}
						</p>
						<div style = {{width: "100%", textAlign: "center"}}>
							<iframe 
								title= "BOY" 
								src="https://www.youtube.com/embed/iILJvqrAQ_w" 
								frameBorder="0" 
								allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
								allowFullScreen />
						</div>
					</div>
				)
			
		case 3: 
			return(
					<div>
						<h5 style = {{marginTop: "10px"}}>Ghost - Mystery Skulls</h5>
						<p>
							{`One of my favourite bands with probably their best track. The video also has a Scooby-Doo style
							story arc which is continued in other songs by the artist. You can find Part 2 `}<a href="https://youtu.be/tUYM5WNdNGc" target="_blank" rel="noreferrer">here</a>{` and Part 3 `}<a href="https://youtu.be/NN_Kbltsqx4" target="_blank" rel="noreferrer">here</a>{`.`}
						</p>
						<div style = {{width: "100%", textAlign: "center"}}>
							<iframe 
								title= "Ghost" 
								src="https://www.youtube.com/embed/YlEb3L1PIco" 
								frameBorder="0" 
								allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
								allowFullScreen />
						</div>
					</div>
				)
			
		case 4: 
			return(
					<div>
						<h5 style = {{marginTop: "10px"}}>Berenstein - The Band CAMINO</h5>
						<p>
							{`While a little less upbeat than the previous tracks, I love this song because it references the `}
							<a href ="https://en.wikipedia.org/wiki/False_memory" target="_blank" rel="noreferrer">Mandela Effect</a>{`. This 
							is the phenomena where many people share the same false memory, named after a widespread incorrect recollection that
							Nelson Mandela died in prison in the 1980s. This song refers to another similar phenomena where many people remember the
							children's books 'The Berenstain Bears' as 'The Berenstein Bears'. No one knows what causes it necessarily but it is a 
							neat thing to write a song about.`}
						</p>
						<div style = {{width: "100%", textAlign: "center"}}>
							<iframe 
								title= "Berenstein" 
								src="https://www.youtube.com/embed/_rksTruhAKk" 
								frameBorder="0" 
								allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
								allowFullScreen />
						</div>
					</div>
				)
			
		case 5: 
			return(
					<div>
						<h5 style = {{marginTop: "10px"}}>Pay No Mind - Madeon (ft. Passion Pit)</h5>
						<p>
							{`One of my all time favourite songs. It's so lively and punchy that it never fails to perk me up. I 
							wouldn't normally recommend electronic intrumental music to people but if I would I would recommend the 
							album Adventure by Madeon. Every track is so well put together, it's hard to believe he was only 21 when he
							released it. Some of the tracks like this one also benefit from guest artists that add vocals and some extra
							flavours into the mix.`}
						</p>
						<div style = {{width: "100%", textAlign: "center"}}>
							<iframe 
								title= "Pay No Mind" 
								src="https://www.youtube.com/embed/BC_Ya4cY8RQ" 
								frameBorder="0" 
								allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
								allowFullScreen />
						</div>
					</div>
				)
			
		case 6: 
			return(
					<div>
						<h5 style = {{marginTop: "10px"}}>Nonsense - Madeon (ft. Mark Foster)</h5>
						<p>
							{`It's a Madeon weekend! I couldn't choose between this song and the previous one to recommend so I 
							chose both. This track features Mark Foster from Foster the People (which is another band you should certainly look up if
							you haven't yet).`}
						</p>
						<div style = {{width: "100%", textAlign: "center"}}>
							<iframe 
								title= "Nonsense" 
								src="https://www.youtube.com/embed/5e1DBLXnjeQ" 
								frameBorder="0" 
								allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
								allowFullScreen />
						</div>
						<span><b>BONUS</b></span>
						<p>
							{`This is the first video released by Madeon on YouTube that catapulted him to fame. It's a mash up
							of various pop songs from 2010-11. Can you recognise them all?`}
						</p>
						<div style = {{width: "100%", textAlign: "center"}}>
							<iframe 
								title= "Pop Culture Mashup" 
								src="https://www.youtube.com/embed/lTx3G6h2xyA" 
								frameBorder="0" 
								allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
								allowFullScreen />
						</div>
						
					</div>
				)
			
		case 7: 
			return(
					<div>
						<h5 style = {{marginTop: "10px"}}>Sleeping On My Dreams - Jacob Collier</h5>
						<p>
							{`Another entry by Jacob Collier. Unfortunately this probably the only other song I like that I've found from him. 
							Everything else is a bit too jazzy for me. But when he does a more of a pop song, he does it well!`}
						</p>
						<div style = {{width: "100%", textAlign: "center"}}>
							<iframe 
								title= "Sleeping On My Dreams" 
								src="https://www.youtube.com/embed/dR4IwtiEbyo" 
								frameBorder="0" 
								allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
								allowFullScreen />
						</div>
						<span><b>BONUS</b></span>
						<p>
							{`This is Jacob Collier's award winning rendition of Moon River. It is more telling of the style that he usually does and 
							this arrangement won him a Grammy!`}
						</p>
						<div style = {{width: "100%", textAlign: "center"}}>
							<iframe 
								title= "Moon River" 
								src="https://www.youtube.com/embed/VPLCk-FTVvw" 
								frameBorder="0" 
								allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
								allowFullScreen />
						</div>
					</div>
				)
			
		case 8: 
			return(
					<div>
						<h5 style = {{marginTop: "10px"}}>We Come Together - GoldFish</h5>
						<p>
							{`GoldFish are an electronic jazz band from South Africa. They have a few catchy tunes worth looking up
							but this one is my favourite. If only for the music video paying homage to various video games.`}
						</p>
						<div style = {{width: "100%", textAlign: "center"}}>
							<iframe 
								title= "We come together" 
								src="https://www.youtube.com/embed/7-tNUur2YoU" 
								frameBorder="0" 
								allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
								allowFullScreen />
						</div>
					</div>
				)
			
			
		case 9: 
			return(
					<div>
						<h5 style = {{marginTop: "10px"}}>Last 7 letters - oneohkay</h5>
						<p>
							{`This one is a little left-field. It was something that was served up to me by the Spotify 
							algorithms but it stuck. I find all the songs from this artist to be both soothing and energising
							at the same time. But I think most of the vocals aren't actually words (unless they're in a language 
							I can't recognise). Anyway see if you like it yourself!`}
						</p>
						<div style = {{width: "100%", textAlign: "center"}}>
							<iframe 
								title= "Last 7 Letters" 
								src="https://www.youtube.com/embed/zy5q8WLmGzE" 
								frameBorder="0" 
								allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
								allowFullScreen />
						</div>
					</div>
				)
			
		case 10: 
			return(
					<div>
						<h5 style = {{marginTop: "10px"}}>Money - Mystery Skulls</h5>
						<p>
							{`Another Mystery Skulls entry. This was the first song I heard from them and it got me hooked. The 
							bass is absolutely hypnotic and it makes a great gym track. Unfortunately, the beat is slightly off to
							get a good running pace with but it suits well for other exercises!`}
						</p>
						<div style = {{width: "100%", textAlign: "center"}}>
							<iframe 
								title= "Money" 
								src="https://www.youtube.com/embed/lhjk5x54bsE" 
								frameBorder="0" 
								allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
								allowFullScreen />
						</div>
					</div>
				)
			
		case 11: 
			return(
					<div>
						<h5 style = {{marginTop: "10px"}}>Milk & Cereal - G. Love & Special Sauce</h5>
						<p>
							{`I can't remember where I first heard this song but I feel I've always known it. I think it became 
							a meme in the early 2000s which made it popular but it is a genuinely wholesome tribute to the most important 
							meal of the day, breakfast.`}
						</p>
						<div style = {{width: "100%", textAlign: "center"}}>
							<iframe 
								title= "Milk and Cereal" 
								src="https://www.youtube.com/embed/6fOO-N4J6bE" 
								frameBorder="0" 
								allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
								allowFullScreen />
						</div>
					</div>
				)
			
		case 12: 
			return(
					<div>
						<h5 style = {{marginTop: "10px"}}>Butterfly Effect - fox capture plan</h5>
						<p>
							{`Welcome to Japanese Jazz Weekend! Another curveball sent to me by the Spotify algorithms, I found this song
							to be a great introduction into a genre of music I would have never thought about before. I find this song really 
							uplifting in a running playlist and the rest of the album is just as good.`}
						</p>
						<div style = {{width: "100%", textAlign: "center"}}>
							<iframe 
								title= "Butterfly Effect" 
								src="https://www.youtube.com/embed/8cMhQ_teEoY" 
								frameBorder="0" 
								allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
								allowFullScreen />
						</div>
					</div>
				)
			
		case 13: 
			return(
					<div>
						<h5 style = {{marginTop: "10px"}}>Natural High - JABBERLOOP</h5>
						<p>
							{`Another Japanese jazz band. All the tracks are upbeat and cheerful. Definitely music to help get all
							those Sunday chores done to!`}
						</p>
						<div style = {{width: "100%", textAlign: "center"}}>
							<iframe 
								title= "Natural High" 
								src="https://www.youtube.com/embed/wVkcr1ZEs9Y" 
								frameBorder="0" 
								allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
								allowFullScreen />
						</div>
					</div>
				)
			
		case 14: 
			return(
					<div>
						<h5 style = {{marginTop: "10px"}}>World Order - World Order</h5>
						<p>
							{`While we're looking at Japanese music, I thought it would be show the band World Order. They are the 
							'Japanese Dancing Businessmen' meme, but they also produce nice upbeat music. Definitely fun to watch and
							to listen to.`}
						</p>
						<p>
							<b>Did you know?: </b>{`Before becoming the lead singer/dancer of World Order, Genki Sudo had a 
							successful career as a MMA fighter, utilizing his strange dance moves to create memorable walk-outs and
							to confuse his opponents.`}
						</p>
						<div style = {{width: "100%", textAlign: "center", marginBottom: "10px"}}>
							<img src={haveaniceday} alt="" style={{width: "95%", maxWidth: "445px"}} />
						</div>
						<div style = {{width: "100%", textAlign: "center"}}>
							<iframe 
								title= "World Order" 
								src="https://www.youtube.com/embed/NGdyaDnnrLM" 
								frameBorder="0" 
								allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
								allowFullScreen />
						</div>
					</div>
				)
		case 15: 
			return(
					<div>
						<h5 style = {{marginTop: "10px"}}>Haunted - SMLE (ft. Seann Bowe)</h5>
						<p>
							{`I know the chorus lyrics are 'I'm haunted in my bed' but every time I hear this song I hear
							something else. It gives another context to being 'haunted'... I wonder if anyone else hears the same.`}
						</p>
						<div style = {{width: "100%", textAlign: "center"}}>
							<iframe 
								title= "Haunted" 
								src="https://www.youtube.com/embed/i_-wXT0zERc" 
								frameBorder="0" 
								allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
								allowFullScreen />
						</div>
					</div>
				)
			
			
		case 16: 
			return(
					<div>
						<h5 style = {{marginTop: "10px"}}>All of the People - Panama Wedding</h5>
						<p>
							{`I really like this band. I think they have only relased 10 songs since 2014 but they are all great! 
							If you like this song then definitely look up the albums.`}
						</p>
						<div style = {{width: "100%", textAlign: "center"}}>
							<iframe 
								title= "All of the People" 
								src="https://www.youtube.com/embed/_q4P0SjIqoU" 
								frameBorder="0" 
								allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
								allowFullScreen />
						</div>
					</div>
				)
			
		case 17: 
			return(
					<div>
						<h5 style = {{marginTop: "10px"}}>Killer Whales - Smallpools</h5>
						<p>
							{`An early single from the band Smallpools. Upbeat and catchy like a lot of their tunes.`}
						</p>
						<div style = {{width: "100%", textAlign: "center"}}>
							<iframe 
								title= "Killer Whales" 
								src="https://www.youtube.com/embed/gSJtjPi8CcY" 
								frameBorder="0" 
								allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
								allowFullScreen />
						</div>
					</div>
				)
			
		case 18: 
			return(
					<div>
						<h5 style = {{marginTop: "10px"}}>Frantic Aerobics - Mitch Murder</h5>
						<p>
							{`Although this song is perky and upbeat, it's more of a segway to recommend the soundtrack
							to the hit B-movie, 'Kung Fury' where Mitch Murder provided 6 of the 13 songs (also featuring David Hasselhoff). If you are a fan of 80s
							action movies and the accompanying over the top music then it's the perfect film for you.`}
						</p>
						<p>
							{`If not, then enjoy this nice little tune to the footage of US National Aerobic Championships.`}
						</p>
						<div style = {{width: "100%", textAlign: "center"}}>
							<iframe 
								title= "Frantic Aerobics" 
								src="https://www.youtube.com/embed/X8hiZvxLRHY" 
								frameBorder="0" 
								allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
								allowFullScreen />
						</div>
						<span><b>BONUS</b></span>
						<p>
							{`David Hasselhoff's contribution to the Kung Fury soundtrack in all its glory: `}
						</p>
						<div style = {{width: "100%", textAlign: "center"}}>
							<iframe 
								title= "True Survivor" 
								src="https://www.youtube.com/embed/ZTidn2dBYbY" 
								frameBorder="0" 
								allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
								allowFullScreen />
						</div>
					</div>
				)
			
		case 19: 
			return(
					<div>
						<h5 style = {{marginTop: "10px"}}>I'd Rather Dance With You - Kings of Convenience</h5>
						<p>
							{`This is a little slower than a lot of the other songs here but I think it is one of the
							most wholesome song on the list. This is one of two songs I have ever had as a ringtone for my
							phone before turning it permanently to vibrate about 4 years ago. `}
						</p>
						<div style = {{width: "100%", textAlign: "center"}}>
							<iframe 
								title= "Id Rather Dance With You" 
								src="https://www.youtube.com/embed/OczRpuGKTfY" 
								frameBorder="0" 
								allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
								allowFullScreen />
						</div>
						<span><b>BONUS</b></span>
						<p>
							{`The only other song I have ever had as a ringtone on my phone: `}
						</p>
						<div style = {{width: "100%", textAlign: "center"}}>
							<iframe 
								title= "Electric Feel" 
								src="https://www.youtube.com/embed/MmZexg8sxyk" 
								frameBorder="0" 
								allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
								allowFullScreen />
						</div>
					</div>
				)
			
		case 20: 
			return(
					<div>
						<h5 style = {{marginTop: "10px"}}>Fiona Coyne - Skylar Spance</h5>
						<p>
							{`I looked up who Fiona Coyne is after hearing this song and apparently she is a character in a show
							called Degrassi which I have never seen and know nothing about. That doesn't get in the way of enjoying 
							this song however.`}
						</p>
						<div style = {{width: "100%", textAlign: "center"}}>
							<iframe 
								title= "Fiona Coyne" 
								src="https://www.youtube.com/embed/Bw_7UrqzNUg" 
								frameBorder="0" 
								allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
								allowFullScreen />
						</div>
					</div>
				)
			
		case 21: 
			return(
					<div>
						<h5 style = {{marginTop: "10px"}}>Lone Digger - Caravan Palace</h5>
						<p>
							{`Another niche genre that I frequently get recommendations for is 'Electric Swing'. It's like the 1920s
							but updated for today. Since we're bringing back plague and economic recession from then, might as well
							bring the music back too.`}
						</p>
						<div style = {{width: "100%", textAlign: "center"}}>
							<iframe 
								title= "Lone Digger" 
								src="https://www.youtube.com/embed/UbQgXeY_zi4" 
								frameBorder="0" 
								allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
								allowFullScreen />
						</div>
					</div>
				)
		case 22: 
			return(
					<div>
						<h5 style = {{marginTop: "10px"}}>Feel A Little Love - French Horn Rebellion</h5>
						<p>
							{`This is a nice upbeat track to start your day. I can't tell if it actually contains any French Horns though.`}
						</p>
						<div style = {{width: "100%", textAlign: "center"}}>
							<iframe 
								title= "Feel A Little Love" 
								src="https://www.youtube.com/embed/if7lP5l-LfU" 
								frameBorder="0" 
								allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
								allowFullScreen />
						</div>
					</div>
				)
			
			
		case 23: 
			return(
					<div>
						<h5 style = {{marginTop: "10px"}}>Magic (ft. Nile Rodgers and Brandy) - Mystery Skulls</h5>
						<p>
							{`Third entry from Mystery Skulls (I think they're that good!). This one has the magic (pun intended) of 
							Nile Rodgers on the guitar. If you take anything away from this advent calendar, it should be that I like the Mystery Skulls 
							and you probably should too.`}
						</p>
						<div style = {{width: "100%", textAlign: "center"}}>
							<iframe 
								title= "Magic" 
								src="https://www.youtube.com/embed/tBfE9UPTfg8" 
								frameBorder="0" 
								allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
								allowFullScreen />
						</div>
					</div>
				)
			
		case 24: 
			return(
					<div>
						<h5 style = {{marginTop: "10px"}}>Christmas Comes to Our Place - fox capture plan</h5>
						<p>
							{`As Christmas is round the corner, I feel I should at least start getting Christmassy. This track
							is from the same album as above but it's got such a nice Christmassy vibe that I thought I had to add it as well.
							`}
						</p>
						<div style = {{width: "100%", textAlign: "center"}}>
							<iframe 
								title= "Christmas Comes To Our Place" 
								src="https://www.youtube.com/embed/_hSFoHvn3HU" 
								frameBorder="0" 
								allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
								allowFullScreen />
						</div>
					</div>
				)
			
		case 25: 
			return(
					<div>
						<h5 style = {{marginTop: "10px"}}>Christmas Time (Don't Let the Bells End) - The Darkness</h5>
						<p>
							{`I had to include at least one proper Christmas tune on this list. And I 
							picked the Darkness as I think they are a really underrated band. I absolutely love the song
							'Danging on a Friday Night' from their debut album 'Permission to Land'. In fact that album is 
							full of gems outside of the one everyone knows. You should buy it for yourself for Christmas.`}
						</p>
						<p>
							{`Anyway, I hope you enjoyed this advent calendar as much as I did making it! Merry Christmas!`}
						</p>
						<div style = {{width: "100%", textAlign: "center"}}>
							<iframe 
								title= "Christmas Time" 
								src="https://www.youtube.com/embed/I54u4-lPdgg" 
								frameBorder="0" 
								allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
								allowFullScreen />
						</div>
					</div>
				)
			
					
		default:
			return
	}


}


export default sideBContents