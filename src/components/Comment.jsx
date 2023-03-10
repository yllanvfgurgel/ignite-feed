import styles from './Comment.module.css';
import {ThumbsUp, Trash} from 'phosphor-react'

import { Avatar } from './Avatar'

export function Comment({ comment, onDeleteComment}) {

    function handleDeleteComment() {
        onDeleteComment(comment)
    }

    return (
        <div className={styles.comment}>
            <Avatar hasBorder={false} source="https://github.com/yllanvfgurgel.png" />

            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Yllan Gurgel <span>(você)</span></strong>
                            <time title='' dateTime=''>Cerca de 2h</time>
                        </div>
                        <button title='Deletar comentário' onClick={handleDeleteComment}>
                            <Trash size={24}/>
                        </button>
                    </header>
                    <p>{comment}</p>
                </div>
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