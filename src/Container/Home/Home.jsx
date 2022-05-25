//libraries
import React, { Component } from "react";
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";

//pages
import BlogPost from '../Pages/BlogPost/BlogPost';
import Product from "../Pages/Product/Product";
import LiveCycleComp from "../Pages/LiveCycleComp/LiveCycleComp";
import YoutubeCompPage from '../Pages/YoutubeCompPage/YoutubeCompPage';

//style
import "./Home.css";
import DetailPost from "../Pages/BlogPost/DetailPost/DetailPost";

class Home extends Component {
    state = {
        showComponent: true
    }

    componentDidMount() {
        setTimeout(() => {
            this.setState({
                showComponent: false
            })
        }, 5000)
    }

    render() {
        return (
            <BrowserRouter>
                <div>
                    <div className="navigation">
                        <Link to="/">BlogPost</Link>
                        <Link to="/product">Product</Link>
                        <Link to="/livecycle">LiveCycle</Link>
                        <Link to="/youtube-component">Youtube Comp</Link>
                    </div>
                    <Switch>
                        <Route path="/" exact component={BlogPost}/>
                        <Route path="/detail-post/:postID" component={DetailPost}/>
                        <Route path="/product" component={Product}/>
                        <Route path="/livecycle" component={LiveCycleComp}/>
                        <Route path="/youtube-component" component={YoutubeCompPage}/>
                    </Switch>
                </div>
            </BrowserRouter>
        )
    }
}

export default Home;