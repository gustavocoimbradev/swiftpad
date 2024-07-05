interface ContentProps {
    styles: { [key: string]: string };
    notes: any;
    initialState: boolean;
    userLanguage: string;
    currentNote: number;
    setInitialState: (_:boolean) => void;
    removeNote: (currentNote: number) => void;
    saveNote: (currentNote: number) => void;
    updateNote: (currentNode: number, field: string, value: any) => void;
}

export default function Content({
    styles,
    notes,
    initialState,
    userLanguage,
    currentNote,
    setInitialState,
    removeNote,
    saveNote,
    updateNote
} : ContentProps) {
    return (
        <>
            {notes && notes.length>0 ? (
                    <div className={`${styles['box__content']} ${initialState?styles['box__content--mobileHide']:''}`}>
                        <div className={`${styles['box__content__header']}`}>
                            <div className={`${styles['box__content__header__options']}`}>
                                <button className={`${styles['box__content__header__options__back']}`} onClick={()=>setInitialState(true)}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M20 11H7.83l5.59-5.59L12 4l-8 8l8 8l1.41-1.41L7.83 13H20z"/></svg>
                                </button>
                                <button className={`${styles['box__content__header__options__trash']}`} onClick={()=>removeNote(currentNote)}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 256 256"><path fill="currentColor" d="M216 48h-40v-8a24 24 0 0 0-24-24h-48a24 24 0 0 0-24 24v8H40a8 8 0 0 0 0 16h8v144a16 16 0 0 0 16 16h128a16 16 0 0 0 16-16V64h8a8 8 0 0 0 0-16M96 40a8 8 0 0 1 8-8h48a8 8 0 0 1 8 8v8H96Zm96 168H64V64h128Zm-80-104v64a8 8 0 0 1-16 0v-64a8 8 0 0 1 16 0m48 0v64a8 8 0 0 1-16 0v-64a8 8 0 0 1 16 0"/></svg>
                                </button>
                            </div>
                            <input autoComplete="off" autoFocus id="titulo" placeholder={userLanguage.startsWith('pt')?'Título da nota...':'Note title...'} type="text" className={`${styles['box__content__header__title']}`} value={notes[currentNote].title} onChange={(e) => updateNote(currentNote, 'title', e.target.value)}/>
                            <time className={`${styles['box__content__header__time']}`}>{notes[currentNote].time}</time>
                        </div>
                        <textarea placeholder={userLanguage.startsWith('pt')?'Conteúdo da nota...':'Note content...'} className={`${styles['box__content__text']}`} value={notes[currentNote].text} onChange={(e) => updateNote(currentNote, 'text', e.target.value)}/>
                        <div className={`${styles['box__content__footer']}`}>
                            <button className={`${styles['box__content__footer__save']}`} onClick={()=>saveNote(currentNote)}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="m12 16l-5-5l1.4-1.45l2.6 2.6V4h2v8.15l2.6-2.6L17 11zm-8 4v-5h2v3h12v-3h2v5z"/></svg>
                            </button>
                            <button className={`${styles['box__content__footer__trash']}`} onClick={()=>removeNote(currentNote)}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 256 256"><path fill="currentColor" d="M216 48h-40v-8a24 24 0 0 0-24-24h-48a24 24 0 0 0-24 24v8H40a8 8 0 0 0 0 16h8v144a16 16 0 0 0 16 16h128a16 16 0 0 0 16-16V64h8a8 8 0 0 0 0-16M96 40a8 8 0 0 1 8-8h48a8 8 0 0 1 8 8v8H96Zm96 168H64V64h128Zm-80-104v64a8 8 0 0 1-16 0v-64a8 8 0 0 1 16 0m48 0v64a8 8 0 0 1-16 0v-64a8 8 0 0 1 16 0"/></svg>
                            </button>
                        </div>
                    </div>
            ) : null}
        </>
    )
}