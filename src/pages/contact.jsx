import React, { useEffect } from "react";
import { Helmet } from "react-helmet";

import NavBar from "../components/common/navBar";
import Footer from "../components/common/footer";
import Logo from "../components/common/logo";
import Socials from "../components/about/socials";

import INFO from "../data/user";
import SEO from "../data/seo";

import "./styles/contact.css";

const Contact = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	const currentSEO = SEO.find((item) => item.page === "contact");

	return (
		<React.Fragment>
			<Helmet>
				<title>{`Contact | ${INFO.main.title}`}</title>
				<meta name="description" content={currentSEO.description} />
				<meta
					name="keywords"
					content={currentSEO.keywords.join(", ")}
				/>
			</Helmet>

			<div className="page-content">
				<NavBar active="contact" />
				<div className="content-wrapper">
					<div className="contact-logo-container">
						<div className="contact-logo">
							<Logo width={46} />
						</div>
					</div>

					<div className="contact-container">
						<div className="title contact-title">
						🧑‍💻 Let's Get in Touch: Ways to Connect with Me. 
						</div>

						<div className="subtitle contact-subtitle">
						Thank you for visiting my portfolio website! I appreciate your interest 
						and would be delighted to connect with you. Please feel free to provide 
						your feedback, ask questions, or share any suggestions you may have. 
						I strive to be responsive and will make every effort to reply to your message 
						promptly.To get in touch with me, you can reach out via email at&nbsp;{" "}
						<a href={`mailto:${INFO.main.email}`}>
								{INFO.main.email}
						</a>. 
						I typically respond to all messages within 24 hours, although it may take 
						longer during busy periods. Your input is valuable to me, so please don't 
						hesitate to reach out.Thank you again for your visit, and I look forward to 
						hearing from you soon!
						</div>
					</div>

					<div className="socials-container">
						<div className="contact-socials">
							<Socials />
						</div>
					</div>

					<div className="page-footer">
						<Footer />
					</div>
				</div>
			</div>
		</React.Fragment>
	);
};

export default Contact;
