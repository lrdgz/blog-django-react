import CategoryBlogList from "components/blog/CategoryBlogList"
import FullWidthLayout from "hocs/layouts/FullWidthLayout"
import { useEffect } from "react"
import { connect } from "react-redux"
import { useParams } from "react-router-dom"
import { get_blog_list_category, get_blog_list_page_category } from "redux/actions/blog"


function BlogCategory({
    get_blog_list_category,
    blog_list,
    count,
    get_blog_list_page_category
}){

    const params = useParams()
    const category_id = params.category_id

    useEffect(()=>{
        get_blog_list_category(category_id)
    },[])

    return(
        <FullWidthLayout>
            <CategoryBlogList blog_list={blog_list && blog_list} get_blog_list_page={get_blog_list_page_category} category_id={category_id}/>
        </FullWidthLayout>
    )
}

const mapStateToProps = state => ({
    blog_list: state.blog.blog_list_category_pagination,
    count: state.blog.count
})

export default connect(mapStateToProps,{
    get_blog_list_category,
    get_blog_list_page_category
})(BlogCategory)