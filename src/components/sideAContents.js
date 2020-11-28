
import number1 from "../images/numbers/1.png"
import number2 from "../images/numbers/2.png"
import number3 from "../images/numbers/3.png"
import number4 from "../images/numbers/4.png"
import number5 from "../images/numbers/5.png"
import number6 from "../images/numbers/6.png"
import number7 from "../images/numbers/7.png"
import number8 from "../images/numbers/8.png"
import number9 from "../images/numbers/9.png"
import number10 from "../images/numbers/10.png"
import number11 from "../images/numbers/11.png"
import number12 from "../images/numbers/12.png"
import number13 from "../images/numbers/13.png"
import number14 from "../images/numbers/14.png"
import number15 from "../images/numbers/15.png"
import number16 from "../images/numbers/16.png"
import number17 from "../images/numbers/17.png"
import number18 from "../images/numbers/18.png"
import number19 from "../images/numbers/19.png"
import number20 from "../images/numbers/20.png"
import number21 from "../images/numbers/21.png"
import number22 from "../images/numbers/22.png"
import number23 from "../images/numbers/23.png"
import number24 from "../images/numbers/24.png"
import number25 from "../images/numbers/25.png"


const sideAContents = (door_id) => {
	switch(door_id+1) {
		case 1: 
			return(
				<>
					<img src={number1} alt="" className = "content-number" style={{width: "10%"}}/>
					{"24 Days till Christmas!"}
				</>
			)
			
			
		case 2: 
			return(
				<>
					<img src={number2} alt="" className = "content-number" style={{width: "13.3%"}}/>
					{"23 Days till Christmas!"}
				</>
			)
			
		case 3: 
			return(
				<>
					<img src={number3} alt="" className = "content-number" style={{width: "13.26%"}}/>
					{"22 Days till Christmas!"}
				</>
			)
			
		case 4: 
			return(
				<>
					<img src={number4} alt="" className = "content-number" style={{width: "14.1%"}}/>
					{"21 Days till Christmas!"}
				</>
			)
			
		case 5: 
			return(
				<>
					<img src={number5} alt="" className = "content-number" style={{width: "13.18%"}}/>
					{"20 Days till Christmas!"}
				</>
			)
			
		case 6: 
			return(
				<>
					<img src={number6} alt="" className = "content-number" style={{width: "13.69%"}}/>
					{"19 Days till Christmas!"}
				</>
			)
			
		case 7: 
			return(
				<>
					<img src={number7} alt="" className = "content-number" style={{width: "13.34%"}}/>
					{"18 Days till Christmas!"}
				</>
			)
			
		case 8: 
			return(
				<>
					<img src={number8} alt="" className = "content-number" style={{width: "13.16%"}}/>
					{"17 Days till Christmas!"}
				</>
			)
			
			
		case 9: 
			return(
				<>
					<img src={number9} alt="" className = "content-number" style={{width: "13.69%"}}/>
					{"16 Days till Christmas!"}
				</>
			)
			
		case 10: 
			return(
				<>
					<img src={number10} alt="" className = "content-number" style={{width: "23.33%"}}/>
					{"15 Days till Christmas!"}
				</>
			)
			
		case 11: 
			return(
				<>
					<img src={number11} alt="" className = "content-number" style={{width: "21.05%"}}/>
					{"14 Days till Christmas!"}
				</>
			)
			
		case 12: 
			return(
				<>
					<img src={number12} alt="" className = "content-number" style={{width: "24.65%"}}/>
					{"13 Days till Christmas!"}
				</>
			)
			
		case 13: 
			return(
				<>
					<img src={number13} alt="" className = "content-number" style={{width: "23.95%"}}/>
					{"12 Days till Christmas!"}
				</>
			)
			
		case 14: 
			return(
				<>
					<img src={number14} alt="" className = "content-number" style={{width: "23.65%"}}/>
					{"11 Days till Christmas!"}
				</>
			)
		case 15: 
			return(
				<>
					<img src={number15} alt="" className = "content-number" style={{width: "23.34%"}}/>
					{"10 Days till Christmas!"}
				</>
			)
			
			
		case 16: 
			return(
				<>
					<img src={number16} alt="" className = "content-number" style={{width: "23.47%"}}/>
					{"9 Days till Christmas!"}
				</>
			)
			
		case 17: 
			return(
				<>
					<img src={number17} alt="" className = "content-number" style={{width: "23.61%"}}/>
					{"8 Days till Christmas!"}
				</>
			)
			
		case 18: 
			return(
				<>
					<img src={number18} alt="" className = "content-number" style={{width: "23.87%"}}/>
					{"7 Days till Christmas!"}
				</>
			)
			
		case 19: 
			return(
				<>
					<img src={number19} alt="" className = "content-number" style={{width: "23.24%"}}/>
					{"6 Days till Christmas!"}
				</>
			)
			
		case 20: 
			return(
				<>
					<img src={number20} alt="" className = "content-number" style={{width: "27.92%"}}/>
					{"5 Days till Christmas!"}
				</>
			)
			
		case 21: 
			return(
				<>
					<img src={number21} alt="" className = "content-number" style={{width: "24.25%"}}/>
					{"4 Days till Christmas!"}
				</>
			)
		case 22: 
			return(
				<>
					<img src={number22} alt="" className = "content-number" style={{width: "27.55%"}}/>
					{"3 Days till Christmas!"}
				</>
			)
			
			
		case 23: 
			return(
				<>
					<img src={number23} alt="" className = "content-number" style={{width: "27.41%"}}/>
					{"2 Days till Christmas!"}
				</>
			)
			
		case 24: 
			return(
				<>
					<img src={number24} alt="" className = "content-number" style={{width: "28.10%"}}/>
					{"1 Days till Christmas!"}
				</>
			)
			
		case 25: 
			return(
				<>
					<img src={number25} alt="" className = "content-number" style={{width: "27.20%"}}/>
					{"Merry Christmas!"}
				</>
			)
			
					
		default:
			return(door_id + 1)
	}


}


export default sideAContents