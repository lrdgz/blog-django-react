import FullWidthLayout from 'hocs/layouts/FullWidthLayout';
import { useEffect } from 'react';
import { connect } from 'react-redux';import { useParams } from 'react-router-dom';
import { get_blog } from 'redux/actions/blog';
;

const BlogPost = () => {

    const params = useParams();
    const slug = params.slug;

    useEffect(() => {
        get_blog(slug)
    }, []);

    return (
        <FullWidthLayout>
            BlogPost
        </FullWidthLayout>
    )
}

const mapStateToProps = state => ({
    blog_list: state.blog.blog_list_pagination
});

export default connect(mapStateToProps, {

})(BlogPost);