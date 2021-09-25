import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { selectUserInput, setBlogData } from '../features/userSlice';

import "../styling/blogs.css";

const Blogs = () => {

    const searchInput = useSelector(selectUserInput);
    const blog_url = `https://gnews.io/api/v4/search?q=${searchInput}&token=64943f4a4d8f5fd7c4beecf604bcdff9`;

    const dispatch = useDispatch();
    const [blogs, setblogs] = useState();

    const [loading, setloading] = useState(true);

    useEffect(() => {
        
        axios
        .get(blog_url)
        .then((response) => {
            dispatch(setBlogData(response.data));
            setblogs(response.data);
            setloading(false);
        })
        .catch((error) => {
            console.log(error);
        });

    }, [searchInput]);

    return (
        <div className="blog__page">
            <h1 className="blog__page__header">Blogs</h1>
            {loading ? <h1 className="loading">Loading...</h1> : ""}
            <div className="blogs">
                {blogs?.articles?.map(blog => (
                    <a className="blog" target="_blank" href={blog.url}>
                        <img src={blog.image} />
                        <div>
                            <h3 className="sourceName">
                                <span>{blog.source.name}</span>
                                <span>{blog.publishedAt}</span>
                            </h3>
                            <h1>{blog.title}</h1>
                            <h1>{blog.description}</h1>
                        </div>
                    </a>
                ))}

                {blogs?.totalArticles === 0 && (
                    <h1 className="no__blogs">
                        No hay blogs disponibles. Reintente la busqueda con otra palabra
                    </h1>
                ) }
            </div>
        </div>
    )
}

export default Blogs;