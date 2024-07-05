'use client'

import { useNoteManager } from '@/utils/noteManager';

import styles from '@/styles/page.module.scss';

import Sidebar from '@/components/Sidebar/Sidebar';
import Content from '@/components/Content/Content';

export default function Page() {

    const {
        userLanguage,
        initialState,
        currentNote,
        notes,
        addNote,
        openNote,
        updateNote,
        removeNote,
        saveNote,
        setInitialState,
    } = useNoteManager();

    return (
        <main className={`${styles['container']}`}>
            <div className={`${styles['box']}`}>
                <Sidebar
                    initialState={initialState}
                    userLanguage={userLanguage}
                    notes={notes}
                    currentNote={currentNote}
                    addNote={addNote}
                    openNote={openNote}
                    styles={styles} 
                />
                <Content
                    notes={notes}
                    initialState={initialState}
                    userLanguage={userLanguage}
                    currentNote={currentNote}
                    setInitialState={setInitialState}
                    removeNote={removeNote}
                    saveNote={saveNote}
                    updateNote={updateNote}
                    styles={styles}
                />
            </div>
        </main>
    );
}