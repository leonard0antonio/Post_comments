import { FormEvent, useState, ChangeEvent, InvalidEvent } from 'react';
import { Avatar } from './Avatar';
import { Comment } from './comment';


import styles from './post.module.css';

interface author {
  name: string;
  role: string;
  avatarUrl: string;
}

interface Content{
  type: 'paragraph' | 'link'
  conttet: string;
}

export interface PostType {
  id: number;
  author: author;
  publishedAt: Date;
  content: Content[];
}

interface PostProps {
  Post: PostType;
}

export function Post({ Post }:PostProps) { 
  const [comments, setComments] = useState([
    'post muito bacana, hein?',
  ])

  const [newCommentText, setNewCommentText] = useState('');  

  const publisheDateformatted = new Intl.DateTimeFormat('pt-BR', { day: '2-digit', month: 'long', year: 'numeric', hour: '2-digit', minute: '2-digit' }).format(Post.publishedAt);
  
  function handleCreateNewComment(event: FormEvent) {
    event.preventDefault();

    setComments([...comments, newCommentText]);
    setNewCommentText('');

  }

  function handleNewcommentChange(event: ChangeEvent<HTMLTextAreaElement>) {
    event.target.setCustomValidity(''); 
    setNewCommentText(event.target.value);

  }

  function handleNewCommentInvalid(event: InvalidEvent<HTMLTextAreaElement>) {
    event.target.setCustomValidity('Por favor, preencha o campo de comentário');
  }

  function deleteComment (commentToDelete: string){
    const commentsWithoutDeletedOne = comments.filter(comment => {
      return comment !== commentToDelete;
    })

    setComments(commentsWithoutDeletedOne);
  }

  const isNewcommentempty = newCommentText.length === 0

  return (
     <article className={styles.post}>
      <header>
        <div className={styles.author}>
            <Avatar src={Post.author.avatarUrl} />
            <div className={styles.authorInfo}> 
              <strong>{Post.author.name}</strong>
              <br></br>
              <span>{Post.author.role}</span>
            </div>
          </div>

          <time title={publisheDateformatted} dateTime='2025-03-03 07:10:30'>Publicado há 1h
             
          </time>
        </header>

        <div className={styles.content}>
            {Post.content.map(line => {
              if (line.type === 'paragraph') {
                return <p key={line.content}>{line.content}</p>; 
              } else if (line.type === 'link') {
                return <p key={line.content}><a href="">{line.content}</a></p>; 
              }
            })}
            </div>

            <form onSubmit={handleCreateNewComment} className={styles.commentForm}>
              <strong>Deixe seu Feedback</strong>

              <textarea 
                name='comment'
                placeholder='Deixe um comentario' 
                value={newCommentText}
                onChange={handleNewcommentChange}
                onInvalid={handleNewCommentInvalid}
                required
               />
              
              <footer>
              <button  type='submit' disabled={isNewcommentempty}>
                Publicar
                </button> 
              </footer>
            </form>

            <div className={styles.commentList}>
              {comments.map(comment => {
                return <Comment key={comment} content={comment} ondeleteComment={deleteComment} />
              })}
            </div>
     </article>
  );
}
