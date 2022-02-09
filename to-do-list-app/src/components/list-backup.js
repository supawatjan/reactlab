import '../App.css';
import {useContext, useEffect, useState } from "react";
import {DataContext} from "../App"
import { FiDelete,FiEdit3 } from "react-icons/fi";


const AllList = () =>{
    const {newList,setNewList, savedLists, setSavedLists, setAlert, editListName, setEditListName} = useContext(DataContext)
    const [onEdit,setOnEdit] = useState(false)
    const [listEditingId, setlistEditingId] = useState("")
    const [editClassName, setEditClassName] = useState("")
    
    
    
    const deleteList=(listID)=>{
        setSavedLists(savedLists.filter((element)=>
            element.id !== listID
        ));
        setAlert({isShow:true,msg:"Delete Completed",className:"negative"})
        
    }
    const editList = (listID)=>{
        setOnEdit(!onEdit)
        
        const searchList = savedLists.find((element)=>
            element.id === listID
        );
        
        setEditListName(searchList.listName)
        setEditClassName("editing")
        setlistEditingId(listID)
    }
    const editedList=(listID)=>{
        setOnEdit(!onEdit)
        // const searchList = savedLists.find((element)=>
        //     element.id === listID
        // );

    }
    useEffect(()=>{
        if(!onEdit){ // onEdit = true the msg show
            setAlert({isShow:true,msg:"Edit Completed",className:"positive"})
            setEditClassName("")
        }else{
            
        }
    },[onEdit])

    return(
        <div className="all-list">
            {savedLists.length <= 0 && <h2>Empty List</h2>}
            {savedLists.length > 0 && <h2>All List</h2>}
            <div className='a-list-container'>
                {savedLists.map((element,index)=>{
                    /**/
                    return (
                        <div className={`a-list ${editClassName}`} key={index}>
                            {!onEdit && <p>{element.listName}</p>}
                            {onEdit &&
                                <input type="text" className="edit-text" 
                                    onChange={(e)=>element.listName = (e.target.value)} 
                                    value={element.listName}
                                    autoFocus
                                    
                                />}
                            <div className='a-list-btn'> 
                                {!onEdit &&<button type='button' onClick={()=>editList(savedLists[index].id)}><FiEdit3/></button>}
                                {onEdit && <button type='submit' className="save-btn" onClick={()=>editedList(savedLists[index].id)}>save</button>}
                                <button onClick={()=>deleteList(savedLists[index].id)}><FiDelete/></button>
                            </div>
                            
                                
                            
                        </div>
                        

                        
                    )
                })}
                
            </div>
        </div>
    )
}

export default AllList