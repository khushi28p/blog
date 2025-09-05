import { blog_data } from "./blog_data"

export const dashboard_data = {
    "blogs": 10,
    "comments": 5,
    "drafts": 0,
    "recentBlogs": blog_data.slice(0, 5),
}