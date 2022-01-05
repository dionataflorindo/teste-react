import './styles.css'
import { PostCard } from "../postCard"
export const Posts = ({posts})=> (
    <div className = 'posts'>
    {posts.map(post => (
      <PostCard
        // @ts-ignore
        key= {post.id} 
        titulo = {post.titulo}
        body = {post.body}
        id = {post.id}
        cover = {post.cover}
      />
    ))} 
  </div>
);