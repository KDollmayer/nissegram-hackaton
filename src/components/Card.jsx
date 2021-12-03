import React, {useState} from 'react'
import 'bootstrap/dist/css/bootstrap.css'


export default function Card(props) {

    const [show, setShow] = useState(false)
    const [likes, setLikes] = useState(0)

    function onLikeClick() {
        setLikes(likes + 1)

        
    }

    function onRevealClick() {
        setShow(true)
        props.playAudio()
    }


    return (
        <>
        {show && (
                    <div className="col-3 p-2">
                    <div className="card h-100 " >
                        <div className="imageDiv">
                            <img src={props.imageUrl} className="card-img-top " alt="JulBild" />
                        </div>
                        <div className="card-body">
                            <p> <img  className="tomte" src="https://cdn1.iconfinder.com/data/icons/christmas-related-filled/64/christmas-25-512.png" alt="tomte"/> {likes}</p>
                            <p className="card-text">{props.description}</p>
                            <button className="btn btn-danger rounded-pill" onClick={onLikeClick}>Like</button>
                        </div>
                    </div>
                </div>
        )}
        {!show && (
                <div className="col-3 p-2" onClick={onRevealClick}>
                    <div className="myCard card h-100"  >

                    <h3 class="dayNumber">{props.cardNumber }</h3>
                    </div>
                </div>

        )}
        </>
    )
}
