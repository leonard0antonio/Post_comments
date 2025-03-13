import { ThumbsUp, Trash } from 'phosphor-react'
import styles from './commente.module.css'
import { Avatar } from './Avatar'
import { useState } from 'react';

interface CommentProps{
  content: string;
  ondeleteComment: (comment: string) => void;
}

export function Comment({ content, ondeleteComment }: CommentProps) {
  const [likeCount, setLikeCount] = useState(0);
  
  function handleDeleteComment() {
    ondeleteComment(content);
  }

  function handleLikeComment() {
    setLikeCount(likeCount + 1);
  }

  return (
    <div className={styles.comment}>
      <Avatar hasBorder={false} 
      src="https://img.freepik.com/fotos-gratis/vista-frontal-de-uma-linda-mulher-gravida-em-casa_23-2148765052.jpg" 
      alt="" 
      />
  
      
    
      <div className={styles.commentbox}>
        <div className={styles.commentcontente}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Franciely Vitoria</strong>
              <time title='03 de março as 08:15h' dateTime='2025-03-03 07:10:30'>cerca de 1h atrás</time>

            </div>
              <button onClick={handleDeleteComment} title='Deletar comentário'>
                <Trash size={24} />
              </button>
          </header>

          <p>{content}</p>
        </div>

        <footer>
          <button onClick={handleLikeComment}>
            <ThumbsUp />
            Aplaudir <span>{likeCount}</span>
          </button>
        </footer>
      </div>
    </div>
  )
}