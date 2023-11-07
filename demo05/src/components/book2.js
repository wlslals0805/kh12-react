import { useEffect, useRef, useState } from "react";
import axios from "axios";
import {LiaEdit} from "react-icons/lia";
import {AiFillDelete} from "react-icons/ai";
import { Modal } from "bootstrap";
import {AiOutlinePlus} from "react-icons/ai";

import "./book.css";

const Book = (props)=>{
    const [bookList, setBookList] = useState([]);

    // const loadBook = () => {

    //     axios({
    //         url:`${process.env.REACT_APP_REST_API_URL}/book/`,
    //         method:"get"
    //     })
    //     .then(response=>{
    //         setBookList(response.data);
    //     })
    //     .catch(err=>{
    //         window.alert("통신 오류 발생");
    //     });

    // }

    const loadBook = async () =>{
        const response = await axios({
            url:`${process.env.REACT_APP_REST_API_URL}/book/`,
            method:"get"


        });
        setBookList(response.data);

    }

    useEffect(()=>{

        loadBook();


    },[])

    const [book,setBook] = useState({bookTitle:"",bookAuthor:"",bookPrice:0,bookPublicationDate:"",
                                    bookPublisher:"",bookPageCount:0,bookGenre:""});
                                    //changeBook을 위한 변수
    
    const changeBook=(e)=>{
           
        setBook({
            ...book,
            [e.target.name]: e.target.value

        })

    
}

    const editOpen=(target)=>{

        
        setBook({
            ...target
        });
        openModal();
        
        
    }

 
    
    
    
    // const copyBook = {...book};
    // delete copyBook.bookId;

    // const editBook=()=>{

    //     axios({
    //         url:`${process.env.REACT_APP_REST_API_URL}/book/${book.bookId}`,
    //         method:"put",
    //         data:{
    //             bookTitle:book.bookTitle,
    //             bookAuthor:book.bookAuthor,
    //             bookPrice:book.bookPrice,
    //             bookPublicationDate:book.bookPublicationDate,
    //             bookPublisher:book.bookPublisher,
    //             bookPageCount:book.bookPageCount,
    //             bookGenre:book.bookGenre}
    //             // copyBook
            
    //     })
    //     .then(response=>{
    //         loadBook();
    //         closeModal();}
            
    //         )
    //         .catch({})
            
    //     }

    const copyBook = {...book};
    delete copyBook.bookId;

    const editBook = async ()=>{

        const response = await axios({

            url:`${process.env.REACT_APP_REST_API_URL}/book/${book.bookId}`,
            method:"put",
            data : copyBook

        })
        closeModal();
        clearBook();
        loadBook();
        

    };


        
        // const saveBook=()=>{
            
        //     axios({
        //         url:`${process.env.REACT_APP_REST_API_URL}/book/`,
        //         method:"post",
        //         data:{
                    
        //             ...book
                    
                    
        //         }    
                
        //     })
        //     .then(response=>{
                
        //         closeModal();
        //         loadBook();
        //     }
        //     )
        //     .catch()
            
        // }
        
     
        
        //async 함수와 await 키워드를 사용한 간소화 작업이 가능
        //-비동기 작업을 동기화된 코드로 작성할 수 있다
        const saveBook = async () =>{
            const response = await axios({

                url:`${process.env.REACT_APP_REST_API_URL}/book/`,
                        method:"post",
                        data:book})
            closeModal();
            loadBook();
            
        };
        
        
        const clearBook = () =>{
            
            setBook({
                bookTitle:"",bookAuthor:"",bookPrice:0,bookPublicationDate:"",
                                    bookPublisher:"",bookPageCount:0,bookGenre:""
            })
            
        }
        
        
        
        //서버에 있는 도서 정보를 불러와서 state에 반영하는 코드
        
        
        
        
        const deleteBook = (book)=>{
            
            const choice = window.confirm("정말 삭제하시겠습니까?")
            if(choice === false) return;
            
            axios({
                url:`${process.env.REACT_APP_REST_API_URL}/book/${book.bookId}`,
                method:"delete"
                
            }).then(response=>{
                
                loadBook();
            }).catch(err=>{});
            
        }
        
        const bsModal= useRef();
        
        const openModal=()=>{
            
            const modal = new Modal(bsModal.current);
            
            modal.show();
        }
        
        const closeModal=()=>{
            
            const modal = Modal.getInstance(bsModal.current);
            
            clearBook();

            modal.hide();

            
            
        }

      

      

      
        
        
        
        
    return (
        <>
            <div className="row">
                <div className="col">
                    <h1>도서 관리 화면</h1>
                    <hr/>
                </div>
            </div>

           

            {/* 추가 버튼 */}
            <div className="row mt-4">
                <div className="col text-end">
                    <button className="btn btn-success" onClick={openModal}>
                        <AiOutlinePlus/>
                        추가
                    </button>
                </div>
            </div>

            <div className="row mt-4">
                <div className="col">
                    <table className="table">
                        <thead>
                            <tr>
                                <th className="pc-only">코드</th>
                                <th>제목</th>
                                <th>저자</th>
                                <th className="pc-only">출판사</th>
                                <th className="pc-only">출간일</th>
                                <th>판매가</th>
                                <th className="pc-only">페이지</th>
                                <th className="pc-only">장르</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {bookList.map((book, index)=>(
                                <tr>
                                    <td className="pc-only">{book.bookId}</td>
                                    <td>{book.bookTitle}</td>
                                    <td>{book.bookAuthor}</td>
                                    <td className="pc-only">{book.bookPublisher}</td>
                                    <td className="pc-only">{book.bookPublicationDate}</td>
                                    <td>{book.bookPrice}</td>
                                    <td className="pc-only">{book.bookPageCount}</td>
                                    <td className="pc-only">{book.bookGenre}</td>
                                    <td>
                                        {/* 아이콘 자리 */}
                                        <LiaEdit className="text-warning"
                                        onClick={e=>editOpen(book)}/>
                                        <AiFillDelete className="text-danger" 
                                        onClick={e=>deleteBook(book)}/>
                                    </td>
                                </tr>
                            ))}
                            
                        </tbody>
                    </table>                    
                </div>
            </div>

            {/* Modal */}
            <div className="modal fade" ref={bsModal} 
                        data-bs-backdrop="static" tabIndex="-1" role="dialog" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" >
                        {book.bookId === undefined /*번호라는 항목이 들어오지도 않아서 null도 아닌 undefined*/ 
                        ? 
                        '신규 도서 등록' : book.bookId+'번 도서 수정'}
                        </h5>
                        <button type="button" className="close border-0 bg-transparent" data-dismiss="modal" aria-label="Close" onClick={closeModal}>
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">

                        <div className="row">
                            <div className="col">
                                <label className="form-label">제목</label>
                                <input type="text" name="bookTitle" className="form-control"
                                        value={book.bookTitle} onChange={changeBook}/>
                            </div>
                        </div>

                        <div className="row mt-4">
                            <div className="col">
                                <label className="form-label">작가</label>
                                <input type="text" name="bookAuthor" className="form-control"
                                        value={book.bookAuthor} onChange={changeBook}/>
                            </div>
                        </div>

                        <div className="row mt-4">
                            <div className="col">
                                <label className="form-label">출간일</label>
                                <input type="text" name="bookPublicationDate" className="form-control"
                                        value={book.bookPublicationDate} onChange={changeBook}/>
                            </div>
                        </div>

                        <div className="row mt-4">
                            <div className="col">
                                <label className="form-label">가격</label>
                                <input type="text" name="bookPrice" className="form-control"
                                        value={book.bookPrice} onChange={changeBook}/>
                            </div>
                        </div>

                        <div className="row mt-4">
                            <div className="col">
                                <label className="form-label">출판사</label>
                                <input type="text" name="bookPublisher" className="form-control"
                                        value={book.bookPublisher} onChange={changeBook}/>
                            </div>
                        </div>

                        <div className="row mt-4">
                            <div className="col">
                                <label className="form-label">페이지수</label>
                                <input type="text" name="bookPageCount" className="form-control"
                                        value={book.bookPageCount} onChange={changeBook}/>
                            </div>
                        </div>

                        <div className="row mt-4">
                            <div className="col">
                                <label className="form-label">장르</label>
                                <input type="text" name="bookGenre" className="form-control"
                                        value={book.bookGenre} onChange={changeBook}/>
                            </div>
                        </div>

                    </div>
                    <div className="modal-footer">
                        <button className="btn btn-secondary" onClick={closeModal}>닫기</button>
                        {book.bookId === undefined/*번호라는 항목이 들어오지도 않아서 null도 아닌 undefined*/ 
                        ? 
                        <button className="btn btn-success" onClick={saveBook}>저장</button> 
                        : 
                        <button className="btn btn-success" onClick={editBook}>수정</button>
                            }
                    </div>
                    </div>
                </div>
            </div>

        </>
    );
};

export default Book;