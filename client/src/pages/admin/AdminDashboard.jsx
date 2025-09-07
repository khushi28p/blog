import React from "react";
import { useState } from "react";
import { dashboard_data } from "@/assets/dashboard_data";
import { GrArticle } from "react-icons/gr";
import { FaRegComments } from "react-icons/fa";
import { MdOutlineDrafts } from "react-icons/md";
import { useEffect } from "react";
import { RiArticleLine } from "react-icons/ri";
import BlogTableItem from "@/components/admin/BlogTableItem";
import { useAppContext } from "@/context/AppContext";


const AdminDashboard = () => {
  const [dashboardData, setDashboardData] = useState({
    blogs: 0,
    comments: 0,
    drafts: 0,
    recentBlogs: [],
  });
  
  const {axios} = useAppContext();

  const fetchDashboardData = async () => {
    try{
      const {data} = await axios.get('/api/admin/dashboard');
      data.success ? setDashboardData(data.dashboardData) : toast.error(data.message);
    } catch(error){
      toast.error(error.message)
    }
  };

  useEffect(() => {
    fetchDashboardData();
  }, []);

  return (
    <div className="flex-1 p-4 md:p-10 bg-primary/10">
      <div className="flex flex-wrap gap-4">
        <div className="flex items-center gap-4 bg-white p-4 min-w-58 rounded shadow cursor-pointer hover:scale-105 transition-all">
          <div className="p-2 rounded bg-muted-foreground/10 text-muted-foreground">
            <GrArticle size={25} />
          </div>
          <div>
            <p className="text-xl font-semibold text-gray-600">
              {dashboardData.blogs}
            </p>
            <p className="text-gray-400 font-light">Blogs</p>
          </div>
        </div>

        <div className="flex items-center gap-4 bg-white p-4 min-w-58 rounded shadow cursor-pointer hover:scale-105 transition-all">
          <div className="p-2 rounded bg-muted-foreground/10 text-muted-foreground">
            <FaRegComments size={25} />
          </div>
          <div>
            <p className="text-xl font-semibold text-gray-600">
              {dashboardData.comments}
            </p>
            <p className="text-gray-400 font-light">Comments</p>
          </div>
        </div>

        <div className="flex items-center gap-4 bg-white p-4 min-w-58 rounded shadow cursor-pointer hover:scale-105 transition-all">
          <div className="p-2 rounded bg-muted-foreground/10 text-muted-foreground">
            <MdOutlineDrafts size={25} />
          </div>
          <div>
            <p className="text-xl font-semibold text-gray-600">
              {dashboardData.drafts}
            </p>
            <p className="text-gray-400 font-light">Drafts</p>
          </div>
        </div>
      </div>

      <div>
        <div className="flex items-center gap-3 m-4 mt-6 text-gray-600">
          <RiArticleLine />
          <p>Latest Blogs</p>
        </div>

        <div className="relative max-w-4xl overflow-x-auto shadow rounded-lg scrollbar-hide bg-white">
          <table className="w-full text-sm text-gray-500">
            <thead className="text-xs text-gray-600 text-left uppercase">
              <tr>
                <th scope="col" className="px-2 py-4 xl:px-6">#</th>
                <th scope="col" className="px-2 py-4">Blog Title</th>
                <th scope="col" className="px-2 py-4 max-sm:hidden">Date</th>
                <th scope="col" className="px-2 py-4 max-sm:hidden">Status</th>
                <th scope="col" className="px-2 py-4">Actions</th>
              </tr>
            </thead>

            <tbody>
              {dashboardData.recentBlogs.map((blog, index) => {
                return <BlogTableItem key={blog._id} blog={blog} fetchBlogs={fetchDashboardData} index={index+1} />
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
