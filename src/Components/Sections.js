import * as React from 'react';
import 'C:/Users/abdel/my-app/src/Components/page2.css';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import { AiFillPlayCircle } from "react-icons/ai";



export default function NestedList(value) {
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <div className='box'>
    <List
      sx={{ width: '100%', maxWidth: 800, margin: '-10px'}}
    >
      <ListItemButton onClick={handleClick} style={{margin: '-10px'}}>
        <ListItemIcon>
        {open ? <ExpandLess /> : <ExpandMore />}
        </ListItemIcon>
        <ListItemText primary={value.value.title} />
        <p>{value.value.lecture_count} lectures</p>
      </ListItemButton>
      <Collapse in={open} timeout="auto" unmountOnExit style={{backgroundColor:"white"}}>
        <List component="div" disablePadding>
            
      { [...Array(value.value.items.length)].map((elementInArray, index) => ( 
    <div className='insidebox' key={index}>
        <div className='insideinsidebox'>
     <AiFillPlayCircle/>

      
     <p> {
        value.value.items[index].title
      }
      </p>
      </div>

      <p>{
        value.value.items[index].content_summary

      }
      </p>
      

    </div>
             ))
      }
        </List>
      </Collapse>
    </List>
    </div>
  );
}