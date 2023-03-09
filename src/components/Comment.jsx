import styles from './Comment.module.css';
import {ThumbsUp, Trash} from 'phosphor-react'

export function Comment() {
    return(
        <div className={styles.comment}>
            <img src="https://github.com/yllanvfgurgel.png" />

            <div className={styles.commentBox}>
                <header>
                    <div className={styles.authorAndTime}>
                        <strong>Yllan Gurgel <span>(você)</span></strong>
                        <time title='' dateTime=''>Cerca de 2h</time>
                    </div>
                    <button title='Deletar comentário'>
                        <Trash size={20}/>
                    </button>
                </header>
                <p>Muito bom Devon, parabéns!! 👏👏</p>
                <footer>
                    <button>
                        <ThumbsUp />
                        Aplaudir <span>20</span>
                    </button>
                </footer>
            </div> 
        </div>
    )
}