import React from 'react'
import './Note.css'
export default function Form({ title,
    settitle,
    disc,
    setdisc, note, setnotes }) {
    const inputhandle = (e) => {
        settitle(e.target.value)
        console.log(title)
    }
    const inputhandle2 = (e) => {
        setdisc(e.target.value)
        console.log(disc)
    }
    const notehandle = (e) => {
        e.preventDefault()
        if (title !== "" && disc !== "") {
            setnotes((note) => {
                return (
                    [...note, {
                        title: title,
                        disc: disc,
                        id: new Date().getTime()
                    }]

                )

            })
        }

        settitle("")
        setdisc("")
    }
    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-md-10">
                        <form action="">
                            <div className="mb">

                                <input type="text" className='formlabel' placeholder='TITLE' value={title} onChange={inputhandle} />
                                <i class="fa fa-regular fa-star"></i>
                                <div className="mb-3">

                                    <textarea name="Notes"  cols="7" rows="7" className='formlabel1' placeholder='Take a Note...' value={disc} onChange={inputhandle2}></textarea>
                                </div>
                                <button className='primary' onClick={notehandle} value={note}>ADD +</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

        </>
    )
}