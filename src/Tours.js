import React from 'react'
import Tour from './Tour'

 const Tours = ({hello,butt}) => {
    return (
        <section>
            <div className="title">
                <h2>our tours</h2>
                <div className="underline"></div>
            </div>
            {hello.map((al)=>{
                return <Tour key={al.id} alone ={butt} {...al}/>
            }
                )}
        </section>
    )
}
export default Tours;

