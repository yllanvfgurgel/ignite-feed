import { Avatar } from './Avatar'
import { Comment } from './Comment'
import styles from './Post.module.css'

import { format, formatDistanceToNow } from 'date-fns'
import { ptBR } from 'date-fns/locale'
import { useState } from 'react'

export function Post({author, content, publishedAt}) {

    const publishedDateInFormat = format(publishedAt, "d 'de' LLLL 'às' hh:mm'h'", { locale: ptBR });

    const publishedDateRelativeToNow = formatDistanceToNow(publishedAt,{ locale: ptBR, addSuffix: true })

    const [comments, setComments] = useState(['Comentário top demais'])

    const [newComment, setNewComment] = useState('')


    function handleNewCommentValueChange() {
        setNewComment(event.target.value)
    }

    function handleCreateNewComment() {
        event.preventDefault()
        setComments([...comments, newComment])

        setNewComment('')
    }

    function deleteComment(commentToDelete) {
        const commentListWithoutDeletedOne = comments.filter(comment => {
            return comment !== commentToDelete
        })

        setComments(commentListWithoutDeletedOne)
    }

    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <Avatar source={author.avatarUrl} />
                    <div className={styles.authorInfo}>
                        <strong>{author.name}</strong>
                        <span>{author.role}</span>
                    </div>
                </div>
                <time title={publishedDateInFormat} dateTime={publishedAt.toISOString()}>{publishedDateRelativeToNow}</time>
            </header>

            <div className={styles.content}>
                
                {content.map(line => {
                    return line.type === 'paragraph' ? 
                        <p key={line.message}>{line.message}</p> :
                        <p key={line.message}><a href='#'>{line.message}</a></p>
                })}

                <p>
                    <a href='#'>#novoprojeto</a>{' '}
                    <a href='#'>#nlw</a>{' '}
                    <a href='#'>#rocketseat</a>
                </p>
            </div>

            <form className={styles.commentForm}>
                <strong>Deixe seu feedback</strong>

                <textarea
                    onChange={handleNewCommentValueChange} 
                    placeholder='Deixe um comentário'
                    value={newComment}
                />

                <footer>
                    <button type="submit" onClick={handleCreateNewComment}>Publicar</button>
                </footer>
            </form>

            <div className={styles.commentList}>
                {comments.map(comment => {
                    return <Comment key={comment} comment={comment} onDeleteComment={deleteComment}/>
                })}
            </div>
        </article>
    )
}