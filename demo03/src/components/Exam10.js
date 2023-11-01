import { useState } from "react";

const Exam10 = () =>{

    const[items,setItems] = useState([

        
            {itemNo:1, itemName:"포켓몬스터빵", itemPrice:500, itemType:"식품"},
            {itemNo:2, itemName:"허니버터칩", itemPrice:1300, itemType:"식품"},
            {itemNo:3, itemName:"참이슬후레시", itemPrice:2200, itemType:"주류"},
            {itemNo:4, itemName:"카스", itemPrice:2500, itemType:"주류"},
            {itemNo:5, itemName:"테라", itemPrice:1300, itemType:"주류"},
            {itemNo:6, itemName:"켈리", itemPrice:1400, itemType:"주류"},
            {itemNo:7, itemName:"처음처럼", itemPrice:2000, itemType:"주류"},
            {itemNo:8, itemName:"오징어땅콩", itemPrice:3500, itemType:"식품"},
            {itemNo:9, itemName:"신라면", itemPrice:1500, itemType:"식품"},
            {itemNo:10, itemName:"하리보젤리", itemPrice:5500, itemType:"식품"}
        

    ]);

    return(
        <>

        <h1>객체 배열 상태변수2</h1>

            {items.map((item,index)=>
            
            <div key={item.itemNo}>
                {index}
                -
                {item.itemNo}
                -
                {item.itemName}
                -
                {item.itemPrice}
                -
                {item.itemType}

            </div>
            
            
            )}
        
        </>

    );


}

export default Exam10;