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

var StableHeader = React.createClass({
    render: function () {
        return (
            <h3>Riding Stables and Lesson Programs</h3>
        );
    }
});

var StableLede = React.createClass({
    render: function () {
        return ( 
            <div className="row">
                <div className="col-med-2"></div>
                <div className="col-med-8">
                    Here is information about and links to area riding stables and lesson programs. The stables are listed by county. Many of the riding stables offer boarding for your horse(s), and most of these also have their own riding instructors who offer lessons. Some stables allow bringing your own trainer for lessons.</div>
                <div className="col-med-2"></div>
            </div>
        );
    }
});

var StableImages = React.createClass({
    render: function () {
        return (
            <div className="images">
                <img src="assets/images/02.jpg" alt="western-rider" style={{width: "280px", height: "250px"}} />
                {" "}
                <img src="assets/images/6e74c289cb6e688efb7c0b5c8c7dd81a.jpg" alt="Saddleseat" style={{width: "270px", height: "250px"}} />
                {" "}
                <img src="assets/images/$_32.jpg" alt="girl-on-bay-pony" style={{width: "250px", height: "250px"}} />
                {" "}
                <img src="assets/images/300px-Holsteiner-hunter.jpg" alt="hunter-horse" style={{width: "300px", height: "250px"}} />
            </div>
        );
    }
});

var Stable = React.createClass({
    render: function () {
        return (
            <tr>
                <td>{this.props.name}</td>
                <td>{this.props.link}</td>
                <td>{this.props.address}</td>
                <td>{this.props.county}</td>
                <td>{this.props.features}</td>
            </tr>
        );
    }
});

let StablesList = [
    {
        name: "Blue Moon Stables",
        link: "http://www.bluemoonstables.biz",
        address: "1120 Whippoorwill Lane, Chapel Hill",
        county: "Orange",
        features: "Saddleseat, Lessons, Summer Camps"
    },
    {
        name: "Chapel Hill Equestrian",
        link: "http://www.chapelhillequestrian.net/default.htm",
        address: "6614 Alexander Dr, Chapel Hill",
        county: "Orange",
        features: "Boarding, Lessons, Hunters, Dressage"
    },
    {
        name: "Double Take Stables",
        link: "http://doubletakestables.weebly.com",
        address: "Chapel Hill",
        county: "Orange",
        features: "Boarding, Lessons, Hunters, Jumpers, Summer Camps"
    },
    {
        name: "Flying W Ranch",
        link: "https://www.facebook.com/Flying-W-Ranch-366577716687074/",
        address: "5120 St Marys Rd, HillsboroughJ",
        county: "Orange",
        features: "Boarding, Western, Hunter under Saddle, Lessons, Summer Camp"
    },
    {
        name: "Mane Event Stables",
        link: "http://maneeventstables.com",
        address: "2545 Hwy 54 W, Chapel Hill",
        county: "Orange",
        features: "Boarding, Lessons, Hunters, Eventing, Summer Camps"
    }
];

var StableList = React.createClass({
    render: function () {
        return (
            <tbody>
                {
                  StablesList.map(stable => 
                    <Stable
                        name={stable.name}
                        link={stable.link}
                        address={stable.address}
                        county={stable.county}
                        features={stable.features} />
                  )
                }
            </tbody>
        );
    }
});

var StableContent = React.createClass({
    render: function () {
        return (
            <div className="container">
                <table className="table table-bordered">
                    <thead>
                        <tr>
                            <th>Stable Name</th>
                            <th>Website</th>
                            <th>Street Address</th>
                            <th>County</th>
                            <th>Services Offered</th>
                        </tr>
                    </thead>
                    <StableList />
                </table>
            </div>
        );
    }
});

var Stables = React.createClass({
    render: function () {
        return (
            <div>
                <StableHeader />
                <StableLede />
                <StableImages />
                <StableContent />
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
