import './Note.css'
import Search from './search'




function Notetaking(setSearchText) {
    
    return (
       <div className='header'>
            <h1 className='heading'>
                Note Keeper <i class="fa-regular fa-note-sticky"></i>
            </h1>
            <Search handleSearchNote={setSearchText} />
            <button className='searchb'>Seaaarch</button>
        </div>
            


    )



}
export default Notetaking