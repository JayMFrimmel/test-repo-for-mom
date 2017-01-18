import React from 'react';
import ReactDOM from 'react-dom';

var Jumbotron = React.createClass({
    render: function () {
        return (
            <div className="jumbotron">
                <h2>Riding Stables and Lesson Programs</h2>
            </div>
        );
    }
});

var Header = React.createClass({
    render: function () {
        return (
            <header id="masthead">
                <div className="container">
                    <a href="index.html" id="logo">Much ADO! Home</a>

                    <nav>
                        <a href="index.html">| Welcome! |</a>
                        <a href="stables-lessons.html">Lessons and Stables |</a>
                        <a href="tack-apparel.html">Tack and Apparel |</a>
                        <a href="vets-farriers.html">Veterinarians and Farriers |</a>
                        <a href="feed-supplies-trailers.html">Barn Supplies, Feed, and Trailers |</a>
                        <a href="contact.html">Contact Us |</a>
                    </nav>
                </div>
            </header>
        );
    }
});

var Footer = React.createClass({
    render: function () {
        return (
            <footer>
                <div className="container">
                    <div className="col-med-2"></div>
                    <div className="col-med-8">
                        &copy; Copyright 2017 Jay M. Frimmel
                    </div>
                    <div className="col-med-2"></div>
                </div>
            </footer>
        );
    }
})

var Stables = React.createClass({
    render: function () {
        return (
            <div>
                <h3>Riding Stables and Lesson Programs</h3>
                <div className="row">
                    <div className="col-med-2"></div>
                    <div className="col-med-8">
                        Here is information about and links to area riding stables and lesson programs. The stables are listed by county. Many of the riding stables offer boarding for your horse(s), and most of these also have their own riding instructors who offer lessons. Some stables allow bringing your own trainer for lessons.</div>
                    <div className="col-med-2"></div>
                </div>

                <div className="images">
                    <img src="assets/images/02.jpg" alt="western-rider" style={{width: "280px", height: "250px"}} />
                    <img src="assets/images/6e74c289cb6e688efb7c0b5c8c7dd81a.jpg" alt="Saddleseat" style={{width: "270px", height: "250px"}} />
                    <img src="assets/images/$_32.jpg" alt="girl-on-bay-pony" style={{width: "250px", height: "250px"}} />
                    <img src="assets/images/300px-Holsteiner-hunter.jpg" alt="hunter-horse" style={{width: "300px", height: "250px"}} />
                </div>

                <div className="container">
                    <table className="table table-bordered">
                        <tbody>
                        <tr>
                            <th>Stable Name</th>
                            <th>Website</th>
                            <th>Street Address</th>
                            <th>County</th>
                            <th>Services Offered</th>
                        </tr>
                        <tr>
                            <td>Blue Moon Stables</td>
                            <td>http://www.bluemoonstables.biz</td>
                            <td>1120 Whippoorwill Lane, Chapel Hill</td>
                            <td>Orange</td>
                            <td>Saddleseat, Lessons, Summer Camps</td>
                        </tr>
                        <tr>
                            <td>Chapel Hill Equestrian</td>
                            <td>http://www.chapelhillequestrian.net/default.htm</td>
                            <td>6614 Alexander Dr, Chapel Hill</td>
                            <td>Orange</td>
                            <td>Boarding, Lessons, Hunters, Dressage</td>
                        </tr>
                        <tr>
                            <td>Double Take Stables</td>
                            <td>http://doubletakestables.weebly.com</td>
                            <td>Chapel Hill</td>
                            <td>Orange</td>
                            <td>Boarding, Lessons, Hunters, Jumpers, Summer Camps</td>
                        </tr>
                        <tr>
                            <td>Flying W Ranch</td>
                            <td>https://www.facebook.com/Flying-W-Ranch-366577716687074/</td>
                            <td>5120 St Marys Rd, HillsboroughJ</td>
                            <td>Orange</td>
                            <td>Boarding, Western, Hunter under Saddle, Lessons, Summer Camp</td>
                        </tr>
                        <tr>
                            <td>Mane Event Stables</td>
                            <td>http://maneeventstables.com</td>
                            <td>2545 Hwy 54 W, Chapel Hill</td>
                            <td>Orange</td>
                            <td>Boarding, Lessons, Hunters, Eventing, Summer Camps</td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
});

var Main = React.createClass({
    render: function () {
        return (
            <div>
                <div className="container">
                    <Jumbotron />
                    <Header />
                    <Stables />
                </div> 
                <Footer />
            </div>
        );
    }
});

ReactDOM.render((
    <Main />
), document.getElementById('root'));
