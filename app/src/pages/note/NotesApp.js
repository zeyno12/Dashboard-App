import AddNote from "./AddNote";
import NotesList from "./NotesList"; 
import Note from "./Note";
import Search from "./Search";
import { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import "./Note.css"
const NotesApp=()=>{
    const [notes, setNotes] = useState([
	]);

	const [searchText, setSearchText] = useState('');

	useEffect(() => {
		const savedNotes = JSON.parse(
			localStorage.getItem('react-notes-app-data')
		);

		if (savedNotes) {
			setNotes(savedNotes);
		}
	}, []);

	useEffect(() => {
		localStorage.setItem(
			'react-notes-app-data',
			JSON.stringify(notes)
		);
	}, [notes]);

	const addNote = (text) => {
		const date = new Date();
		const newNote = {
			id: nanoid(),
			text: text,
			date: date.toLocaleDateString(),
		};
		const newNotes = [...notes, newNote];
		setNotes(newNotes);
	};

	const deleteNote = (id) => {
		const newNotes = notes.filter((note) => note.id !== id);
		setNotes(newNotes);
		console.log("delete");
	};
return(
    <div className="notes">
<Search handleSearchNote={setSearchText}/>
<AddNote/>
<Note/>
<NotesList 
 notes={notes.filter((note) =>
      note.text.toLowerCase().includes(searchText))} handleAddNote={addNote} handleDeleteNote={deleteNote}
  />

    </div>
    )
}
export default NotesApp;