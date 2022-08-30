import LoadingCard from 'components/loaders/LoadingCard';
import SmallSetPagination from 'components/pagination/SmallSetPagination';
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { get_blog_list, get_blog_list_page } from 'redux/actions/blog';
import BlogCard from './BlogCard';

const BlogList = ({ blog_list, count, get_blog_list_page }) => {

    return (
        <>
            {
                blog_list ? 
                <>
                    <div className="relative bg-gray-50 pb-8 px-4 sm:px-6 lg:pb-12 lg:px-8">
                        <div className="absolute inset-0">
                            <div className="bg-white h-1/3 sm:h-2/3" />
                        </div>
                        <div className="relative max-w-7xl mx-auto">
                            
                            <div className="mt-12 max-w-lg mx-auto grid gap-5 lg:grid-cols-3 lg:max-w-none">
                                {
                                    blog_list.map(post=>(
                                        <BlogCard key={post.slug} />
                                    ))
                                }
                            </div>
                            <SmallSetPagination 
                                get_blog_list_page={get_blog_list_page} 
                                blog_list={blog_list} 
                                count={count}
                            />
                        </div>
                    </div>
                </>
                : <LoadingCard />
            }
        </>
    )
}


const mapStateToProps = state => ({

})

export default connect(mapStateToProps, {
    get_blog_list,
    get_blog_list_page
})(BlogList)