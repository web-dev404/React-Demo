import s from "./Paginator.module.scss";
import {useState} from "react";

let Paginator = ({totalItemsCount, pageSize, onPageChanged, currentPage, portionSize = 10}) => {
    let pagesCount = Math.ceil(totalItemsCount / pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    let portionCount = Math.ceil(pagesCount / portionSize);
    let [portionNumber, setPortionNumber] = useState(1);
    let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1;
    let rightPortionPageNumber = portionNumber * portionSize;

    return (
        <div className={s.paginationContainer}>
            {
                portionNumber > 1
                && <button className={`${s.btnPrev} ${s.btn}`} onClick={() => {
                    setPortionNumber(portionNumber - 1);
                    onPageChanged(leftPortionPageNumber - 10);
                }}>Prev</button>
            }
            <div>
                {
                    pages
                        .filter(p => p >= leftPortionPageNumber && p <= rightPortionPageNumber)
                        .map(p => <button onClick={() => {
                            if (currentPage != p) {
                                onPageChanged(p)
                            }
                        }} key={p} id={p}
                                          className={`${s.paginationItem} ${currentPage === p && s.activePage}`}>{p}</button>)
                }
            </div>
            {
                portionCount > portionNumber
                && <button className={`${s.btnNext} ${s.btn}`} onClick={() => {
                    setPortionNumber(portionNumber + 1);
                    onPageChanged(leftPortionPageNumber + 10);
                }}>Next</button>
            }
        </div>
    )
}

export default Paginator;