import React from 'react'
import { Button } from '@/components/ui/button';
import { RxCross2 } from "react-icons/rx";

const BlogTableItem = ({blog, fetchBlogs, index}) => {
    const {title, createdAt} = blog;
    const BlogDate = new Date(createdAt);

  return (
    <tr className='border-y border-gray-300'>
      <th className='px-2 py-4'>{index}</th>
      <td className='px-2 py-4'>{title}</td>
      <td className='px-2 py-4 max-sm:hidden'>{BlogDate.toDateString()}</td>
      <td className='px-2 py-4 max-sm:hidden'><p className={`${blog.isPublished ? "text-green-600" : "text-orange-700"}`} >{blog.isPublished ? 'Published' : 'Unpublished'}</p></td>
      <td className='px-2 py-4 flex items-center justify-center text-xs gap-3'>
        <Button className='border px-2 py-0.5 mt-1 rounded cursor-pointer'>{blog.isPublished ? 'Unpublish' : 'Publish'}</Button>
        <div className='text-red-700 bg-red-600/10 rounded-full p-1 hover:scale-110 transition-all cursor-pointer'>
        <RxCross2 size={25}  />
        </div>
        
      </td>
    </tr>
  )
}

export default BlogTableItem
