import './Note.css'



function Notetaking() {
    return (
       <div className='header'>
            <h1 className='heading'>
                Note Keeper <i class="fa-regular fa-note-sticky"></i>
            </h1>
            <input className='search' placeholder='Monday blues'/>
            <button className='searchb'>Search</button>
        </div>
            


    )



}
export default Notetaking