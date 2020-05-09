import React, { useState } from 'react'
import s from './Paginator.module.css'

const Paginator = ({totalItemsCount , pageSize , portionsSize , currentPage , onPageChange}) => {

    let pagesCount = Math.ceil(totalItemsCount / pageSize)

    let pages = [];

    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    let portionsCount = Math.ceil(pagesCount / portionsSize)
    let [portionNumber , setPortionNumber] = useState(1)
    let leftPortionPageNumber = (portionNumber - 1) * portionsSize + 1
    let rightPortionPageNumber = portionNumber * portionsSize

    return  <div className={s.currentWrap}>
            {portionNumber > 1 && <button className={s.btnScroll}  onClick={() => setPortionNumber(portionNumber - 1)}>PREV</button>}
            {pages
            .filter(p => p >= leftPortionPageNumber && p <= rightPortionPageNumber)
            .map(p => {
                return <span className={currentPage === p && s.selectedPage}
                    onClick={(e) => { onPageChange(p) }}>
                    {p}</span>
            })}
            {portionsCount > portionNumber && <button className={s.btnScroll} onClick={() => setPortionNumber(portionNumber + 1)}>NEXT</button>}
        </div>
}

export default Paginator