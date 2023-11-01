import { useEffect, useState } from "react";

const Exam05 = ()=>{
    //state를 3개로 보면 = (java,dbms,boot)
    //state를 5개로 보면 = (java,dbms,boot) -> total avg

    const[java,setJava] = useState(0);
    const[dbms,setDbms] = useState(0);
    const[boot,setBoot] = useState(0);
    const[total,setTotal] = useState(0);
    const[avg,setAvg] = useState(0);

    useEffect(()=>{setTotal(java + dbms + boot)},[java,dbms,boot]);
    useEffect(()=>{setAvg(total/3)},[total]);

    return (
        <>
        <div className="container-fluid">
            <div className="row">
                <div className="col-md-10 offset-md-1">
                    <div className="row">
                        <div className="col">
        <h1>성적 계산기</h1>

                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            자바<input type="number" value={java}
                            onChange=
                            {e=>setJava(parseInt(e.target.value))}
                          />점
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            데이터베이스<input type="number" value={dbms} 
                            onChange={
                                e=>setDbms(parseInt(e.target.value))
                            }
                           />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            스프링부트<input type="number" value={boot}
                            onChange={
                                e=>setBoot(parseInt(e.target.value))}
                            />
                        </div>
                    </div>
        <hr/>
        <div className="row">
                        <div className="col">
                            총점=<span>{total}</span>점,
                            평균=<span>{avg}</span>점
                          
                        </div>
                    </div>

                </div>


            </div>



        </div>
        
        
        </>



    );


};

export default Exam05;