import under_construction from "../images/Under_construction_animated.gif"

const sideAContents = (door_id) => {
	switch(door_id+1) {
		case 1: 
			return(
					<div>
						<h5 style = {{marginTop: "10px"}}>All I Want for Christmas is You - Mariah Carey</h5>
                        <p>
                            {`Welcome! On this side, you will find some Christmasy goodness, and I guess we have to start with the alleged 'Queen of Chirstmas'
                            (trademark pending). Everyone knows Christmas is around the corner when this starts appearing!`}
                        </p>
						<p>
							<b>Did you know? </b>{`In 2010, a British goat farmer discovered that his animals produce more milk when Carey’s Christmas classic is played on a loop. 
							In contrast, Calvin and the Chipmunks Christmas song halted milk production completely!`}
						</p>
						<div style = {{width: "100%", textAlign: "center"}}>
							<iframe 
								title= "All I Want for Christmas is You"
								src="https://www.youtube.com/embed/aAkMkVFwAoo" 
								frameBorder="0" 
								allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
								allowFullScreen />
						</div>
					</div>
				)
			
			
		case 2: 
			return(
					<div>
						<h5 style = {{marginTop: "10px"}}>This section is still under construction!</h5>
						<p>
							{`We are still finalising the playlist and maybe including some additional songs. By the time this
                            day rolls around there will be something here. Don't fret!`}
						</p>
						<div style = {{width: "100%", textAlign: "center"}}>
                            <img src={under_construction} alt="" style={{width: "95%", maxWidth: "200px"}} />
						</div>
					</div>
				)
			
		case 3: 
			return(
					<div>
						<h5 style = {{marginTop: "10px"}}>What's This? - Danny Elfman</h5>
						<p>
							<b>Did you know? </b>{`One minute of Nightmare Before Christmas took a week to shoot. This song took over a month!`}
						</p>
						<div style = {{width: "100%", textAlign: "center"}}>
							<iframe 
								title= "Whats This" 
								src="https://www.youtube.com/embed/QLvvkTbHjHI" 
								frameBorder="0" 
								allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
								allowFullScreen />
						</div>
					</div>
				)
			
		case 4: 
			return(
					<div>
						<h5 style = {{marginTop: "10px"}}>It's Beginning to Look a Lot Like Christmas - Michael Buble</h5>
						<p>
							<b>Did you know? </b>{`'It's Beginning to Look a Lot Like Christmas' was written by Meredith Willson, who also wrote 'The Music Man'.`}
						</p>
						<div style = {{width: "100%", textAlign: "center"}}>
							<iframe 
								title= "Its beginning to look a lot like Christmas" 
								src="https://www.youtube.com/embed/mOl2eoMrvq8" 
								frameBorder="0" 
								allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
								allowFullScreen />
						</div>
					</div>
				)
			
		case 5: 
			return(
					<div>
						<h5 style = {{marginTop: "10px"}}>Santa Claus is Coming to Town - Jackson 5</h5>
						<p>
							<b>Did you know? </b>{`'Santa Claus is Coming to Town' was written in 1933 during the Great Depression and used to contain verses about charitable giving.`}
						</p>
						<div style = {{width: "100%", textAlign: "center"}}>
							<iframe 
								title= "Santa Claus is Coming to Town" 
								src="https://www.youtube.com/embed/UIrZ57Om6j4" 
								frameBorder="0" 
								allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
								allowFullScreen />
						</div>
					</div>
				)
			
		case 6: 
			return(
					<div>
						<h5 style = {{marginTop: "10px"}}>Deck the Halls - Nat King Cole</h5>
						<p>
							<b>Did you know? </b>{`'The melody for 'Deck the Halls' originates from a 16th century Welsh folk song. The English lyrics first appeared in 1862.`}
						</p>
						<div style = {{width: "100%", textAlign: "center"}}>
							<iframe 
								title= "Deck the Halls" 
								src="https://www.youtube.com/embed/gMYDeQso0sA" 
								frameBorder="0" 
								allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
								allowFullScreen />
						</div>
					</div>
				)
			
		case 7: 
			return(
					<div>
						<h5 style = {{marginTop: "10px"}}>Sleigh Ride - Tamar Braxton</h5>
						<p>
							<b>Did you know? </b>{`Tamar is Toni Braxton’s sister. However, she `}<b>{`really`}</b>{` does not like being referred to as this!`}
						</p>
						<div style = {{width: "100%", textAlign: "center"}}>
							<iframe 
								title= "Sleigh Ride" 
								src="https://www.youtube.com/embed/k8DNV8Bou4o" 
								frameBorder="0" 
								allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
								allowFullScreen />
						</div>
					</div>
				)
			
		case 8: 
			return(
					<div>
						<h5 style = {{marginTop: "10px"}}>Fairytale of New York - The Pogues</h5>
						<p>
							<b>Did you know? </b>{`This song is now censored on BBC radio, a decision which left The Pogues 'bemused', and prompted much discussion about artistic license and contextualising lyrics. `}
						</p>
						<div style = {{width: "100%", textAlign: "center"}}>
							<iframe 
								title= "Fairytale of New York" 
								src="https://www.youtube.com/embed/j9jbdgZidu8" 
								frameBorder="0" 
								allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
								allowFullScreen />
						</div>
					</div>
				)
			
			
		case 9: 
			return(
					<div>
						<h5 style = {{marginTop: "10px"}}>Stay Another Day - East 17</h5>
						<p>
							<b>Did you know? </b>{`'Stay Another Day' beat Mariah Carey’s 'All I Want for Christmas' to number 1 in 1994. It kept the slot for 5 weeks.`}
						</p>
						<div style = {{width: "100%", textAlign: "center"}}>
							<iframe 
								title= "Stay Another Day" 
								src="https://www.youtube.com/embed/-wNhdjoF-6M" 
								frameBorder="0" 
								allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
								allowFullScreen />
						</div>
					</div>
				)
			
		case 10: 
			return(
					<div>
						<h5 style = {{marginTop: "10px"}}>Run Run Rudolph - Jane Krakowski</h5>
						<p>
							<b>Did you know? </b>{`Jane Krakowski has starred in Ally McBeal, 30 Rock, and The Unbreakable Kimmy Schmidt. She sings in all her shows.
							Ally McBeal is in my top 5 best TV shows ever, in part because of the wonderful Jane!`}
						</p>
						<div style = {{width: "100%", textAlign: "center"}}>
							<iframe 
								title= "Run Run Rudolph" 
								src="https://www.youtube.com/embed/LGv-stdn6ho" 
								frameBorder="0" 
								allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
								allowFullScreen />
						</div>
					</div>
				)
			
		case 11: 
			return(
					<div>
						<h5 style = {{marginTop: "10px"}}>Merry Christmas Everyone - Shakin' Stevens</h5>
						<p>
							<b>Did you know? </b>{`The jumper Shakin' Stevens wears in this video is his own, he receives many letters about it every Christmas, both positive and negative.`}
						</p>
						<div style = {{width: "100%", textAlign: "center"}}>
							<iframe 
								title= "Merry Christmas Everyone" 
								src="https://www.youtube.com/embed/N-PyWfVkjZc" 
								frameBorder="0" 
								allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
								allowFullScreen />
						</div>
					</div>
				)
			
		case 12: 
			return(
					<div>
						<h5 style = {{marginTop: "10px"}}>Step Into Christmas - Elton John</h5>
						<p>
							<b>Did you know? </b>{`'Step into Christmas' was written in one morning, then recorded the following afternoon! 
							It’s an homage to the music producer Phil Spector, who is currently serving a life sentence for murder. `}
						</p>
						<div style = {{width: "100%", textAlign: "center"}}>
							<iframe 
								title= "Step into Christmas" 
								src="https://www.youtube.com/embed/IbRtGMm96F8" 
								frameBorder="0" 
								allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
								allowFullScreen />
						</div>
					</div>
				)
			
		case 13: 
			return(
					<div>
						<h5 style = {{marginTop: "10px"}}>Baby it's Cold Outside - John Legend (ft. Kelly Clarkson)</h5>
						<p>
							<b>Did you know? </b>{`This is a modern consent-focused version of the original song, which though magnificently sung by Tom Jones and Cerys Matthews, has a distinctly rapey vibe to the lyrics.`}
						</p>
						<div style = {{width: "100%", textAlign: "center"}}>
							<iframe 
								title= "Baby Its Cold Outside" 
								src="https://www.youtube.com/embed/DlMP7FGYJmk" 
								frameBorder="0" 
								allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
								allowFullScreen />
						</div>
					</div>
				)
			
		case 14: 
			return(
					<div>
						<h5 style = {{marginTop: "10px"}}>Mistletoe and Wine - Cliff Richard</h5>
						<p>
							<b>Did you know? </b>{`Never mix mistletoe and wine to ingest; mistletoe is highly toxic to humans and animals.`}
						</p>
						<div style = {{width: "100%", textAlign: "center"}}>
							<iframe 
								title= "Mistletoe and Wine" 
								src="https://www.youtube.com/embed/rZCEBibnRM8" 
								frameBorder="0" 
								allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
								allowFullScreen />
						</div>
					</div>
				)
		case 15: 
			return(
					<div>
						<h5 style = {{marginTop: "10px"}}>Let it Snow - Dean Martin</h5>
						<p>
							<b>Did you know? </b>{`Dean Martin was born to Italian immigrants to America. His birth name is Dino Crocetti.
							He is the only person to have three stars on the Hollywood Walk of Fame – one each for film, television and music. `}
						</p>
						<div style = {{width: "100%", textAlign: "center"}}>
							<iframe 
								title= "Let it Snow" 
								src="https://www.youtube.com/embed/mN7LW0Y00kE" 
								frameBorder="0" 
								allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
								allowFullScreen />
						</div>
					</div>
				)
			
			
		case 16: 
			return(
					<div>
						<h5 style = {{marginTop: "10px"}}>Joy to the World - Aretha Franklin</h5>
						<p>
							<b>Did you know? </b>{`Franklin won 18 Grammys and sold 75 million records, she is one of the most successful artists of all time.
							This is the only live video on the calendar, because Franklin is a badass, and this is an INCREDIBLE performance!`}
						</p>
						<div style = {{width: "100%", textAlign: "center"}}>
							<iframe 
								title= "Joy to the World" 
								src="https://www.youtube.com/embed/ccte_N1mO3s" 
								frameBorder="0" 
								allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
								allowFullScreen />
						</div>
					</div>
				)
			
		case 17: 
			return(
					<div>
						<h5 style = {{marginTop: "10px"}}>Merry Xmas Everybody - Slade</h5>
						<p>
							<b>Did you know? </b>{`Slade make at least £500,000 a year from this song in royalties. I have no idea where Holder's (lead singer) beard begins and his hair ends…`}
						</p>
						<div style = {{width: "100%", textAlign: "center"}}>
							<iframe 
								title= "Merry Xmas Everybody" 
								src="https://www.youtube.com/embed/BpfHSqLXePI" 
								frameBorder="0" 
								allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
								allowFullScreen />
						</div>
					</div>
				)
			
		case 18: 
			return(
					<div>
						<h5 style = {{marginTop: "10px"}}>Do you Hear What I Hear? - Pentatonix (ft. Whitney Houston)</h5>
						<p>
							<b>Did you know? </b>{`Houston is one of my favourite singers of all time. I love this song because it is one of the few where she sounds happy! 
							She had so many terrible life experiences but such a wonderful voice, definitely one of my Christmas faves. `}
						</p>
						<div style = {{width: "100%", textAlign: "center"}}>
							<iframe 
								title= "Do you Hear what I Hear" 
								src="https://www.youtube.com/embed/7cSq8zlzwdU" 
								frameBorder="0" 
								allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
								allowFullScreen />
						</div>
					</div>
				)
			
		case 19: 
			return(
					<div>
						<h5 style = {{marginTop: "10px"}}>When a Child is Born - Johnny Mathis</h5>
						<p>
							<b>Did you know? </b>{`Johnny Mathis has now recorded 5 separate Christmas albums.`}
						</p>
						<p>{`Everyone thinks this song is about the birth of Jesus, but actually it's just about all babies being born. `}</p>
						<div style = {{width: "100%", textAlign: "center"}}>
							<iframe 
								title= "When a Child is Born" 
								src="https://www.youtube.com/embed/ZCqhX89WV_0" 
								frameBorder="0" 
								allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
								allowFullScreen />
						</div>
					</div>
				)
			
		case 20: 
			return(
					<div>
						<h5 style = {{marginTop: "10px"}}>Cuddl Up Cosy Christmas - Dolly Parton</h5>
						<p>
							<b>Did you know? </b>{`If you haven’t guessed by now, I am a fan of a powerful female, and Dolly rocks! It's so cool that Dolly the cloned sheep is named after her, because she was made from a mammary gland cell, and Dolly has fab bosoms. 
							Fave fact ever: she once competed in a Dolly Parton Lookalike contest and LOST. `}
						</p>
						<div style = {{width: "100%", textAlign: "center"}}>
							<iframe 
								title= "Cuddle Up Cozy Christmas" 
								src="https://www.youtube.com/embed/ClqKogp7cCk" 
								frameBorder="0" 
								allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
								allowFullScreen />
						</div>
					</div>
				)
			
		case 21: 
			return(
					<div>
						<h5 style = {{marginTop: "10px"}}>Winter Wonderland - Macy Grey</h5>
						<p>
							<b>Did you know? </b>{`This song has been covered by many big stars, such as Frank Sinatra, Barry Manilow, Bing Crosby and Elvis Presley to name a few.`}
						</p>
						<p>{`Gray used to get picked on for her unusually deep, husky voice, but look at her now! Legend.`}</p>
						<div style = {{width: "100%", textAlign: "center"}}>
							<iframe 
								title= "Winter Wonderland" 
								src="https://www.youtube.com/embed/Oe_K_h7dGV8" 
								frameBorder="0" 
								allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
								allowFullScreen />
						</div>
					</div>
				)
		case 22: 
			return(
					<div>
						<h5 style = {{marginTop: "10px"}}>The First Noel - Frank Sinatra</h5>
						<p>
							<b>Did you know? </b>{`Sinatra was tracked by the FBI for decades due to his close friendship with Mob boss Sam Giancana and other Gangsters, but he was never prosecuted! What was he was accused of? Anti-racist initiatives and defending accused Communists. Scoundrel.`}
						</p>
						<div style = {{width: "100%", textAlign: "center"}}>
							<iframe 
								title= "First Noel" 
								src="https://www.youtube.com/embed/igUCRRmlhE4" 
								frameBorder="0" 
								allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
								allowFullScreen />
						</div>
					</div>
				)
			
			
		case 23: 
			return(
					<div>
						<h5 style = {{marginTop: "10px"}}>White Christmas - Bing Crosby</h5>
						<p>
							<b>Did you know? </b>{`Rosemary Clooney, George Clooney’s aunt, is the taller actress next to Bing Crosby in the video. I watch this Christmas movie every year without fail, usually more than once! `}
						</p>
						<div style = {{width: "100%", textAlign: "center"}}>
							<iframe 
								title= "White Christmas" 
								src="https://www.youtube.com/embed/7S-IidmcSN8" 
								frameBorder="0" 
								allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
								allowFullScreen />
						</div>
					</div>
				)
			
		case 24: 
			return(
					<div>
						<h5 style = {{marginTop: "10px"}}>Thank God it's Christmas - Queen</h5>
						<p>
							<b>Did you know? </b>{`Originally written by drummer Roger May and gutarist Brian May, the song was released with no video. The cartoon was made in 2019 to accompany it. Like Freddy said, `}<b>{`THANK GOD IT’S CHRISTMAS!`}</b>
						</p>
						<div style = {{width: "100%", textAlign: "center"}}>
							<iframe 
								title= "Thank God Its Christmas" 
								src="https://www.youtube.com/embed/qw2TD91Nytg" 
								frameBorder="0" 
								allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
								allowFullScreen />
						</div>
					</div>
				)
			
		case 25: 
			return(
					<div>
						<h5 style = {{marginTop: "10px"}}>I Wish it Could be Christmas Every Day - Wizzard</h5>
						<p>
							<b>Did you know? </b>{`Wizzard recorded this video in August so they used fans to blast cold air into the studio and create a wintry feel. They bussed a choir of kids down from Birmingham to London to be in the video.`}
						</p>
						<p>{`All the festive love, `}<b>{`Merry Christmas Everyone! `}</b>{`Stay safe and see you soon!`}</p>
						<div style = {{width: "100%", textAlign: "center"}}>
							<iframe 
								title= "I Wish it Could be Christmas Everyday" 
								src="https://www.youtube.com/embed/IJPc7esgvsA" 
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


export default sideAContents