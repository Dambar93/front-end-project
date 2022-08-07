import React, {useState, useEffect} from "react";
import axios from 'axios';
import Pagination from 'react-bootstrap/Pagination';
import Table from 'react-bootstrap/Table';
import { Button } from "react-bootstrap";
import PartTable from "../elements/PartTable";






const NewList = () =>{

    const [list, setList] = useState([]);
    const [page,setPage] = useState(1);
    const [lastPage, setlastPage]= useState(1);
    const URL='http://localhost/';
    

    useEffect(() => {

        axios.get(`${URL}api/part-list/new?page=${page}`)
            .then((response) => {
            setList(response.data.data); setlastPage(response.data.meta.last_page);
          });


    }, [page])

    return(
        <div>

            <PartTable list={list} URL={URL}/>
            <Pagination>
                <Pagination.First onClick={()=>setPage(1)}/>
                <Pagination.Prev onClick={()=>{if(page!==1){setPage(page-1)} else {setPage(1)} }}/>

                <Pagination.Item active>{page}</Pagination.Item>

                <Pagination.Next onClick={()=>{if(page!==lastPage){setPage(page+1)} else {setPage(lastPage)} }}/>
                <Pagination.Last onClick={()=>setPage(lastPage)}/>
            </Pagination>
        </div>
    )
}

export default NewList;