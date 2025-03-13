import { Header } from "./components/Header";
import { Post, PostType } from "./components/Post";
import { Sidebar } from "./components/sidebar";

import styles from './App.module.css';
import './global.css';

const posts: PostType[] = [
    {
        id: 1,
        author: {
            avatarUrl: "https://avatars.githubusercontent.com/u/169267801?v=4",
            name: "Leonardo antonio",
            role: 'CTO @Rocketseat'
        }, 
        content: [ 
            { type: 'paragraph', content: 'Fala galeraa 👋' },
            { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀' },
            { type: 'link', content: 'leo.design/doctorcare' },
        ],
        publishedAt: new Date('2021-03-03 07:10:30'),
    },

    {
        id: 2,
        author: {
            avatarUrl: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cGVyc29uYXxlbnwwfHwwfHx8MA%3D%3D",
            name: "Diego Rêgo",
            role: 'Educator @Rocketseat'
        }, 
        content: [ 
            { type: 'paragraph', content: 'Testando os posts! Vamos ver como isso vai ficar, estou empolgado! 😄🚀' },
            { type: 'link', content: 'leo.design/doctorcare' },
        ],
        Publishedat: new Date('2021-03-10 07:10:30'),
    },

    
];

export function App() {
    return (
        <div>
            <Header />

            <div className={styles.wrapper}>
                <Sidebar />
                <main>
                    {posts.map(post => {
                        return (
                            <Post 
                            key={post.id}
                            Post={post}
                            />
                        )
                    })}
                </main>
            </div>
        </div>
    );
}
