import React, {useState} from 'react';
import { Link, Element, scroller } from 'react-scroll';
import { InView } from 'react-intersection-observer';
import Modal from 'react-modal';
import './About.css';
import backgroundImage from './images/bg-profile-positive.png'; // Replace with your actual image path

import image1 from './images/bg.jpg';
import image2 from './images/bg-profile.jpg';
import image3 from './images/profile-pic.jpg';

const scrollToNext = (currentSection) => {
	const sections = [
		'about',
		'details1',
		'details2',
		'details3',
		'details4',
		'details5',
		'details6',
		'details7',
		'details8',
	];
	const currentIndex = sections.indexOf(currentSection);
	const nextIndex = currentIndex + 1;

	if (nextIndex < sections.length) {
		scroller.scrollTo(sections[nextIndex], {
			duration: 1000,
			delay: 0,
			smooth: 'easeInOutQuart',
		});
	}
};

// Array of gallery items
const galleryItems = [
  { id: 'tile1', text: 'Tile 1', color: 'dark-purple', image: image1 },
  { id: 'tile2', text: 'Tile 2', color: 'light-purple', image: image2 },
  { id: 'tile3', text: 'Tile 3', color: 'dark-purple', image: image3 },
  { id: 'tile4', text: 'Tile 4', color: 'light-purple', image: image1 },
  { id: 'tile5', text: 'Tile 5', color: 'dark-purple', image: image2 },
  { id: 'tile6', text: 'Tile 6', color: 'light-purple', image: image3 },
  { id: 'tile7', text: 'Tile 7', color: 'dark-purple', image: image1 },
  { id: 'tile8', text: 'Tile 8', color: 'light-purple', image: image2 },
  { id: 'tile9', text: 'Tile 9', color: 'dark-purple', image: image3 },
];

