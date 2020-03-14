import React, { Component } from 'react'

export default class Projects extends Component {
  render() {
    return (
      <div>
				<section className="colorlib-work" data-section="projects">
					<div className="colorlib-narrow-content">
						<div className="row">
							<div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
								<span className="heading-meta">My Work</span>
								<h2 className="colorlib-heading animate-box">Recent Projects</h2>
							</div>
						</div>
						<div className="row">
							<div className="col-md-4 animate-box" data-animate-effect="fadeInLeft">
								<div className="project" style={{backgroundImage: 'url(images/img-1.png)'}}>
									<div className="desc">
										<div className="con">
											<h3><a href="https://irtzmalik.github.io/Password_Generator/">Password Generator</a></h3>
											<span>Password Generator</span>
											<p className="icon">
											<span><a href="https://irtzmalik.github.io/Password_Generator/"><i className="icon-share3" /></a></span>	
											</p>
										</div>
									</div>
								</div>
							</div>
							<div className="col-md-4 animate-box" data-animate-effect="fadeInRight">
								<div className="project" style={{backgroundImage: 'url(images/img-2.png)'}}>
									<div className="desc">
										<div className="con">
											<h3><a href="https://irtzmalik.github.io/CodeQuiz/">Code Quiz</a></h3>
											<span>Code Quiz</span>
											<p className="icon">
												<span><a href="https://irtzmalik.github.io/CodeQuiz/"><i className="icon-share3" /></a></span>

											</p>
										</div>
									</div>
								</div>
							</div>
							<div className="col-md-4 animate-box" data-animate-effect="fadeInTop">
								<div className="project" style={{backgroundImage: 'url(images/img-3.png)'}}>
									<div className="desc">
										<div className="con">
											<h3><a href="https://saltamay.github.io/simply/">Simply</a></h3>
											<span>Simply (Group Project)</span>
											<p className="icon">
												<span><a href="https://saltamay.github.io/simply/"><i className="icon-share3" /></a></span>

											</p>
										</div>
									</div>
								</div>
							</div>
							<div className="col-md-4 animate-box" data-animate-effect="fadeInBottom">
								<div className="project" style={{backgroundImage: 'url(images/img-4.png)'}}>
									<div className="desc">
										<div className="con">
											<h3><a href="https://quiz-journey.herokuapp.com/">Quiz Journey</a></h3>
											<span>Quiz Journey</span>
											<p className="icon">
												<span><a href="https://quiz-journey.herokuapp.com/"><i className="icon-share3" /></a></span>

											</p>
										</div>
									</div>
								</div>
							</div>
							<div className="col-md-4 animate-box" data-animate-effect="fadeInLeft">
								<div className="project" style={{backgroundImage: 'url(images/img-5.png)'}}>
									<div className="desc">
										<div className="con">
											<h3><a href="https://github.com/irtzmalik/Dev_Profile_Generator">Developer Profile Generator</a></h3>
											<span>Dev_Profile_Generator</span>
											<p className="icon">
												<span><a href="https://github.com/irtzmalik/Dev_Profile_Generator"><i className="icon-share3" /></a></span>

											</p>
										</div>
									</div> 
								</div>
							</div>
							<div className="col-md-4 animate-box" data-animate-effect="fadeInRight">
								<div className="project" style={{backgroundImage: 'url(images/img-.jpg)'}}>
									<div className="desc">
										<div className="con">
											<h3><a href="work.html">TBA</a></h3>
											<span>TBA</span>
											<p className="icon">
												<span><a href="#"><i className="icon-share3" /></a></span>

											</p>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="row">
							<div className="col-md-12 animate-box">
								<p><a href="#" className="btn btn-primary btn-lg btn-load-more">Load more <i className="icon-reload" /></a></p>
							</div>
						</div>
					</div>
				</section>
      </div>
    )
  }
}
