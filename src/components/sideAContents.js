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
						<h5 style = {{marginTop: "10px"}}>It's Beginning to Look a Lot Like Christmas - Michael Bublé</h5>
						<p>
							{`Hopefully people aren't feeling too rough after the Christmas party! Here is a nice soothing `}<del>bubbly</del> 
                            {` Bublé number to maybe take the edge off.`}
						</p>
						<div style = {{width: "100%", textAlign: "center"}}>
							<iframe 
								title= "Its beginning to look a lot like christmas"
								src="https://www.youtube.com/embed/0bhsXykXxfg" 
								frameBorder="0" 
								allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
								allowFullScreen />
						</div>
					</div>
				)
			
		case 3: 
            return(
                <div>
                    <h5 style = {{marginTop: "10px"}}>The Christmas Song - Günther</h5>
                    <p>
                        {`The first of many 'alternative' Christmas songs that haven't quite (yet) become mainstream. Günther topped the charts 
                        in Sweden with his 2004 debut single 'Ding Dong Song', and his Christmas song the following year hits many of the same notes. 
                        Mixing 70s pornstar vibes with aggressively suggestive lyrics, it's hard to see why this isn't a more widespread seasonal classic.`}
                    </p>
                    <div style = {{width: "100%", textAlign: "center"}}>
                        <iframe 
                            title= "Gunther"
                            src="https://www.youtube.com/embed/j2v9G36G5hQ" 
                            frameBorder="0" 
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                            allowFullScreen />
                    </div>
                </div>
                
            )
			
		case 4: 
            return(
                <div>
                    <h5 style = {{marginTop: "10px"}}>Santa Claus is Coming to Town - Jackson 5</h5>
                    <p>{`A fun upbeat classic Christmas tune! I couldn't find the original video for this song (if one exists) but this version contains Santa as a puppet.
                    Everything is better with puppets!`}</p>
                    <p>
                        <b>Did you know? </b>{`'Santa Claus is Coming to Town' was written in 1933 during the Great Depression and used to contain verses about charitable giving.`}
                    </p>
                    <div style = {{width: "100%", textAlign: "center"}}>
                        <iframe 
                            title= "Santa Claus is Coming to Town" 
                            src="https://www.youtube.com/embed/HhiUOCo8LYQ" 
                            frameBorder="0" 
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                            allowFullScreen />
                    </div>
                </div>
            )

        case 5: 
            return(
                <div>
                    <h5 style = {{marginTop: "10px"}}>You're a Mean One, Mr. Grinch - The Suicide Machines</h5>
                    <p>{`Our first guest submission! This one is from `}<a href="https://www.intelligentgrowthsolutions.com/crew/sam-cochrane-2" target="_blank" rel="noreferrer">Sam</a>
                    {`, with a punk rendition of the classic Dr.Seuss film "How the Grinch Stole Christmas". He says: `}</p>
                    <p>{`"These songs have become part of our houses Christmas song list. 
                    My son Jack, loves How the Grinch Stole Christmas. As part of educating my son on why punk was awesome over last Christmas, 
                    You're a Mean One , Mr. Grinch  by the Suicide Machines quickly became his favorite."`} </p>
                    <div style = {{width: "100%", textAlign: "center"}}>
                        <iframe 
                            title= "Mr Grinch" 
                            src="https://www.youtube.com/embed/I4-8GwY1bvs" 
                            frameBorder="0" 
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                            allowFullScreen />
                    </div>
                </div>
            )
			
		
        case 6: 
            return(
                <div>
                    <h5 style = {{marginTop: "10px"}}>That'll be Christmas - Thea Gilmore</h5>
                    <p>
                        {`This submission comes from `}<a href="https://www.intelligentgrowthsolutions.com/crew/dr-vinca-russell" target="_blank" rel="noreferrer">Vinca</a>{`! And in her words:`}
                    </p>
                    <p>
                        {`"Thea Gilmore has a great voice and I think her Christmas song is a very British perspective on the holiday season - 
                        it's not all cuteness and light, but about putting up with family after a few too many drinks, 
                        all the people queueing in traffic and the fact that The Sound of Music is once again the best offering on TV. 
                        It all feels quite relatable!"`}
                    </p>
                    <div style = {{width: "100%", textAlign: "center"}}>
                        <iframe 
                            title= "Thea Gilmore" 
                            src="https://www.youtube.com/embed/7qQAE794uvo" 
                            frameBorder="0" 
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                            allowFullScreen />
                    </div>
                </div>
            )
			
		case 7: 
            return(
                <div>
                    <h5 style = {{marginTop: "10px"}}>Christmas Wrapping - The Waitresses</h5>
                    <p>
                        {`This next guest submission comes from `}<a href="https://www.intelligentgrowthsolutions.com/crew/calum-robertson" target="_blank" rel="noreferrer">Calum</a>{`!`}
                    </p>
                    <p>
                        {`"I never gave this song much attention but my partner really loves it. She suggested it as a song for my son's school band 
                        to play one year at the Christmas concert and it went down really well, so I am now very fond of it."`}
                    </p>
                    <div style = {{width: "100%", textAlign: "center"}}>
                        <iframe 
                            title= "Thea Gilmore" 
                            src="https://www.youtube.com/embed/ZYE7UJSA7k0" 
                            frameBorder="0" 
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                            allowFullScreen />
                    </div>
                </div>
            )
        case 8: 
            return(
                <div>
                    <h5 style = {{marginTop: "10px"}}>Rudolph The Red-Nosed Reindeer - William Shatner </h5>
                    <p>
                        {`In his spare time, when not filming or living the real Star Trek dream and going into actual space, William Shatner produces music. His style is predominantly speaking the lyrics of songs with his
                        iconic Captain Kirk cadence. Unique? Yes. Good? You decide...`}
                    </p>
                    <div style = {{width: "100%", textAlign: "center"}}>
                        <iframe 
                            title= "Shatner" 
                            src="https://www.youtube.com/embed/wF2rjriHphg" 
                            frameBorder="0" 
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                            allowFullScreen />
                    </div>
                </div>
            )
			
		case 9: 
            return(
                <div>
                    <h5 style = {{marginTop: "10px"}}>Christmas in Hollis - Run DMC</h5>
                    <p>
                        {`A fun wholesome video that includes a star cameo from DMC's actual adoptive mother, Bannah McDaniels. This video won
                        Rolling Stones 'Best Video of the Year' 1987, beating out Michael Jackson's 'Bad' which was directed by Martin Scorcese.`}
                    </p>
                    <div style = {{width: "100%", textAlign: "center"}}>
                        <iframe 
                            title= "Run DMC" 
                            src="https://www.youtube.com/embed/OR07r0ZMFb8" 
                            frameBorder="0" 
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                            allowFullScreen />
                    </div>
                </div>
                
            )
			
		case 10: 
            return(
                <div>
                    <h5 style = {{marginTop: "10px"}}>Merry Christmas - Ed Sheeran & Elton John</h5>
                    <p>
                        {`Released only last year, this song was the UK Christmas #1 single (or at least the sausage rolls version they released with LadBaby two weeks later did).
                        Regardless whether you think Ed Sheeran is overplayed on the radio, it is hard to argue this isn't a good, wholesome Christmassy song.`}
                    </p>
                    <div style = {{width: "100%", textAlign: "center"}}>
                        <iframe 
                            title= "Ed Sheeran Merry Christmas" 
                            src="https://www.youtube.com/embed/Q_yuO8UNGmY" 
                            frameBorder="0" 
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                            allowFullScreen />
                    </div>
                </div>
                
            )
		case 11: 
            return(
                <div>
                    <h5 style = {{marginTop: "10px"}}>Stay Another Day - East 17</h5>
                    <p>
                        {`It's almost a legal requirement for boybands to release a Christmas single. 
                        Most are forgettable, but some like this one persisted, and wormed its way into our collective Christmas hearts.`}
                    </p>
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

        case 12: 
            return(
                <div>
                    <h5 style = {{marginTop: "10px"}}>The Christmas Song - Brian Lexus</h5>
                    <p>
                        {`A special guest entry from Marek! This song is by his stepfather who took up singing a few years ago!`}
                    </p>
                    <div style = {{width: "100%", textAlign: "center"}}>
                        <iframe 
                            title= "Marek stepdad" 
                            src="https://www.youtube.com/embed/BS2ZnUhmHj4" 
                            frameBorder="0" 
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                            allowFullScreen />
                    </div>
                </div>
            )
			
		case 13: 
            return(
                <div>
                    <h5 style = {{marginTop: "10px"}}>What's This? - Danny Elfman</h5>
                    <p>{`The ever raging debate: Is 'The Nightmare Before Christmas' a Halloween movie? Or a Christmas movie? Or is it both?`}</p>
                    <p>
                        <b>Did you know? </b>{`One minute of 'The Nightmare Before Christmas' took a week to shoot. This song took over a month!`}
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
			
        case 14: 
            return(
                <div>
                    <h5 style = {{marginTop: "10px"}}>Rudolph The Red-Nosed Reindeer - DMX</h5>
                    <p>
                        {`A true philosopher of our generation, posing such questions as "Where The Hood At?" and "Who Let the Dogs Out?". DMX 
                        released a full version of his rendition of Rudolph the Red-Nosed Reindeer after a clip went viral of him putting his spin
                        on this classic for a local radio station.`}
                    </p>
                    <div style = {{width: "100%", textAlign: "center"}}>
                        <iframe 
                            title= "DMX" 
                            src="https://www.youtube.com/embed/fbPyB_UxI8M" 
                            frameBorder="0" 
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                            allowFullScreen />
                    </div>
                </div>
            )

		case 15: 
            return(
                <div>
                    <h5 style = {{marginTop: "10px"}}>Last Christmas - Wham!</h5>
                    <p>
                        <b>Did you know? </b>{`This song was released in 1984 but only reached number one in the UK on New Year's Day 2021. It has also
                        reached number one in Denmark, Germany, Slovenia, and Sweden.`}
                    </p>
                    <div style = {{width: "100%", textAlign: "center"}}>
                        <iframe 
                            title= "Last Christmas" 
                            src="https://www.youtube.com/embed/E8gmARGvPlI" 
                            frameBorder="0" 
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                            allowFullScreen />
                    </div>
                </div>
            )
			
			
		case 16: 
            return(
                <div>
                    <h5 style = {{marginTop: "10px"}}>Mistletoe - Justin Bieber</h5>
                    <p>
                        {`A big throwback to 2011 when Justin Bieber was at the ripe old age of 17. One of the few Christmas tunes to include
                        the lyric 'shawty'.`}
                    </p>
                    <div style = {{width: "100%", textAlign: "center"}}>
                        <iframe 
                            title= "Mistletoe" 
                            src="https://www.youtube.com/embed/LUjn3RpkcKY" 
                            frameBorder="0" 
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                            allowFullScreen />
                    </div>
                </div>
            )
			
		case 17: 
            return(
                <div>
                    <h5 style = {{marginTop: "10px"}}>Christmas in my Pants - Mr. Weebl</h5>
                    <p>
                        <b>Warning: Slightly NSFW via heavily implied innuendo. (But you shouldn't be at work on a Saturday anyway...)</b>
                    </p>
                    <p>
                        {`If you ever visited the Newgrounds portal website in the early 2000s you will probably have a handful of this man's songs 
                        ingrained into your brain. Highlights include '`}
                        <a href="https://www.youtube.com/watch?v=au3-hk-pXsM" target="_blank" rel="noreferrer">Magical Trevor</a>
                        {`', '`}
                        <a href="https://www.youtube.com/watch?v=EIyixC9NsLI" target="_blank" rel="noreferrer">Badgers</a>
                        {`', facts about '`}
                        <a href="https://www.youtube.com/watch?v=ykwqXuMPsoc" target="_blank" rel="noreferrer">Narwhals</a>
                        {`', or `} 
                        <a href="https://www.youtube.com/watch?v=GUl9_5kK9ts" target="_blank" rel="noreferrer">how amazing his horse is</a>
                        {`. This song is an extract from a Youtube Advent Calender of his own he did in 2013.`}
                    </p>
                    <div style = {{width: "100%", textAlign: "center"}}>
                        <iframe 
                            title= "Mr Weebl" 
                            src="https://www.youtube.com/embed/1jU3RIchbjE" 
                            frameBorder="0" 
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                            allowFullScreen />
                    </div>
                    
                </div>
            )
			
		case 18: 
            return(
                <div>
                    <h5 style = {{marginTop: "10px"}}>Santa Claus Is Watching You - Ray Stevens</h5>
                    <p>
                        {`A jaunty tongue-in-cheek tribute to the fact that Santa Claus is performing Orwellian, ever-present surveillance on
                        the population at large. You better watch out...`}
                    </p>
                    <div style = {{width: "100%", textAlign: "center"}}>
                        <iframe 
                            title= "Santa Claus Is Watching You" 
                            src="https://www.youtube.com/embed/mER2fGuSqF8" 
                            frameBorder="0" 
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                            allowFullScreen />
                    </div>
                </div>
            )
			
		case 19: 
            return(
                <div>
                    <h5 style = {{marginTop: "10px"}}>Carol of the Bells - Lindsey Stirling</h5>
                    <p>
                        {`This artist simultaneously combines dance choreography and violin performances to make hypnotic, stylised music videos. 
                        Fun to listen to but also fun to watch too!`}
                    </p>
                    <div style = {{width: "100%", textAlign: "center"}}>
                        <iframe 
                            title= "Carol of the Bells" 
                            src="https://www.youtube.com/embed/EKkzbbLYPuI" 
                            frameBorder="0" 
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                            allowFullScreen />
                    </div>
                </div>
            )
			
		case 20: 
			return(
                <div>
                    <h5 style = {{marginTop: "10px"}}>I Wish It Could Be Christmas Everyday - Wizzard</h5>
                    <p>
                        <b>Did you know? </b>{`On release this track got pipped to number one by Slade so they decided to re-release it in 1981. Unfortunately,
                        they had lost all the original recordings to the song so they had to re-record it. The version in this video is the
                        original 1973 version.`}
                    </p>
                    <div style = {{width: "100%", textAlign: "center"}}>
                        <iframe 
                            title= "Wizzard" 
                            src="https://www.youtube.com/embed/IJPc7esgvsA" 
                            frameBorder="0" 
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                            allowFullScreen />
                    </div>
                </div>
            )
			
		case 21: 
            return(
                <div>
                    <h5 style = {{marginTop: "10px"}}>Joel, the Lump of Coal - The Killers</h5>
                    <p>
                        {`The Killers released a Christmas song every year from 2006 to 2016 with all the proceeds donated to charity.
                        They're a little... strange... but I guess it's all for charity!`}
                    </p>
                    <div style = {{width: "100%", textAlign: "center"}}>
                        <iframe 
                            title= "Joel the Lump of Coal" 
                            src="https://www.youtube.com/embed/6xZ3Ezl5-Lk?start=315" 
                            frameBorder="0" 
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                            allowFullScreen />
                    </div>
                </div>
            )
		case 22: 
            return(
                <div>
                    <h5 style = {{marginTop: "10px"}}>The Santa Claus Boogie - The Tractors</h5>
                    <p>
                        {`There is a lot of country/western Christmas music that doesn’t really seem to penetrate the charts in the UK. 
                        But if you’re looking for something new to jazz up your Christmas playlist then this might be an entry.`}
                    </p>
                    <div style = {{width: "100%", textAlign: "center"}}>
                        <iframe 
                            title= "Santa Claus Boogie" 
                            src="https://www.youtube.com/embed/aUrWFBfz3SM" 
                            frameBorder="0" 
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                            allowFullScreen />
                    </div>
                </div>
            )
				
		case 23: 
            return(
                <div>
                    <h5 style = {{marginTop: "10px"}}>Christmas Time (Don't Let the Bells End) - The Darkness</h5>
                    <p>
                        {`Apparently, the entire premise of this song is to include a blatant double-entendre in a song without getting it banned. 
                        When interviewed about the writing the lyrics of this song, lead singer Justin Hawkins said, "The thing that was important to me was 'bells end' and 'ring in piece'… they're nearly rude. 
                        But what we had the children's choir sing was 'bellend' and 'ringpiece'."`}
                    </p>
                    <div style = {{width: "100%", textAlign: "center"}}>
                        <iframe 
                            title= "The Darkness" 
                            src="https://www.youtube.com/embed/lrVg1toMzuo" 
                            frameBorder="0" 
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                            allowFullScreen />
                    </div>
                </div>
            )
			
		case 24: 
            return(
                <div>
                    <h5 style = {{marginTop: "10px"}}>One More Sleep - Leona Lewis</h5>
                    <p>
                        {`Only one more sleep until Christmas Day! Hope everyone has been good they get the presents they want this year!`}
                    </p>
                    <div style = {{width: "100%", textAlign: "center"}}>
                        <iframe 
                            title= "One More Sleep" 
                            src="https://www.youtube.com/embed/j-_1-uJ6Ml4" 
                            frameBorder="0" 
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                            allowFullScreen />
                    </div>
                </div>
            )
			
		case 25: 
            return(
                <div>
                    <h5 style = {{marginTop: "10px"}}>Merry Xmas Everybody - Slade</h5>
                    <p>
                        {`It's not Christmas until Noddy Holder says it is! Merry Christmas everyone! Hope you enjoyed the Calendar!`}
                    </p>
                    <p>
                        {`See you all next year!`}
                    </p>
                    <div style = {{width: "100%", textAlign: "center"}}>
                        <iframe 
                            title= "Merry Xmas Everybody" 
                            src="https://www.youtube.com/embed/PTslBTBl1X8" 
                            frameBorder="0" 
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                            allowFullScreen />
                    </div>
                </div>
            )
			
					
		default:
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
	}


}


export default sideAContents