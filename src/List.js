import React from "react"
import { useState } from "react/cjs/react.development"

const NameList = (props) =>{
    // const emra = [
    //     {id:' oni1 ',emer:' Marjonn ', mbiemer:' Domi '},
    //     {id:' oni2 ',emer:' Marjon ', mbiemer:' Domi '},
    //     {id:' oni3 ',emer:' Marjon ', mbiemer:' Domi '}
    
    // ]
    const [searchInput,setSerchInput] = useState ('');
    const [data,setData] = useState (props.dataaaa);

   const searchValue=(value)=>{
     console.log(value)
     setSerchInput(value);
  }

    console.log(data)
    const getItem =(itemget)=>{
        return <li key={itemget.id}><button title={itemget.emer}>{itemget.emer}</button>Kjo id {itemget.id}i referohet {itemget.emer}{itemget.mbiemer}</li>
       
    }

    return <div><input type="text" name="name"  onChange={e => searchValue(e.target.value)} value={searchInput}/>{data.map(item => getItem(item))}
      </div>
    
    //console.log() 
  }
  
  const getItem =(item)=>{
    return <li key={item.id}><button title={item.emer}>{item.emer}</button>kjo id {item.id}{item.emer}</li>
}
  export default NameList;