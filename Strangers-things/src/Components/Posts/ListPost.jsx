import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function ListPosts() {
    const[posts, setPosts]= useState(null);
    const navigate = useNavigate();
    const COHORT_NAME = '2302-ACC-ET-WEB-PT-A'
    const BASE_URL = `https://strangers-things.herokuapp.com/api/${COHORT_NAME}`
    
    
    useEffect(() => {
        const fetchPosts = async () => {
            try {
            const response = await fetch(`${BASE_URL}/posts`)
        
            const result = await response.json();
            console.log(result);
            setPosts(result);
            return result
            } catch (err) {
            console.error(err);
            }
        }
        fetchPosts();
    }, );
    console.log(posts);


    return (
      <section className="listOfPosts">
        {posts.map((post) => {
            return (
              <div className="postsDisplay" onClick={() => {
                  navigate(`/posts/${post.id}`); }
                >
                <h1>{post.author}</h1><h2>{post.title}</h2> <p>{post.description}</p>{''}
              </div>
            );
        })}
    
      </section>
    );
}