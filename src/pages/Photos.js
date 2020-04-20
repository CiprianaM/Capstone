import React, {useContext} from "react"

import Image from "../components/Image"
import {Context} from "../Context"
import {getClass} from "../utils"

function Photos() {
    const {allPhotos} = useContext(Context)

    return (
        <main className="photos">
           {allPhotos.map((photo, index) => <Image key={photo.id} img={photo} className={getClass(index)} />)}
        </main>
    )
}

export default Photos