import { Avatar } from './Avatar'
import { Comment } from './Comment'
import styles from './Post.module.css'

import { format, formatDistanceToNow } from 'date-fns'
import { ptBR } from 'date-fns/locale'

export function Post({author, content, publishedAt}) {
    const publishedDateInFormat = format(publishedAt, "d 'de' LLLL 'às' hh:mm'h'", { locale: ptBR });

    const publishedDateRelativeToNow = formatDistanceToNow(publishedAt,{ locale: ptBR, addSuffix: true })


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
                        <p>{line.message}</p> :
                        <p><a href='#'>{line.message}</a></p>
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
                    placeholder='Deixe um comentário'
                />

                <footer>
                    <button type="submit">Publicar</button>
                </footer>
            </form>

            <div className={styles.commentList}>
                <Comment />
                <Comment />
                <Comment />
            </div>
        </article>
    )
}