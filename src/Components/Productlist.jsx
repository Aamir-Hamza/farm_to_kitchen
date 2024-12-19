import axios from 'axios'
import { useEffect ,useState} from 'react'

const URL ="https://farm-to-kitchen-ab130-default-rtdb.firebaseio.com/products.json"

const Productlist = () =>{
    const [data, setData] = useState([])

    async function Getlist(){
         let res = await axios.get(URL) 

         let arr=[]
         if (res.data){
            for (let key in res.data){
            arr.push({id:key,...res.data[key]})
         }
         setData(arr)
        }
         
     }
     useEffect(()=>{
         Getlist()
     },[])
    return(

        <div className='mainpcard'>
            
            {data.map((data)=>(
            <div key={data.id} className='productcard'>
                <div><img src={data.img} alt={data.name} /></div>
                <div className='middesc'>
                    <h1>{data.name}</h1>
                    <h3>{data.desc}</h3>
                    <h2>RS: {data.price}</h2>
                </div>
                
                
                <div className='upbutton'>
                <button>update</button>
                <button>remove</button>

                </div>
                   
                
                


            </div>
        ))}

        </div>
    )
}
export default Productlist