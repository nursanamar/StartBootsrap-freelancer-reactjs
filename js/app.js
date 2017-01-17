function Navigation() {
	return <nav id="mainNav" className="navbar navbar-default navbar-fixed-top navbar-custom">
        <div className="container">
            <div className="navbar-header page-scroll">
                <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
                    <span className="sr-only">Toggle navigation</span> Menu <i className="fa fa-bars"></i>
                </button>
                <a className="navbar-brand" href="#page-top">Start Bootstrap</a>
            </div>
            <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                <ul className="nav navbar-nav navbar-right">
                    <li className="hidden">
                        <a href="#page-top"></a>
                    </li>
                    <li className="page-scroll">
                        <a href="#portfolio">Portfolio</a>
                    </li>
                    <li className="page-scroll">
                        <a href="#about">About</a>
                    </li>
                    <li className="page-scroll">
                        <a href="#contact">Contact</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>;
}
function Header() {
	return  <header>
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <img className="img-responsive" src="img/profile.png" alt="" />
                    <div className="intro-text">
                        <span className="name">Start Bootstrap</span>
                        <hr className="star-light" />
                        <span className="skills">Web Developer - Graphic Artist - User Experience Designer</span>
                    </div>
                </div>
            </div>
        </div>
    </header>;
}
function PortofolioItem(props) {
	return <div className="col-sm-4 portfolio-item">
			<a href={"#"+props.id} className="portfolio-link" data-toggle="modal">
					<div className="caption">
							<div className="caption-content">
									<i className="fa fa-search-plus fa-3x"></i>
							</div>
					</div>
					<img src={props.picture} className="img-responsive" alt="" />
			</a>
	</div>
}
function PortofolioSection(props) {
	var item=[];
	props.data.forEach((data,index) => {
		item.push(<PortofolioItem id={data.id} picture={data.img} key={index} />);
	});
	return <section id="portfolio">
        <div className="container">
            <div className="row">
                <div className="col-lg-12 text-center">
                    <h2>Portfolio</h2>
                    <hr className="star-primary" />
                </div>
            </div>
            <div className="row">
							{item}
            </div>
        </div>
    </section>;
}
function AboutSection() {
   return <section className="success" id="about">
        <div className="container">
            <div className="row">
                <div className="col-lg-12 text-center">
                    <h2>About</h2>
                    <hr className="star-light" />
                </div>
            </div>
            <div className="row">
                <div className="col-lg-4 col-lg-offset-2">
                    <p>Freelancer is a free bootstrap theme created by Start Bootstrap. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional LESS stylesheets for easy customization.</p>
                </div>
                <div className="col-lg-4">
                    <p>Whether youre a student looking to showcase your work, a professional looking to attract clients, or a graphic artist looking to share your projects, this template is the perfect starting point!</p>
                </div>
                <div className="col-lg-8 col-lg-offset-2 text-center">
                    <a href="#" className="btn btn-lg btn-outline">
                        <i className="fa fa-download"></i> Download Theme
                    </a>
                </div>
            </div>
        </div>
    </section>;
}
function ContactSection() {
	return  <section id="contact">
        <div className="container">
            <div className="row">
                <div className="col-lg-12 text-center">
                    <h2>Contact Me</h2>
                    <hr className="star-primary" />
                </div>
            </div>
            <div className="row">
                <div className="col-lg-8 col-lg-offset-2">
                    <form name="sentMessage" id="contactForm" noValidate>
                        <div className="row control-group">
                            <div className="form-group col-xs-12 floating-label-form-group controls">
                                <label>Name</label>
                                <input type="text" className="form-control" placeholder="Name" id="name" required data-validation-required-message="Please enter your name." />
                                <p className="help-block text-danger"></p>
                            </div>
                        </div>
                        <div className="row control-group">
                            <div className="form-group col-xs-12 floating-label-form-group controls">
                                <label>Email Address</label>
                                <input type="email" className="form-control" placeholder="Email Address" id="email" required data-validation-required-message="Please enter your email address." />
                                <p className="help-block text-danger"></p>
                            </div>
                        </div>
                        <div className="row control-group">
                            <div className="form-group col-xs-12 floating-label-form-group controls">
                                <label>Phone Number</label>
                                <input type="tel" className="form-control" placeholder="Phone Number" id="phone" required data-validation-required-message="Please enter your phone number." />
                                <p className="help-block text-danger"></p>
                            </div>
                        </div>
                        <div className="row control-group">
                            <div className="form-group col-xs-12 floating-label-form-group controls">
                                <label>Message</label>
                                <textarea rows="5" className="form-control" placeholder="Message" id="message" required data-validation-required-message="Please enter a message."></textarea>
                                <p className="help-block text-danger"></p>
                            </div>
                        </div>
                        <br />
                        <div id="success"></div>
                        <div className="row">
                            <div className="form-group col-xs-12">
                                <button type="submit" className="btn btn-success btn-lg">Send</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </section>;
}
function Footer() {
	return <footer className="text-center">
        <div className="footer-above">
            <div className="container">
                <div className="row">
                    <div className="footer-col col-md-4">
                        <h3>Location</h3>
                        <p>3481 Melrose Place
                            <br />Beverly Hills, CA 90210</p>
                    </div>
                    <div className="footer-col col-md-4">
                        <h3>Around the Web</h3>
                        <ul className="list-inline">
                            <li>
                                <a href="#" className="btn-social btn-outline"><i className="fa fa-fw fa-facebook"></i></a>
                            </li>
                            <li>
                                <a href="#" className="btn-social btn-outline"><i className="fa fa-fw fa-google-plus"></i></a>
                            </li>
                            <li>
                                <a href="#" className="btn-social btn-outline"><i className="fa fa-fw fa-twitter"></i></a>
                            </li>
                            <li>
                                <a href="#" className="btn-social btn-outline"><i className="fa fa-fw fa-linkedin"></i></a>
                            </li>
                            <li>
                                <a href="#" className="btn-social btn-outline"><i className="fa fa-fw fa-dribbble"></i></a>
                            </li>
                        </ul>
                    </div>
                    <div className="footer-col col-md-4">
                        <h3>About Freelancer</h3>
                        <p>Freelance is a free to use, open source Bootstrap theme created by <a href="http://startbootstrap.com">Start Bootstrap</a>.</p>
                    </div>
                </div>
            </div>
        </div>
        <div className="footer-below">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        Copyright &copy; Your Website 2016
                    </div>
                </div>
            </div>
        </div>
    </footer>;
}
function ScrollButton() {
	return  <div className="scroll-top page-scroll hidden-sm hidden-xs hidden-lg hidden-md">
        <a className="btn btn-primary" href="#page-top">
            <i className="fa fa-chevron-up"></i>
        </a>
    </div>;
}
function PortofolioModals(props) {
	return  <div className="portfolio-modal modal fade" id={props.id} tabIndex="-1" role="dialog" aria-hidden="true">
        <div className="modal-content">
            <div className="close-modal" data-dismiss="modal">
                <div className="lr">
                    <div className="rl">
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-lg-8 col-lg-offset-2">
                        <div className="modal-body">
                            <h2>{props.judul}</h2>
                            <hr className="star-primary" />
                            <img src={props.picture} className="img-responsive img-centered" alt="" />
                            <p>{props.desc}</p>
                            <ul className="list-inline item-details">
                                <li>Client:
                                    <strong><a href="http://startbootstrap.com">Start Bootstrap</a>
                                    </strong>
                                </li>
                                <li>Date:
                                    <strong><a href="http://startbootstrap.com">April 2014</a>
                                    </strong>
                                </li>
                                <li>Service:
                                    <strong><a href="http://startbootstrap.com">Web Development</a>
                                    </strong>
                                </li>
                            </ul>
                            <button type="button" className="btn btn-default" data-dismiss="modal"><i className="fa fa-times"></i> Close</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>;
}
function App(props) {
	var modal=[];
	props.portofolio.forEach((data,index) => {
		modal.push(<PortofolioModals id={data.id} judul={data.judul} picture={data.img} desc={data.description} key={index}/>);
	});

	return <div>
	<Navigation />
	<Header />
	<PortofolioSection data={props.portofolio} />
	<AboutSection />
	<ContactSection />
	<Footer />
	{modal}
	</div>;
}
var data =[{
	"id":"PortofolioModal1","judul":"Project Title",
"img":"img/portfolio/cabin.png",
"description":"Use this area of the page to describe your project. The icon above is part of a free icon set by <a href='https://sellfy.com/p/8Q9P/jV3VZ/'>Flat Icons</a>. On their website, you can download their free set with 16 icons, or you can purchase the entire set with 146 icons for only $12!"
},{
	"id":"PortofolioModal2","judul":"Project Title",
"img":"img/portfolio/cake.png",
"description":"Use this area of the page to describe your project. The icon above is part of a free icon set by <a href='https://sellfy.com/p/8Q9P/jV3VZ/'>Flat Icons</a>. On their website, you can download their free set with 16 icons, or you can purchase the entire set with 146 icons for only $12!"
},{
	"id":"PortofolioModal3","judul":"Project Title",
"img":"img/portfolio/circus.png",
"description":"Use this area of the page to describe your project. The icon above is part of a free icon set by <a href='https://sellfy.com/p/8Q9P/jV3VZ/'>Flat Icons</a>. On their website, you can download their free set with 16 icons, or you can purchase the entire set with 146 icons for only $12!"
},{
	"id":"PortofolioModal4","judul":"Project Title",
"img":"img/portfolio/game.png",
"description":"Use this area of the page to describe your project. The icon above is part of a free icon set by <a href='https://sellfy.com/p/8Q9P/jV3VZ/'>Flat Icons</a>. On their website, you can download their free set with 16 icons, or you can purchase the entire set with 146 icons for only $12!"
},{
	"id":"PortofolioModal5","judul":"Project Title",
"img":"img/portfolio/safe.png",
"description":"Use this area of the page to describe your project. The icon above is part of a free icon set by <a href='https://sellfy.com/p/8Q9P/jV3VZ/'>Flat Icons</a>. On their website, you can download their free set with 16 icons, or you can purchase the entire set with 146 icons for only $12!"
},{
	"id":"PortofolioModal6","judul":"Project Title",
"img":"img/portfolio/submarine.png",
"description":"Use this area of the page to describe your project. The icon above is part of a free icon set by <a href='https://sellfy.com/p/8Q9P/jV3VZ/'>Flat Icons</a>. On their website, you can download their free set with 16 icons, or you can purchase the entire set with 146 icons for only $12!"
}]
ReactDOM.render(
	<App portofolio={data} />,
	document.getElementById('page-top')
);
