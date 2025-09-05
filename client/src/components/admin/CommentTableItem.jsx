import React from "react";
import { TiTick } from "react-icons/ti";
import { RiDeleteBin5Line } from "react-icons/ri";

const CommentTableItem = ({ comment, fetchComments }) => {
  const { blog, createdAt, _id } = comment;
  const BlogDate = new Date(createdAt);

  return (
    <tr className="order-y border-gray-300 ">
      <td className="px-6 py-4">
        <b className="font-medium text-gray-600">Blog</b> : {blog.title}
        <br />
        <br />
        <b className="font-medium text-gray-600">Name</b> : {comment.name}
        <br />
        <b className="font-medium text-gray-600">Comment</b> : {comment.content}
      </td>

      <td className="px-6 py-4 max-sm:hidden">
        {BlogDate.toLocaleDateString()}
      </td>

      <td className="px-6 py-4">
        <div className="inline-flex items-center gap-4">
          {!comment.isApproved ? (
            <div className="text-green-700 bg-green-600/10 rounded-full p-1 hover:scale-110 transition-all cursor-pointer">
              <TiTick size={25} />
            </div>
          ) : (
            <p className="text-xs border border-green-600 bg-green-100 text-green-600 rounded-full px-3 py-1">
              Approved
            </p>
          )}

          <div className="hover:scale-110 transition-all cursor-pointer">
            <RiDeleteBin5Line size={25} />
          </div>
        </div>
      </td>
    </tr>
  );
};

export default CommentTableItem;
