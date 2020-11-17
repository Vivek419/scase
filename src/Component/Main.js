import React, { useState, useEffect } from 'react';
import Modal from 'react-modal'
import { useDispatch, useSelector } from "react-redux";
import styled from 'styled-components'
import { Add_To_List,FF} from '../redux/action'
import Select from 'react-select'
import DatePicker from "react-datepicker";
import { useForm } from 'react-hook-form'
import "react-datepicker/dist/react-datepicker.css";






const Button = styled.button`
  background: #9B9897;
  border: 2px solid #9B9897;
  color: black;
  margin: 0.5em 1em;
  padding: 0.25em 1em;`
const Input = styled.input`
  height: 2ch;
  width:45%
  `
const style = {
    content: {
        border: '0',
        bottom: 'auto',
        minHeight: '40%',
        left: '45%',
        padding: '15px',
        position: 'fixed',
        right: 'auto',
        top: '50%',
        transform: 'translate(-40%,-40%)',
        minWidth: '20rem',
        width: '50%',
        maxWidth: '42rem',
        backgroundColor: "#ABAFB3"
    }
};


export default function MainPage(props) {
    const bookM = useSelector((state) => state);
    console.log(bookM)
    const {register,handleSubmit}=useForm()
    const dispatch = useDispatch();
    const [get, set] = useState(props.location.state.name);
    const [name, setname] = useState()
    const [getModal, setModal] = useState(false);
    
   



 const submit =(e)=>{
    //  console.log("VIVEK",e)
    
    dispatch(Add_To_List([e],name));
 }
    const handleblock = (e) => {
         console.log(e)
         dispatch(FF(e))
        
    };
   

    useEffect(() => {
        
        
    }, [bookM])


    return (
        <>
            <div style={{ marginTop: "8%", display: "flex", justifyContent: "center", alignItems: "center" }}>
                <div>
                    <p>Welcome to {get}'s education page</p>
                    <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                        <Button onClick={() => { setModal(true) }}>Add new education</Button>

                    </div>
                </div> <br />
            </div>
            <div style={{ marginRight: "15%" }}>
                <tr style={{ display: "flex", justifyContent: "center", alignItems: "center", marginTop: "15px" }}>
                    <td><div style={{ height: "300px", width: "160px", backgroundColor: "#9B9897", margin: "15px", marginBottom: "120px" }}>
                        <div style={{ padding: "4px", marginLeft: "8px" }}>
                            <h5><b>Showcase University</b></h5>
                            <p style={{ fontSize: "small" }}>Forward Bootcamp</p>
                            {bookM.bookMark.map((item) => {
                                return (
                                    <p style={{ fontSize: "small" }}>{item}</p>
                                )
                            })} 
                        </div>
                    </div></td>
                    <td><tr><td><div style={{ height: "200px", width: "500px", backgroundColor: "#9B9897", margin: "8px" }}>
                        <div style={{ padding: "1px", marginLeft: "8px" }}> <h4><b>Graduate Computer Science @ Showcase University</b></h4>
                            
                                {bookM.record.map((item)=>{
                                    return(
                                        <ul>
                                    <li><p style={{ fontSize: "small" }}>{item.sDate}&nbsp;To&nbsp;{item.eDate}</p></li>
                                    <li><p style={{ fontSize: "small" }}>Degree{item.degree}</p></li>
                                    <li><p style={{ fontSize: "small" }}>Branch{item.Field}</p></li>
                                    <li><p style={{ fontSize: "small" }}>Degree{item.grade}</p></li>
                                    </ul>
                                )})}
                            
                        </div>

                    </div>
                        <div style={{ height: "200px", width: "500px", backgroundColor: "#9B9897", margin: "8px" }}></div></td>
                    </tr></td>
                </tr>

            </div>
            <Modal isOpen={getModal} style={style}>
                <h4>New Education Model</h4>
                <div>
                    <form onSubmit={handleSubmit(submit)}>
          
                    <label>College Name</label><Select placeholder=" Name of College" options={bookM.data} isSearchable isLoading onKeyDown={(e)=>handleblock(e.target.value)} onChange={(e)=>setname(e.label)}/>
                        <label>Degree</label><Input type="text" placeholder="Degree" name="degree" ref={register}/><br/>
                        <label>Field of study</label><Input type="text" placeholder="Field of study" name="Field" ref={register}/><br/>
                        <label>StartDate</label><Input type="date"  name="sDate" ref={register}/><br/>
                        <label>EndDate</label><Input type="date" name="eDate"  ref={register}/><br/>
                        <label>Grade</label><Input type="text" placeholder="Grade" name="grade"  ref={register}/><br/>
                        <label>Description</label><textarea rows="3" cols="40" placeholder=" Description field" name="discription" ref={register}/><br/>
                        <Button type="submit">Submit</Button>

                    </form>
                    <input type="button" value="Save" style={{ marginLeft: "90%", marginTop: "0%" }} onClick={() => { setModal(false) }} />
                </div>
            </Modal>
        </>
    );
}