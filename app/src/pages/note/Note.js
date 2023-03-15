
import React from 'react';


const Note = ({ id, text, date, handleDeleteNote }) => {
	return (
		<div className='note'>
			<span>{text}</span>
			<div className='note-footer'>
				<small>{date}</small>
				<i className="bi bi-trash3-fill delete-icon"
                
					onClick={() => handleDeleteNote(id)}
                ></i>
					 
					
				
			</div>
		</div>
	);
};

export default Note;