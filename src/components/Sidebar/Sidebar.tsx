interface SidebarProps {
    styles: { [key: string]: string };
    initialState: boolean;
    userLanguage: string;
    notes: Array<{ title: string; time: string; }>;
    currentNote: number;
    addNote: () => void;
    openNote: (index: number) => void;
}

export default function Sidebar({ 
    initialState, 
    userLanguage, 
    notes, 
    currentNote, 
    addNote, 
    openNote, 
    styles 
}: SidebarProps) {
    return (
        <div className={`${styles['box__sidebar']} ${initialState?'':styles['box__sidebar--mobileHide']}`}>
            <div className={`${styles['box__sidebar__header']}`}>
                <span className={`${styles['box__sidebar__header__title']}`}>{userLanguage.startsWith('pt')?'Minhas notas':'My notes'}</span>
                <button className={`${styles['box__sidebar__header__plus']}`} onClick={()=>addNote()}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M19 12.998h-6v6h-2v-6H5v-2h6v-6h2v6h6z"/></svg>
                </button>
            </div>
            <div className={`${styles['box__sidebar__items']}`}>
                {notes && notes.map((note:any, index:number) => (
                    <div key={index} className={`${styles['box__sidebar__items__item']} ${currentNote==index?styles['active']:''}`} onClick={()=>openNote(index)}>
                        <span className={`${styles['box__sidebar__items__item__title']}`}>{note.title.length?note.title:userLanguage.startsWith('pt')?'Nota sem título':'Untitled note'}</span>
                        <time className={`${styles['box__sidebar__items__item__time']}`}>{note.time}</time>
                    </div>
                ))}
            </div>
        </div>
    )
}