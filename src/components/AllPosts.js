import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'
import sanityClient from '../client.js'

export default function AllPosts() {

    // intial state
    const [allPostsData, setAllPosts] = useState(null)

    // to fetch data
    useEffect(() =>{
        // use sanityClient to fetch the data
        sanityClient
            .fetch(
                `*[_type== "post"]{
                    title,
                    slug,
                    mainImage{
                        asset->{
                            _id,
                            url
                        }
                    }
                }`
        )
        .then((data) => setAllPosts(data))
        .catch(console.error);
    }, [])

    return (
        <div>
            <h2> Blog Posts </h2>
            <h3> Welcome to my Snaity Blog Page</h3>
            <div>
                {allPostsData && 
                allPostsData.map((post,index) =>(
                    // whenver the post is cliked then it will link to the slug or the one post
                    <Link to={'/' + post.slug.current} key={post.slug.current}>
                        <span key={index}>
                            <img src={post.mainImage.asset.url} alt="main hero image for blog post"/>
                        </span>
                        
                        <span>
                        <h2>{post.title}</h2>
                        </span>
                    </Link>
                ))}
            </div>
        </div>
    )
    
}