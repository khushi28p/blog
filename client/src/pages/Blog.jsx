import React from 'react'
import { useParams } from 'react-router-dom'
import { useState } from 'react';
import { blog_data } from '@/assets/blog_data';
import { useEffect } from 'react';
import Navbar from '@/components/Navbar'; 
import Moment from 'moment';
import { comments_data } from '@/assets/comments_data';

const Blog = () => {
  const {id} = useParams();
  const [data, setData] = useState(null);
  const [comments, setComments] = useState([]);

  const fetchBlogData = async() => {
    const data = blog_data.find(item => item._id === id);
    setData(data);
  }

  const fetchComments = async() => {
    setComments(comments_data);
  }

  useEffect( () => {
    fetchBlogData();
    fetchComments();
  }, []);

  return data ? (
    <div className='relative'>
      <Navbar />
      <div className='text-center mt-20 text-muted-foreground'>
        <p className='text-primary py-4 font-medium'>Published on {Moment(data.createdAt).format('MMMM Do YYYY')}</p>
        <h1 className='text-2xl sm:text-5xl font-semibold max-w-2xl mx-auto text-accent-foreground'>{data.title}</h1>
        <h2 className='my-5 max-w-lg truncate mx-auto'>{data.subTitle}</h2>
        <p className='inline-block py-1 px-4 rounded-full mb-6 border text-sm border-primary/35 bg-primary/5 font-medium text-primary'>Michael Doe</p>
      </div>
      <div className='max-w-5xl mx-5 md:mx-auto my-10 mt-6'> 
        <img src={data.image} alt="" className='rounded-3xl mb-5' />
        <div className='rich-text max-w-3xl mx-auto ' dangerouslySetInnerHTML={{__html: data.description}}></div>
        <div className='mt-14 mb-10 max-w-3xl mx-auto'>
          <p>Comments ({comments.length})</p>
        </div>
      </div>
    </div>
  ) : <div>Loading...</div>
}

export default Blog