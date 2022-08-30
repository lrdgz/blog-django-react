import FullWidthLayout from 'hocs/layouts/FullWidthLayout';
import { connect } from 'react-redux';

const Home = () => {

  return (
    <FullWidthLayout>
        Home
    </FullWidthLayout>
  )
}

const mapStateToProps = state => ({
  blog_list: state.blog.blog_list_pagination
});

export default connect(mapStateToProps, {
  
})(Home);