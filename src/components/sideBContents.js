
const sideBContents = (door_id) => {
	switch(door_id+1) {
		case 1: 
			return(
					<div>
						<h5 style = {{marginTop: "10px"}}>Sommarfågel - Wintergatan</h5>
						<p>
							{`Debut single from Swedish band Wintergatan, "Sommarfågel" which directly translates to "Summer Bird" in English, performed well in the Swedish 'folktronica' circles.
                            However, this band might be more famous globally for their intricate musical marble machine!.`}
						</p>
						<div style = {{width: "100%", textAlign: "center"}}>
							<iframe 
								title= "Sommarfagel" 
								src="https://www.youtube.com/embed/SBK2AF-NdVA" 
								frameBorder="0" 
								allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
								allowFullScreen />
						</div>
						<span><b>BONUS</b></span>
						<p>
							{`The famous marble machine has racked up over 220 million views since released in 2010. Currently the band is developing a
                            new version and, for the more engineering inclined, is documenting the progress on the band's Youtube channel.`}
						</p>
						<div style = {{width: "100%", textAlign: "center"}}>
							<iframe 
								title= "Marble Machine" 
								src="https://www.youtube.com/embed/IvUU8joBb1Q" 
								frameBorder="0" 
								allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
								allowFullScreen />
						</div>
						
					</div>
				)
			
			
		case 2: 
			return(
                <div>
                    <h5 style = {{marginTop: "10px"}}>Welcome To My Parents' House - NSP</h5>
                    <p>
                        {`It's this time of year where we should all be thankful for family and remember how parents can be 
                        the best, but also the most frustrating people to live with. Summed up neatly with this song: `}
                    </p>
                    <div style = {{width: "100%", textAlign: "center"}}>
                        <iframe 
                            title= "Welcome to my parents house" 
                            src="https://www.youtube.com/embed/3YXUWWZJXpE" 
                            frameBorder="0" 
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                            allowFullScreen />
                    </div>
                </div>
			)
			
		case 3: 
            return(
                <div>
                    <h5 style = {{marginTop: "10px"}}>Berenstein - The Band CAMINO</h5>
                    <p>
                        {`While a little less upbeat than the previous tracks, I love this song because it references the `}
                        <a href ="https://en.wikipedia.org/wiki/False_memory" target="_blank" rel="noreferrer">Mandela Effect</a>{`. This 
                        is the phenomenon where many people share the same false memory, named after a widespread incorrect recollection that
                        Nelson Mandela died in prison in the 1980s. This song refers to another similar phenomenon where many people remember the
                        children's books 'The Berenstain Bears' as 'The Berenstein Bears'. No one knows what causes it necessarily, but it is a 
                        neat thing to write a song about.`}
                    </p>
                    <div style = {{width: "100%", textAlign: "center"}}>
                        <iframe 
                            title= "Berenstein" 
                            src="https://www.youtube.com/embed/uu2lshntj68" 
                            frameBorder="0" 
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                            allowFullScreen />
                    </div>
                </div>
            )
			
		case 4: 
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
                        {`For those of you that are more musically inclined, he also releases videos going into how he
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
        case 5: 
            return(
                <div>
                    <h5 style = {{marginTop: "10px"}}>Snoopy's Christmas - Smash Mouth</h5>
                    <p>
                        {`Hitting us with a double Christmas whammy, `}<a href="https://www.intelligentgrowthsolutions.com/crew/sam-cochrane-2" target="_blank" rel="noreferrer">Sam</a>
                        {`'s giving us another punk-rock take, this one on Snoopy's Christmas fight with the Red Baron, because "well we love Snoopy and the Peanuts gang!"`}
                    </p>
                    <div style = {{width: "100%", textAlign: "center"}}>
                        <iframe 
                            title= "Snoopys Christmas" 
                            src="https://www.youtube.com/embed/bxyXId5mc1Q" 
                            frameBorder="0" 
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                            allowFullScreen />
                    </div>
                </div>
            )
            
		case 6: 
            return(
                <div>
                    <h5 style = {{marginTop: "10px"}}>Christmas Eve / Sarajevo - Trans-Siberian Orchestra</h5>
                    <p>
                        <a href="https://www.intelligentgrowthsolutions.com/crew/dr-vinca-russell" target="_blank" rel="noreferrer">Vinca</a>{` says:`}
                    </p>
                    <p>
                        {`"I love the Trans-Siberian Orchestra. Their music often starts out feeling quite classical and traditional, 
                        but then you get an explosion of guitars and drums that takes you by surprise. 
                        It's a really joyful and unexpected celebration of festive music! 
                        Plus - trivia time... - their main producer/conductor had the same name as my husband `}&#128516;{`"`}
                    </p>
                    <div style = {{width: "100%", textAlign: "center"}}>
                        <iframe 
                            title= "Thea Gilmore"
                            src="https://www.youtube.com/embed/MHioIlbnS_A" 
                            frameBorder="0" 
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                            allowFullScreen />
                    </div>
                </div>
            )

        case 7:
            return(
                <div>
                    <h5 style = {{marginTop: "10px"}}>Merry Christmas Everyone - Shakin' Stevens</h5>
                    <p>
                        <a href="https://www.intelligentgrowthsolutions.com/crew/calum-robertson" target="_blank" rel="noreferrer">Calum</a>{` says:`}
                    </p>
                    <p>
                        {`"Chosen not because it is Shaky but there is a local connection here: the song was written by a guy from Craigmillar in Edinburgh!"`}
                    </p>
                    <div style = {{width: "100%", textAlign: "center"}}>
                        <iframe 
                            title= "Shakin Stevens"
                            src="https://www.youtube.com/embed/N-PyWfVkjZc" 
                            frameBorder="0" 
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                            allowFullScreen />
                    </div>
                </div>
            )
			
		case 8: 
            return(
                <div>
                    <h5 style = {{marginTop: "10px"}}>Ghost - Mystery Skulls</h5>
                    <p>
                        {`One of my favourite bands with probably their best track. The video also has a neat Scooby-Doo style
                        story arc which is continued in other songs by the artist. Here you can find `}<a href="https://youtu.be/tUYM5WNdNGc" target="_blank" rel="noreferrer">Part 2</a>{`, `}<a href="https://youtu.be/NN_Kbltsqx4" target="_blank" rel="noreferrer">Part 3</a>{`, and  `}<a href="https://youtu.be/wy1bXhEczGM" target="_blank" rel="noreferrer">Part 4</a>{`.`}
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
	
		case 9: 
            return(
                <div>
                    <h5 style = {{marginTop: "10px"}}>True Survivor - David Hasselhoff</h5>
                    <p>
                        {`If you're a fan of cheesy 80's style B-movies and you haven't had the pleasure of sitting through 'Kung Fury' 
                        then you're in for a treat! Clear your plans for Friday, buckle up, grab a beer, and go watch David Sandberg's 
                        ridiculous homage to police action films. David Hasselhoff's here singing the title track and giving a small taste of
                        what's in store.`}
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
			
		case 10: 
            return(
                <div>
                    <h5 style = {{marginTop: "10px"}}>I'd Rather Dance With You - Kings of Convenience</h5>
                    <p>
                        {`This might be a little slower than the rest of the other songs in I include in here, but it certainly has the
                        most wholesome lyrics. As an aside, this is one of only two songs I have ever had as a ringtone for my
                        phone before pretty much permanently turning it to vibrate sometime in 2016.`}
                    </p>
                    <div style = {{width: "100%", textAlign: "center"}}>
                        <iframe 
                            title= "Id Rather Dance With You" 
                            src="https://www.youtube.com/embed/OczRpuGKTfY" 
                            frameBorder="0" 
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                            allowFullScreen />
                    </div>
                </div>
            )
			
		case 11: 
            return(
                <div>
                    <h5 style = {{marginTop: "10px"}}>We Come Together - GoldFish</h5>
                    <p>
                        {`GoldFish are an electronic jazz band from South Africa. They have a few catchy tunes worth looking up
                        but this one is my favourite, if only for the music video paying homage to various video games. How many references can you spot?`}
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
			
		case 12: 
            return(
                <div>
                    <h5 style = {{marginTop: "10px"}}>Animal Spirits - Vulfpeck</h5>
                    <p>
                        {`Vulfpeck is an American funk band who gained infamy for funding an entire tour by relasing an album called 'Sleepify' which were
                        10 tracks each of 30 seconds of silence. They encouraged their fans to play it on loop on Spotify every night while they slept. This
                        way they were able to generate $20,000 in royalties from Spotify which paid for their subsequent 'Sleepify Tour'. Spotify promptly
                        updated their terms and conditions.`}
                    </p>
                    <div style = {{width: "100%", textAlign: "center"}}>
                        <iframe 
                            title= "Vulfpeck" 
                            src="https://www.youtube.com/embed/qTUnDV3MgVQ" 
                            frameBorder="0" 
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                            allowFullScreen />
                    </div>
                </div>
            )
			
		case 13: 
            return(
                <div>
                    <h5 style = {{marginTop: "10px"}}>A Professional Pirate - Tim Curry Muppet Treasure Island</h5>
                    <p>
                        {`Tis the season for Christmas movies and my favourite is the Muppets one. Funnily enough, not the Christmas Carol one 
                        but the much superior 1996 Treasure Island one. I watch it every year!`}
                    </p>
                    <div style = {{width: "100%", textAlign: "center"}}>
                        <iframe 
                            title= "Muppets" 
                            src="https://www.youtube.com/embed/j1l7N-WLa3Q" 
                            frameBorder="0" 
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                            allowFullScreen />
                    </div>
                </div>
            )
			
		case 14: 
            return(
                <div>
                    <h5 style = {{marginTop: "10px"}}>Fighting Trousers - Professor Elemental & Nicknackatory - Mr.B The Gentleman Rhymer</h5>
                    <p>
                        {`I recently came across this genre of music that I filed under incredibly 'Incredibly Posh British Rap' but I think
                        it is officially called 'Chap Hop'. I believe these are both diss tracks aimed at the other artist. Which of these two do you think wins 
                        this rap battle?`}
                    </p>
                    <p><b>Fighting Trousers - Professor Elemental</b></p>
                    <div style = {{width: "100%", textAlign: "center"}}>
                        <iframe 
                            title= "Fighting Trousers" 
                            src="https://www.youtube.com/embed/RhpHbr19GWA" 
                            frameBorder="0" 
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                            allowFullScreen />
                    </div>
                    <p><b>Nicknackatory - Mr.B The Gentleman Rhymer</b></p>
                    <div style = {{width: "100%", textAlign: "center"}}>
                        <iframe 
                            title= "Fighting Trousers" 
                            src="https://www.youtube.com/embed/GwJesApzMzc" 
                            frameBorder="0" 
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                            allowFullScreen />
                    </div>
                </div>
            )

		case 15: 
            return(
                <div>
                    <h5 style = {{marginTop: "10px"}}>Butterfly Effect - Fox Capture Plan</h5>
                    <p>
                        {`Japanese Jazz is not a genre I would ever have thought about before until the Spotify algorithms played an absolute blinder and served
                        this up in my Discover playlist. I find it really uplifting and invigorating. It's been a permanent addition to my running playlist ever since!`}
                    </p>
                    <div style = {{width: "100%", textAlign: "center"}}>
                        <iframe 
                            title= "Butterfly Effect" 
                            src="https://www.youtube.com/embed/8cMhQ_teEoY" 
                            frameBorder="0" 
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                            allowFullScreen />
                    </div>
                    <span><b>BONUS</b></span>
                        <p>
                            <b>Curtain Call feat.Yosh</b>
                        </p>
						<p>
							{`Another song of theirs, but this time with lyrics.`}
						</p>
						<div style = {{width: "100%", textAlign: "center"}}>
							<iframe 
								title= "Curtain Call" 
								src="https://www.youtube.com/embed/cByZ4AP3uZ8" 
								frameBorder="0" 
								allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
								allowFullScreen />
						</div>

                </div>
            )
			
			
		case 16: 
            return(
                <div>
                    <h5 style = {{marginTop: "10px"}}>Just One Day - 2winz² (Brian David Gilbert)</h5>
                    <p>
                        {`Brian David Gilbert is a writer, video producer, and general internet funny person with a Youtube channel that has a
                        bizarre range from `}
                        <a href="https://www.youtube.com/playlist?list=PLrzMhRx_AuP0DT2k6TtwNEdB5G_bqxkvR" target="_blank" rel="noreferrer">short horror films</a>
                        {`, `}
                        <a href="https://www.youtube.com/playlist?list=PLaDrN74SfdT7Ueqtwn_bXo1MuSWT0ji2w" target="_blank" rel="noreferrer">manic over-analysis of video game lore</a>
                        {`, `}
                        <a href="https://www.youtube.com/watch?v=fhmeYoJZeOw" target="_blank" rel="noreferrer">brief puns about Edinburgh Street names</a>
                        {` and comedic music videos like this.`}
                    </p>
                    <div style = {{width: "100%", textAlign: "center"}}>
                        <iframe 
                            title= "Just One Day" 
                            src="https://www.youtube.com/embed/AdVgPCM5wEk" 
                            frameBorder="0" 
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                            allowFullScreen />
                    </div>
                </div>
            )
			
		case 17: 
            return(
                <div>
                    <h5 style = {{marginTop: "10px"}}>Milk & Cereal - G. Love & Special Sauce</h5>
                    <p>
                        {`I can't remember where I first heard this song but I feel I've always known it. I think it became 
                        a meme in the early 2000s which made it popular but it is just a genuinely wholesome tribute to the most important 
                        meal of the day: breakfast.`}
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
			
		case 18: 
            return(
                <div>
                    <h5 style = {{marginTop: "10px"}}>Insert Coins - Sky Sanctuary</h5>
                    <p>
                        {`This artist fuses retro-style video game effects with technical electric guitar riffs to capture the classic 1980s/1990s era of gaming in a fresh and modern metal setting.
                        If you enjoy this track, then the full album rocks just as hard!`}
                    </p>
                    <div style = {{width: "100%", textAlign: "center"}}>
                        <iframe 
                            title= "Insert Coins" 
                            src="https://www.youtube.com/embed/5K-KEsL8gTg" 
                            frameBorder="0" 
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                            allowFullScreen />
                    </div>
                </div>
            )

        case 19:
            return(
                <div>
                    <h5 style = {{marginTop: "10px"}}>Shatter Me - Lindsey Stirling</h5>
                    <p>
                        {`Here’s one with lyrics. As this artist is predominantly a instrumentalist, here she teams up with 
                        Lzzy Hale from the band Haelstrom to produce one of her most popular songs.`}
                    </p>
                    <div style = {{width: "100%", textAlign: "center"}}>
                        <iframe 
                            title= "Shatter Me" 
                            src="https://www.youtube.com/embed/49tpIMDy9BE" 
                            frameBorder="0" 
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                            allowFullScreen />
                    </div>
                </div>
			)
			
		case 20: 
			return(
                <div>
                    <h5 style = {{marginTop: "10px"}}>Cool Cat in Town - Tape Five</h5>
                    <p>
                        {`It's the roaring '20s again! We've had the pandemic and currently going through the economic recession so might as well
                        bring back the music too! This band, Tape Five, create Electro Swing music that is sure to get you moving in your seat.`}
                    </p>
                    <div style = {{width: "100%", textAlign: "center"}}>
                        <iframe 
                            title= "Cool Cat in Town" 
                            src="https://www.youtube.com/embed/qCRO964l_nE" 
                            frameBorder="0" 
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                            allowFullScreen />
                    </div>
                </div>
			)
			
		case 21: 
            return(
                <div>
                    <h5 style = {{marginTop: "10px"}}>Jezebel - The Rasmus</h5>
                    <p>
                        {`Earlier this year the UK came runner up at Eurovision with "Space Man" by Sam Ryder which was pretty decent entry. Although I tend
                        to find most Eurovision songs highly forgettable, this year the Finnish entry from The Rasmus, "Jezebel", stuck with me immediately. A good
                        solid dose of goth-rock!`}
                    </p>
                    <div style = {{width: "100%", textAlign: "center"}}>
                        <iframe 
                            title= "Jezebel" 
                            src="https://www.youtube.com/embed/IwHijzdNN2A" 
                            frameBorder="0" 
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                            allowFullScreen />
                    </div>
                </div>
            )
		case 22: 
            return(
                <div>
                    <h5 style = {{marginTop: "10px"}}>When You Grow Up Your Heart Dies - Gunship</h5>
                    <p>
                        {`Anemoia: a longing for a time you've never known. I feel I get this about the 80s and all
                        the synth that was everywhere. Lots of nostalgia seeping though this music video which is a tribute to that cultural era.`}
                    </p>
                    <div style = {{width: "100%", textAlign: "center"}}>
                        <iframe 
                            title= "Gunship" 
                            src="https://www.youtube.com/embed/ri9IefTuNzc" 
                            frameBorder="0" 
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                            allowFullScreen />
                    </div>
                </div>
            )
			
			
		case 23: 
            return(
                <div>
                    <h5 style = {{marginTop: "10px"}}>Friday Night - The Darkness</h5>
                    <p>
                        {`For this Friday, here is a surprisingly wholesome track from The Darkness' first album about going dancing on a Friday Night. 
                        It harkens back to the days of awkward teenage romance before we all grew up.
                        I just really gel with the line "God, the way she moves moves me to write bad poetry".`}
                    </p>
                    <div style = {{width: "100%", textAlign: "center"}}>
                        <iframe 
                            title= "Friday Night" 
                            src="https://www.youtube.com/embed/XFYXZhuXQak" 
                            frameBorder="0" 
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                            allowFullScreen />
                    </div>
                </div>
            )
			
		case 24: 
            return(
                <div>
                    <h5 style = {{marginTop: "10px"}}>All Of The People - Panama Wedding</h5>
                    <p>
                        {`I really like this band, but I think they have only relased a total of 10 songs since 2014. Good news is that they're all great! 
						If you like this song then definitely look up the rest.`}
                    </p>
                    <div style = {{width: "100%", textAlign: "center"}}>
                        <iframe 
                            title= "All of the People" 
                            src="https://www.youtube.com/embed/XG5tHmF3txc" 
                            frameBorder="0" 
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                            allowFullScreen />
                    </div>
                </div>
            )
			
		case 25: 
            return(
                <div>
                    <h5 style = {{marginTop: "10px"}}>Frosty the Snowman - Ella Fitzgerald</h5>
                    <p>
                        {`By far my favourite Christmas tune. I've loved this since I was a kid! Merry Christmas!`}
                    </p>
                    <div style = {{width: "100%", textAlign: "center"}}>
                        <iframe 
                            title= "Frosty the Snowman" 
                            src="https://www.youtube.com/embed/Hmw4Fu4XupE" 
                            frameBorder="0" 
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                            allowFullScreen />
                    </div>
                </div>
            )
			
					
		default:
			return(
                <div>
                    <h5 style = {{marginTop: "10px"}}>Secret Area</h5>
                    <p>
                        {`Still working on this. Come back later.`}
                    </p>
                    <div style = {{width: "100%", textAlign: "center"}}>
                        <iframe 
                            title= "It's a secret" 
                            src="https://www.youtube.com/embed/T37eZ55Hcmc" 
                            frameBorder="0" 
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                            allowFullScreen />
                    </div>
                </div>
            )
	}


}


export default sideBContents