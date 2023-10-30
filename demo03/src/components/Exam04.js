import {useState2, useRef} from 'react';
import {useState} from 'react';

function Exam04(){

    const [length,setLength] = useState(0);


    return (
        <>
        <h1>(Q) 주말에 뭐하세요?</h1>
        <textarea className="form-control" onChange={e=>setLength(e.target.textLength)}></textarea>
        <div className='text-end'>{length}/1000 bytes</div>
        </>

    );

}

export default Exam04;