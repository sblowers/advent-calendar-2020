import haveaniceday from "../images/haveaniceday.gif"


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
                        the best but also the most frustrating people to live with. Summed up neatly with this song: `}
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
			
		case 6: 
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
			
		case 7: 
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
			
		case 8: 
            return(
                <div>
                    <h5 style = {{marginTop: "10px"}}>Fighting Trousers - Professor Elemental & Nicknackatory - Mr.B The Gentleman Rhymer</h5>
                    <p>
                        {`I recently came across this genre of music that I filed under incredibly 'Incredibly Posh British Rap' but I think
                        it is officially called 'Chap Hop'. I think these are both dis tracks aimed at the other artist. Which of these two do you think wins 
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
                        {`This might be a little slower than the rest of the other songs in here but it certainly has the
                        most wholesome lyrics of all the songs in the list. Also as an aside, this is one of only two songs I have ever had as a ringtone for my
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
			
		case 12: 
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
			
		case 13: 
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
			
		case 14: 
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
		case 15: 
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
			
			
		case 16: 
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
			
		case 17: 
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
			
		case 18: 
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

        case 19:
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
			
		case 20: 
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
			
		case 21: 
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
		case 22: 
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
			
			
		case 23: 
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
			
		case 24: 
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
			
		case 25: 
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
			
					
		default:
			return
	}


}


export default sideBContents