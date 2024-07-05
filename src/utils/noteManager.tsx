
import { useState, useEffect } from 'react';

export const useNoteManager = () => {

    const [userLanguage, setUserLanguage] = useState('');
    const [initialState, setInitialState] = useState(true);
    const [currentNote, setCurrentNote] = useState(0);
    const [notes, setNotes] = useState(() => {
        if (typeof window !== 'undefined') {
            const storedNotes = localStorage.getItem('notes');
            return storedNotes ? JSON.parse(storedNotes) : [{
                title: '',
                time: new Date().toLocaleString(),
                text: ''
            }];
        }
    });

    useEffect(() => {
        setUserLanguage(navigator.language);
    }, []);

    useEffect(() => {
        if (typeof window !== 'undefined') {
            localStorage.setItem('notes', JSON.stringify(notes));
        }
    }, [notes]);

    const addNote = () => {
        const newNote = { title: '', time: new Date().toLocaleString(), text: '' };
        setNotes([newNote, ...notes]);
        setInitialState(false);
        return openNote(0);
    };

    const openNote = (index: number) => {
        setCurrentNote(index);
        document.getElementById('titulo')?.focus();
        setInitialState(false);
    };

    const updateNote = (index: number, field: string, value: string) => {
        const updatedNotes = notes.map((note: any, i: number) =>
            i === index ? { ...note, [field]: value } : note
        );
        setNotes(updatedNotes);
    };

    const removeNote = (index: number) => {
        const updatedNotes = notes.filter((_: any, i: number) => i !== index);
        setNotes(updatedNotes);
        setInitialState(true);
        setCurrentNote(0);
    };

    const saveNote = (index: number) => {
        const contentNote = `${notes[index].title}\r\n${notes[index].time}\r\n\r\n${notes[index].text}`;
        const blob = new Blob([contentNote], { type: 'text/plain' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `${notes[index].title.length ? notes[index].title : userLanguage.startsWith('pt') ? 'Nota sem título' : 'Untitled note'}.txt`;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
    };

    return {
        userLanguage,
        initialState,
        currentNote,
        notes,
        addNote,
        openNote,
        updateNote,
        removeNote,
        saveNote,
        setInitialState
    };
};