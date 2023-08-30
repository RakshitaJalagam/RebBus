import Background from "./Background"


const trendingoffers=[
    {imglink:"https://st.redbus.in/images/FIRST/first_26th_sep_2022_ravi/tile-80X80.png",
      text:"Bus",
      save:"Save up to Rs 250 on Bus Tickets",
      valid:"Till 31st Aug",
      score:"FIRST",
      Backgroundcolor:"green"
    },
    {imglink:"http://st.redbus.in/Images/INDOFFER/SUPERHIT/80x80_SUPERHIT.png",
      text:"Bus",
      save:"Save up to Rs 300 in AP,TS Routes",
      valid:"Till 31st Aug",
      score:"SUPERHIT",
      Backgroundcolor:"red"
    },
    {imglink:"https://st.redbus.in/Images/INDOFFER/BUS200/80x80_BUS200.png",
      text:"Bus",
      save:"Save up to Rs 200 in Gujarat and MP",
      valid:"Till 31st Aug",
      score:"First",
      Backgroundcolor:"green"
    },
    {imglink:"https://st.redbus.in/Images/INDOFFER/RB200/80x80_RB200.png",
      text:"Bus",
      save:"Save up to Rs 200 in Rajasthan",
      valid:"Till 31st Aug",
      score:"RB200",
      Backgroundcolor:"green"
    }

]
//import React from 'react'
//import '../Project./Offers.css'

function Offers() {
  return (
    <div >
        {trendingoffers.map((x)=>{
       return <div classname='offer'>
             {/* <div> */}
                 <img src={x.imglink}></img>
             {/* </div> */}
            {/* <div> */}
                 <h4>{x.text}</h4>
                 <h3>{x.save}</h3>
                 <p>{x.valid}</p>
                 <p>{x.score}</p>
             {/* </div> */}
            </div>
        })
    }
    
    
    </div>
  )
}

export default Offers