function About() {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [activeImage, setActiveImage] = useState(null);

  const openModal = (image) => {
    setActiveImage(image);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
    setActiveImage(null);
  };

	return (
		<div>
			<div
				className='About'
				style={{
					backgroundImage: `url(${backgroundImage})`,
					filter: 'invert(1)',
				}}
				onClick={() => scrollToNext('about')}
			>
				<nav className='nav-links'>
					<Link to='about' smooth={true} duration={1000}>
						About
					</Link>
					<Link to='details1' smooth={true} duration={1000}>
						Work
					</Link>
					<Link to='details2' smooth={true} duration={1000}>
						Contact
					</Link>
				</nav>
				<div className='about-content'>
					<h1 className='heading'>RENJITH KARIPURAM</h1>
					<p className='name-content'>
						started <br></br>
						my<br></br>
						advertising <br></br>
						career <br></br>
						in 2008.
					</p>
				</div>
			</div>
			<Element name='details1' className='element'>
				<InView triggerOnce>
					{({ inView, ref }) => (
						<div
							ref={ref}
							className={`details ${inView ? 'visible' : ''}`}
							onClick={() => scrollToNext('details1')}
						>
							<div
								className='about-section section'
								style={{
									backgroundImage: `url(${backgroundImage})`,
									filter: 'invert(1)',
								}}
							>
								<h2 className='heading'>RENJITH KARIPURAM</h2>
								<p className='name-content'>
									After 10+<br></br> years,<br></br> I shifted<br></br> into
									digital<br></br> products.
								</p>
							</div>
						</div>
					)}
				</InView>
			</Element>
			<Element name='details2' className='element'>
				<InView triggerOnce>
					{({ inView, ref }) => (
						<div
							ref={ref}
							className={`details ${inView ? 'visible' : ''}`}
							onClick={() => scrollToNext('details2')}
						>
							<div
								className='section about-me'
								style={{ backgroundColor: '#000' }}
							>
								<div className='content-wrapper'>
									<h3>About me</h3>
									<p>
										I am <b>a product designer</b>
										<br></br> with <b>a strong focus</b> on the<br></br>{' '}
										<b>visual design</b>
										experience.
									</p>
								</div>
							</div>
						</div>
					)}
				</InView>
			</Element>
			<Element name='details3' className='element'>
				<InView triggerOnce>
					{({ inView, ref }) => (
						<div
							ref={ref}
							className={`details ${inView ? 'visible' : ''}`}
							onClick={() => scrollToNext('details3')}
						>
							<div
								className='section about-me'
								style={{ backgroundColor: '#000' }}
							>
								<div className='content-wrapper'>
									<h3>WHAT I DO?</h3>
									<p>
										<ul>
											<li>UI DESIGN</li>
											<li>UX DESIGN </li>
											<li>Graphic Design</li>
											<li>Video Editing</li>
											<li>Sculpting</li>
											<li>Advertising</li>
											<li>Illustration</li>
											<li>PACKAGING DESIGN</li>
										</ul>
									</p>
								</div>
							</div>
						</div>
					)}
				</InView>
			</Element>
			<Element name='details4' className='element'>
				<InView triggerOnce>
					{({ inView, ref }) => (
						<div
							ref={ref}
							className={`details ${inView ? 'visible' : ''}`}
							onClick={() => scrollToNext('details4')}
						>
							<div
								className='section about-me'
								style={{ backgroundColor: '#000' }}
							>
								<div className='content-wrapper'>
									<h3>EXPERIENCE</h3>
									<p>
										oVER A DECADE OF<br></br> <b>EXPERIENCE IN DESIGN</b> AND
										<br></br> WORKING WITH SOME OF THE<br></br> MOST TALENTED
										PEOPLE IN<br></br> THE BUSINESS
									</p>
								</div>
							</div>
						</div>
					)}
				</InView>
			</Element>
			<Element name='details5' className='element'>
				<InView triggerOnce>
					{({ inView, ref }) => (
						<div
							ref={ref}
							className={`details ${inView ? 'visible' : ''}`}
							onClick={() => scrollToNext('details5')}
						>
							<div
								className='section about-me'
								style={{ backgroundColor: '#000' }}
							>
								<div className='content-wrapper'>
									<ul className='exp-list'>
										<li>
											<div className='first'>Now</div>
											<div className='second'>
												Sr. Visual Designer
												<span className='sub-title'>Frog design</span>
											</div>
										</li>
										<li>
											<div className='first'>2017</div>
											<div className='second'>
												SR. ART DIRECTOR
												<span className='sub-title'>TARGET GROUP</span>
											</div>
										</li>
										<li>
											<div className='first'>2012</div>
											<div className='second'>
												ART DIRECTOR
												<span className='sub-title'>Ogilvy & mather</span>
											</div>
										</li>
										<li>
											<div className='first'>2008</div>
											<div className='second'>
												JUNIOR ART DIRECTOR
												<span className='sub-title'>ADVERTISING</span>
											</div>
										</li>
									</ul>
								</div>
							</div>
						</div>
					)}
				</InView>
			</Element>
			<Element name='details6' className='element'>
				<InView triggerOnce>
					{({ inView, ref }) => (
						<div
							ref={ref}
							className={`details ${inView ? 'visible' : ''}`}
							onClick={() => scrollToNext('details6')}
						>
							<div
								className='section about-me'
								style={{ backgroundColor: '#000' }}
							>
								<div className='content-wrapper'>
									<h3>CLIENTS</h3>
									<p>
										i WORKED WITH SOME OF THE MOST INNOVATIVE industry leaders
										to help build their top-notch products
									</p>
								</div>
							</div>
						</div>
					)}
				</InView>
			</Element>
			<Element name='details7' className='element'>
				<InView triggerOnce>
					{({ inView, ref }) => (
						<div
							ref={ref}
							className={`details ${inView ? 'visible' : ''}`}
							onClick={() => scrollToNext('details7')}
						>
							<div
								className='section about-me'
								style={{ backgroundColor: '#000' }}
							>
								<div className='content-wrapper'>
									<ul className='exp-list'>
										<li>
											<div className='first'>2024</div>
											<div className='second'>
												Straumann® Dental Implant 
												<span className='sub-title'>
													Swiss company based in Basel manufacturing dental
													implants. Single-handedly managing end-to-end DLS and
													UI requirements for Straumann AXS and other portals
													while collaborating with 9 different Scrum teams.
												</span>
											</div>
										</li>
										<li>
											<div className='first'>2023</div>
											<div className='second'>
												McDonald’s SRIW Project (Immersive design)
												<span className='sub-title'>
													Spearheaded the global design and development of an
													immersive training program for McDonald’s employees.
													Directed the visual design team, set creative
													directions, managed project timelines, and contributed
													to the visual design as a lead.
												</span>
											</div>
										</li>
										<li>
											<div className='first'>2023</div>
											<div className='second'>
												Unilever Nutrition Platform Redesign 
												<span className='sub-title'>
													Single-handedly engineered a platform overhaul that
													transforms data into actionable insights, aiding in
													product optimization and strategic decision-making
													platform for Unilever Nutrition.
												</span>
											</div>
										</li>
										<li>
											<div className='first'>2023</div>
											<div className='second'>
												Metaverse : EV Scooter Repair Training
												<span className='sub-title'>
													Developed a 2-month training module using immersive
													technology for EV scooter repairs (Created the Virtual
													world and Training program)
												</span>
											</div>
										</li>
									</ul>
								</div>
							</div>
						</div>
					)}
				</InView>
			</Element>
			<Element name='details8' className='element'>
				<InView triggerOnce>
					{({ inView, ref }) => (
						<div
							ref={ref}
							className={`details ${inView ? 'visible' : ''}`}
							onClick={() => scrollToNext('details8')}
						>
							<div
								className='section about-me'
								style={{ backgroundColor: '#000' }}
							>
								<div className='content-wrapper'>
									<ul className='exp-list'>
										<li>
											<div className='first'>2022</div>
											<div className='second'>
												AIA Group Limited : Insurance company
												<span className='sub-title'>
													Innovation City Scoreboard & POC Design Designed a
													gamified platform by building an Innovation City that
													exhibits innovation, automation, and growth potential
													using 3D Models. We designed a 3D scorecard web
													interaction and 3 POCs that solved the task to support
													its growth and advancement in a variety of sectors.
												</span>
											</div>
										</li>
										<li>
											<div className='first'>2022</div>
											<div className='second'>
												ING Group : Financial services corporation
												<span className='sub-title'>
													Data Governance Playbook Design ING has partnered with
													frog to help embrace differential governance by the
													business while minimising the learning effort in the
													organisation. frog helped translate the current
													strategy document into a playbook that will guide ING
													data consumers to assess & classify the data while
													limiting risks associated with its use.
												</span>
											</div>
										</li>
										<li>
											<div className='first'>2022</div>
											<div className='second'>
												Royal Reesink N.V.
												<span className='sub-title'>
													Royal Reesink is a market leading global distributor
													and service provider for high-quality equipment,
													components and services for agriculture, landscape
													maintenance, intralogistics, logistic warehousing and
													the construction equipment industry.
												</span>
											</div>
										</li>
										<li>
											<div className='first'>2022</div>
											<div className='second'>
												Element Xcelerate : Fleet Management Platform
												<span className='sub-title'>
													Redesigned the dashboard to make data intuitive, and
													meaningful using visualization powered by SiSense.
													Element Fleet Management is the leading global fleet
													management company, providing world-class management
													services and financing for commercial vehicle and
													equipment fleets. 
												</span>
											</div>
										</li>
									</ul>
								</div>
							</div>
						</div>
					)}
				</InView>
			</Element>
      <Element name="details8" className="element">
      <InView triggerOnce>
        {({ inView, ref }) => (
          <div ref={ref} className={`details ${inView ? 'visible' : ''}`}>
            <div className="gallery-grid">
              {galleryItems.map((item, index) => (
                <div
                  key={item.id}
                  className={`gallery-tile ${item.color}`}
                  onClick={() => openModal(item.image)}
                >
                  <span className="tile-text">{item.text}</span>
                </div>
              ))}
            </div>
          </div>
        )}
      </InView>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Image Modal"
        className="modal"
        overlayClassName="overlay"
      >
        <button className="close-button" onClick={closeModal}>Close</button>
        {activeImage && <img src={activeImage} alt="Gallery" className="modal-image" />}
      </Modal>
    </Element>
		</div>
	);
}

export default About;
