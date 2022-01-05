import './styles.css'

export const PostCard = ({titulo,cover,id,body}) => (
        <div className = 'post' >
            <img src ={cover} alt = {titulo}></img>
          <div  className = 'post-content'>
            <h1>{titulo}</h1>
            <p>{body}</p> 
          </div>
        </div>
    );