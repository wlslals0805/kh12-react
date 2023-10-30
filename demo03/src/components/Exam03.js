import {useState} from 'react';

function Exam03(){

    const[size,setSize]=useState(0);

    function formatCurrency(amount) {
        return new Intl.NumberFormat('ko-KR', { style: 'currency', currency: 'KRW' }).format(amount);
      }


    return(
    
        <>


        
        <h1>출금 금액 : {formatCurrency(size)}</h1>
        <button className="btn btn-primary" onClick={()=>setSize(size+100000)}>10만원</button>
        <button className="btn btn-primary ms-2" onClick={()=>setSize(size+50000)}>5만원</button>
        <button className="btn btn-primary ms-2" onClick={()=>setSize(size+10000)}>1만원</button>
        <button className="btn btn-primary ms-2" onClick={()=>setSize(0)}>초기화</button>
        <br/>
        <input type="range" min="0" max="100000000" step="10000" value={size} onChange={e=>setSize(parseInt(e.target.value))}/>
        
        
        </>


    );

}
export default Exam03;