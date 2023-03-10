import { Header } from "./components/Header"
import { Sidebar } from "./components/Sidebar"
import { Post } from "./components/Post"

import styles from './App.module.css'

import './global.css'

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: "https://github.com/yllanvfgurgel.png",
      name: "Yllan Gurgel",
      role: "Web Developer @Radix"
    },
    content: [
      {type: 'paragraph', message: 'Fala galeraa 👋'},
      {type: 'paragraph', message: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},
      {type: 'link', message: 'jane.design/doctorcare'}
    ],
    publishedAt: new Date('2023-03-10 20:00:00')
  },
  {
    id: 1,
    author: {
      avatarUrl: "https://github.com/diego3g.png",
      name: "Diego Fernandes",
      role: "CTO @Rocketseat"
    },
    content: [
      {type: 'paragraph', message: 'Fala galeraa 👋'},
      {type: 'paragraph', message: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},
      {type: 'link', message: 'jane.design/doctorcare'}
    ],
    publishedAt: new Date('2023-03-09 20:00:00')
  },
]

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
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />
            );
          })}
        </main>
      </div>
    </div>
  )
}
