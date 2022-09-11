import '../../public/assets/css/bootstrap.css';
import '../../public/assets/css/maicons.css';
import '../../public/assets/css/theme.css';
import '../../public/assets/vendor/animate/animate.css';
import styles from './Blog.module.css';
import { useInView } from 'react-intersection-observer';

function Blog(props) {
    const { ref, inView } = useInView({
        threshold: 0.5
    });

    return (
        <div className={`${styles.rowFive} ${inView ? styles.pageAnimation : ''}`} ref={ref} >
            <div className="container" >
                <div className={styles.rowFive} id="blog">
                    <div className="col-lg-4 py-3">
                        <div className="card-blog">
                            <div className="header">
                                <div className="post-thumb">
                                    <img src={require('../../public/assets/img/blog/blog-1.jpg')} alt="" />
                                </div>
                            </div>
                            <div className="body">
                                <h5 className="post-title"><a href="blog-details.html">Source of Content Inspiration</a></h5>
                                <div className="post-date">Posted on <a href="#">27 Jan 2020</a></div>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 py-3">
                        <div className="card-blog">
                            <div className="header">
                                <div className="post-thumb">
                                    <img src={require('../../public/assets/img/blog/blog-2.jpg')} alt="" />
                                </div>
                            </div>
                            <div className="body">
                                <h5 className="post-title"><a href="blog-details.html">Source of Content Inspiration</a></h5>
                                <div className="post-date">Posted on <a href="#">27 Jan 2020</a></div>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 py-3">
                        <div className="card-blog">
                            <div className="header">
                                <div className="post-thumb">
                                    <img src={require('../../public/assets/img/blog/blog-3.jpg')} alt="" />
                                </div>
                            </div>
                            <div className="body">
                                <h5 className="post-title"><a href="blog-details.html">Source of Content Inspiration</a></h5>
                                <div className="post-date">Posted on <a href="#">27 Jan 2020</a></div>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 py-3">
                        <div className="card-blog">
                            <div className="header">
                                <div className="post-thumb">
                                    <img src={require('../../public/assets/img/blog/blog-4.jpg')} alt="" />
                                </div>
                            </div>
                            <div className="body">
                                <h5 className="post-title"><a href="blog-details.html">Source of Content Inspiration</a></h5>
                                <div className="post-date">Posted on <a href="#">27 Jan 2020</a></div>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 py-3">
                        <div className="card-blog">
                            <div className="header">
                                <div className="post-thumb">
                                    <img src={require('../../public/assets/img/blog/blog-5.jpg')} alt="" />
                                </div>
                            </div>
                            <div className="body">
                                <h5 className="post-title"><a href="blog-details.html">Source of Content Inspiration</a></h5>
                                <div className="post-date">Posted on <a href="#">27 Jan 2020</a></div>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 py-3">
                        <div className="card-blog">
                            <div className="header">
                                <div className="post-thumb">
                                    <img src={require('../../public/assets/img/blog/blog-6.jpg')} alt="" />
                                </div>
                            </div>
                            <div className="body">
                                <h5 className="post-title"><a href="blog-details.html">Source of Content Inspiration</a></h5>
                                <div className="post-date">Posted on <a href="#">27 Jan 2020</a></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div> 
    );
};

export default Blog;