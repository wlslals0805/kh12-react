import { useEffect, useState,useRef } from "react";

const Exam01 = () =>{

   const bsModal = useRef("exampleModal")
        
        const[todoList,setTodoList] = useState([

            {no:1, title:"학원가기",type:"공부",edit:false},
            {no:2, title:"영어단어외우기",type:"공부",edit:false},
            {no:3, title:"헬스장가기",type:"운동",edit:false},
            {no:4, title:"친구만나기",type:"일상",edit:false}

        ]);

        const [data,setData] = useState({no:"",title:"",type:""});


        const changeToEdit =(target)=>{

            const newTodoList = todoList.map(todo=>{

                if(todo.no === target.no){

                   return{ ...todo,
                            edit:true

                                };

            }
            return todo;
        })
        setTodoList(newTodoList);
        }


        // const addTodoList e =>{

        //     const todoNo = 

        //     const newTodoList = [
            
                
        //         ...todo,
                
        //         {
        //             ...data,
        //             edit:false
        //             no : todoNo
                    
        //         }
                
        //     ]
            
            
        }
        
    
        const [backup,setBackup]=useState([]);

        useEffect(()=>{

            setBackup(
                todoList.map((todo)=>{

                    return{
                    ...todo
                    }
                })
            )

        },[]);

        const cancel = (target) =>{

            const findBackup = backup.filter(todo=>todo.no===target.no);
           

            const newTodoList = todoList.map(todo=>{

                    if(todo.no===target.no){

                        return{
                        ...findBackup[0],//입력한 걸로 수정할 거면 target이 왔겠지만 입력한 걸로 변경되면 안돼서(취소) target역할을 대신함
                        //onChange(changeTodo)때문에 값은 이미 변했지만 
                                        //취소를 누르면 데이터가 백업으로 덮어써진다
                        edit:false
                        }
 
                    }
                    return todo;   

                
                })
                setTodoList(newTodoList)


        }

        const changeTodo = (target,e) =>{

            const newTodoList = todoList.map(todo=>{
                 
                if(todo.no === target.no){

                    return{

                        ...todo,
                        [e.target.name]:e.target.value

                    }
 
                }
                return todo;

            })
            
            setTodoList(newTodoList);


        }

        const save = (target) =>{

            // const findBackup = backup.filter(todo=>target.no===todo.no)

            const newBackup = backup.map(todo=>{

                if(target.no===todo.no){

                    return {
                        ...target             
                    };
                }
                
                return todo;
            })

            setBackup(newBackup);

            
            
            const newTodoList = todoList.map(todo=>{
                
                if(target.no===todo.no){
                    return{
                        
                        ...target,
                        edit:false
                        
                    }
                    
                    
                }
                return todo;
                
            })
            
            setTodoList(newTodoList);


        }


        const deleteTodo = (target) =>{

        
            const newTodoList = todoList.filter(todo=>todo.no!=target.no);

            setTodoList(newTodoList);


        }

        
        

        return(
            <>
        
        <div className="row mt-4">
                <div className="col">
            <table className="table">
                <thead>
            <tr>
                <td>번호</td>
                <td>제목</td>
                <td>분류</td>
                <td>관리</td>
            </tr>
            </thead>


            <tbody>

           
                {todoList.map((todo,index)=>( todo.edit ? (

                    <tr key={todo.no}>

                        <td>{todo.no}</td>
                        <td><input type="text" className="form-control" 
                        name="title" value={todo.title} 
                        onChange={e=>changeTodo(todo,e)}/></td>
                        <td><input type="text" className="form-control" 
                        name="type" value={todo.type}
                        onChange={e=>changeTodo(todo,e)}/></td>
                        <td><button className="btn btn-sm btn-warning" onClick={e=>cancel(todo)}>취소</button>
                        <button className="btn btn-sm btn-danger ms-1" onClick={e=>save(todo)}>완료</button></td>
                      
            </tr>
                )
                :
                (<tr key={todo.no}>

                    <td>{todo.no}</td>
                    <td>{todo.title}</td>
                    <td>{todo.type}</td>
                    <td><button className="btn btn-sm btn-warning" onClick={e=>changeToEdit(todo)}>수정</button>
                    <button className="btn btn-sm btn-danger ms-1" onClick={e=>deleteTodo(todo)}>삭제</button></td>
                  
        </tr>)


                ))}


            </tbody>
            

            </table>
             
            </div>


            <div className="modal fade" id="exampleModal" 
            data-bs-backdrop="static" ref={bsModal} tabIndex="-1" 
            aria-labelledby="exampleModalLabel" aria-hidden="true">

            <div className="modal-dialog">
                <div className="modal-content">
                 <div className="modal-header">
                     <h1 className="modal-title fs-5" id="exampleModalLabel">일정 변경</h1>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close">
          <sapn aria-hidden="true">&times;</sapn>
        </button>
      </div>
      <div className="modal-body">
          {/* 등록 화면 */}
          <div className="row mt-4">
            <div className="col">
              <label className="form-label">할일</label>
              <input className="form-control" type="text" name="title" value={data.title} onChange={changeData}/>
            </div>
            <div className="col">
            <label className="form-label">종류</label>
              <input type="text" className="control-form" name="type" value={data.type} onChange={changeData}/>
            </div>

           
          </div>
                 
                
      </div>
      <div className="modal-footer">
      
            <button className="btn btn-secondary" onClick={clearEditData}>취소</button>
              <button className="btn btn-success" onClick={saveTodoList}>저장</button>

      </div>
    </div>
  </div>
</div>
            </div>
            

        </>
        );




}

export default Exam01;