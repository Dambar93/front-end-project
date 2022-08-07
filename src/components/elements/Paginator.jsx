import React, {useState, useEffect} from "react";
import Pagination from 'react-bootstrap/Pagination';




const Paginator = ({page, lastPage}) =>{

    const [page,setPage] = useState(page);
    return(
        <div>
            {console.log(list)}
            {console.log(lastPage)}
            <Pagination>
                <Pagination.First onClick={()=>setPage(1)}/>
                <Pagination.Prev onClick={()=>{if(page!==1){setPage(page-1)} else {setPage(1)} }}/>
                <Pagination.Item>{page-2}</Pagination.Item>
                <Pagination.Item style={{display: "none" }}>{}</Pagination.Item>
                <Pagination.Item active>{page}</Pagination.Item>
                <Pagination.Item>{10}</Pagination.Item>
                <Pagination.Item>{11}</Pagination.Item>
                <Pagination.Next onClick={()=>{if(page!==lastPage){setPage(page+1)} else {setPage(lastPage)} }}/>
                <Pagination.Last onClick={()=>setPage(lastPage)}/>
            </Pagination>
        </div>
    )
}

export default Paginator;