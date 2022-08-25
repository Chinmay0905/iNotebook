import React, { useContext, useState } from 'react'
import noteContext from "../context/notes/noteContext"


const AddNote = (props) => {
    const context = useContext(noteContext);
    const { addNote } = context;


    const [note, setNote] = useState({title: "", description: "", tag: ""})

    const handleClick = (e) => {
        e.preventDefault();
        addNote(note.title, note.description, note.tag);
        setNote({title: "", description: "", tag: ""})
        props.showAlert("Added successfully", "success")
    }

    const onChange = (e) => {
        setNote({...note, [e.target.name]: e.target.value})
    }
    return (
        <div className="container my-3" style={{ color: props.mode === 'dark' ? 'white' : '#161c3b'}}>
            <h2>Add a Note</h2>
            <form className="my-3">
                <div className="mb-3">
                    <label htmlFor="title" className="form-label" style={{ color: props.mode === 'dark' ? 'white' : '#161c3b'}}>Title</label>
                    <input type="text" className="form-control" style={{backgroundColor: props.mode === 'dark' ? '#3d465d' : 'white', color: props.mode === 'dark' ? 'white' : '#161c3b' }} id="title" name="title"  aria-describedby="emailHelp" value={note.title} onChange={onChange} minLength={5} required/>
                </div>
                <div className="mb-3">
                    <label htmlFor="description" className="form-label" style={{ color: props.mode === 'dark' ? 'white' : '#161c3b'}}>Description</label>
                    <input type="text" className="form-control" style={{backgroundColor: props.mode === 'dark' ? '#3d465d' : 'white', color: props.mode === 'dark' ? 'white' : '#161c3b' }} id="description" name="description" value={note.description} onChange={onChange} minLength={5} required/>
                </div>
                <div className="mb-3">
                    <label htmlFor="tag" className="form-label" style={{ color: props.mode === 'dark' ? 'white' : '#161c3b'}}>Tag</label>
                    <input type="text" className="form-control" style={{backgroundColor: props.mode === 'dark' ? '#3d465d' : 'white', color: props.mode === 'dark' ? 'white' : '#161c3b' }} id="tag" name="tag" value={note.tag} onChange={onChange} minLength={5} required/>
                </div>
                
                <button disabled={note.title.length<5 || note.description.length<5} type="submit" className="btn btn-primary" onClick={handleClick}>Add Note</button>
            </form>
        </div>
    )
}

export default AddNote