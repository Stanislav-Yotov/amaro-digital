import '../public/assets/css/bootstrap.css';
import '../public/assets/css/maicons.css';
import '../public/assets/css/theme.css';

function Blog(props) {
    return (
        <div className="page-section" id='blog'>
            <div className="container">
                <div className="row">
                    <div className="col-sm-10">
                        <form action="/blog" className="form-search-blog">
                            <div className="input-group">
                                <div class="input-group-prepend">
                                    {/* <select id="categories" className="custom-select bg-light">
                                        <option>All Categories</option>
                                        <option value="travel">Travel</option>
                                        <option value="lifestyle">LifeStyle</option>
                                        <option value="healthy">Healthy</option>
                                        <option value="food">Food</option>
                                    </select> */}
                                </div>
                                {/* <input type="text" className="form-control" placeholder="Enter keyword.." /> */}
                            </div>
                        </form>
                    </div>
                    {/* <div className="col-sm-2 text-sm-right">
                        <button className="btn btn-secondary">Filter <span className="mai-filter"></span></button>
                    </div> */}
                </div>

                <div className="row my-5">
                    <div className="col-lg-4 py-3">
                        <div className="card-blog">
                            <div className="header">
                                <div className="post-thumb">
                                    <img src={require('../public/assets/img/blog/blog-1.jpg')} alt="" />
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
                                    <img src={require('../public/assets/img/blog/blog-2.jpg')} alt="" />
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
                                    <img src={require('../public/assets/img/blog/blog-3.jpg')} alt="" />
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
                                    <img src={require('../public/assets/img/blog/blog-4.jpg')} alt="" />
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
                                    <img src={require('../public/assets/img/blog/blog-5.jpg')} alt="" />
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
                                    <img src={require('../public/assets/img/blog/blog-6.jpg')} alt="" />
                                </div>
                            </div>
                            <div className="body">
                                <h5 className="post-title"><a href="blog-details.html">Source of Content Inspiration</a></h5>
                                <div className="post-date">Posted on <a href="#">27 Jan 2020</a></div>
                            </div>
                        </div>
                    </div>

                </div>

                {/* <nav aria-label="Page Navigation">
                    <ul className="pagination justify-content-center">
                        <li className="page-item disabled">
                            <a className="page-link" href="#" tabindex="-1" aria-disabled="true">Previous</a>
                        </li>
                        <li className="page-item"><a className="page-link" href="#">1</a></li>
                        <li className="page-item active" aria-current="page">
                            <a className="page-link" href="#">2 <span className="sr-only">(current)</span></a>
                        </li>
                        <li className="page-item"><a className="page-link" href="#">3</a></li>
                        <li className="page-item">
                            <a className="page-link" href="#">Next</a>
                        </li>
                    </ul>
                </nav> */}

            </div>
        </div>
    );
};

export default Blog;