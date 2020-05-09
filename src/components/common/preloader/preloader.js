import React from 'react'
import s from './preloader.module.css'
import preloader from '../../../assets/img/circles.png'

let Preloader = (props) => {
    return <div>
    <img className={s.preloader} src={preloader}/>
    </div>
}

export default Preloader