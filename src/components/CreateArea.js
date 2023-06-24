import React,{useState} from 'react';
import AddIcon from '@mui/icons-material/Add';

const CreateArea = (props) => {
  const[isExpended,setIsExpended]=useState(false);
    const [note,setNote]=useState({
        title:"",
        content:""
    });

    function handleChange(e){
      
        const {name,value}=e.target;
        setNote((prevNote)=>{
            return{
                ...prevNote,
                [name]:value
            };
        });
    }

    function submitNote(event){
        props.onAdd(note);
        setNote({
            title: "",
            content: ""
          });

        event.preventDefault();
    }

    function handleClick(){
      setIsExpended(true);
    }

  return (
    <div>
      <form>
        {isExpended && <input
          name="title"
          placeholder="Title"
          value={note.title}
          onChange={handleChange}
          
        />}
        <textarea
          name="content"
          placeholder="Take a note..."
          rows={isExpended?3:1}
          value={note.content}
          onChange={handleChange}
          onClick={handleClick}
        />
        {isExpended && <button onClick={submitNote}>
        <AddIcon/>
        </button>}
      </form>
    </div>
  )
}

export default CreateArea
