import React, { Component } from 'react';
import { Collapse } from 'react-collapse';
import VisibilitySensor from 'react-visibility-sensor';
import ImageZoom from 'react-medium-image-zoom';
import Isvg from 'react-inlinesvg';
import './NotifiVR.css';

import Button from '../../../components/button/Button';
import ProjectPage from '../../../components/project-page/ProjectPage';
import Process from '../../../components/process/Process';
import ProjectStats from '../../../components/project-stats/ProjectStats';
import ProjectSection from "../../../components/project-section/ProjectSection";
import Row from '../../../components/row/Row';
import Lightbox from '../../../components/lightbox/Lightbox';
import Video from '../../../components/video/Video';
import Callout from '../../../components/callout/Callout';
import PolarChart from '../../../components/polar-chart/PolarChart';

import hero from '../../../media/notifiVR/hero.jpg';

import problem from '../../../media/notifiVR/vr_problem.svg';
import solution_webm from '../../../media/notifiVR/notifi_solution.webm';
import solution_mp4 from '../../../media/notifiVR/notifi_solution.mp4';

//research icons
import survey from '../../../media/icons/survey.svg';
import participate from '../../../media/icons/participate.svg';
import vr_comp from '../../../media/notifiVR/icons/comp.svg';

import fps from '../../../media/notifiVR/space_pirate.jpg';
import blocks from '../../../media/notifiVR/blocks.jpg';
import sharing from '../../../media/notifiVR/sharing.jpg';
import playing_env from '../../../media/notifiVR/playing_env.jpg';
import framework from '../../../media/notifiVR/framework.png';
import developer_storyboard from '../../../media/notifiVR/developer_storyboard.png';

//insight
import visual from '../../../media/notifiVR/icons/vision.svg';
import sound from '../../../media/notifiVR/icons/sound.svg';
import haptic from '../../../media/notifiVR/icons/haptic.svg';
import affinity_map from '../../../media/notifiVR/affinity_map.jpg';

import phone from '../../../media/notifiVR/sketches/phone.jpg';
import phone_booth from '../../../media/notifiVR/sketches/phone_booth.jpg';
import physical from '../../../media/notifiVR/sketches/physical.jpg';
import popup from '../../../media/notifiVR/sketches/popup.jpg';
import watch from '../../../media/notifiVR/sketches/watch.jpg';
import footsteps from '../../../media/notifiVR/sketches/footstep.jpg';

//videos
import phone_icon from '../../../media/notifiVR/icons/phone.svg';
import phone_booth_icon from '../../../media/notifiVR/icons/phone_booth.svg';
import popup_icon from '../../../media/notifiVR/icons/popup-2.svg';
import watch_icon from '../../../media/notifiVR/icons/watch.svg';

import phone_video_webm from '../../../media/notifiVR/video/denwa_c.webm';
import phone_video_mp4 from '../../../media/notifiVR/video/denwa_c.mp4';

import phone_booth_video_webm from '../../../media/notifiVR/video/pb_fc_c.webm';
import phone_booth_video_mp4 from '../../../media/notifiVR/video/pb_fc_c.mp4';

import watch_video_webm from '../../../media/notifiVR/video/watch_c.webm';
import watch_video_mp4 from '../../../media/notifiVR/video/watch_c.mp4';

import popup_video_webm from '../../../media/notifiVR/video/slack.webm';
import popup_video_mp4 from '../../../media/notifiVR/video/slack.mp4';

import fourteen from '../../../media/notifiVR/icons/fourteen.svg';
import lattice_square from '../../../media/notifiVR/icons/square.svg';
import metrics from '../../../media/notifiVR/icons/five.svg';

import testing from '../../../media/home/vr.jpg';

class NotifiVR extends Component {

  constructor () {
    super();

    this.state = {
      lightboxIsOpen: false,
      index: 0,
      researchOpen: false,
      insightsOpen: false,
      environmentOpen: false,
      evaluateOpen: false,
      resultsOpen: false,
    };

    this.openLightbox = this.openLightbox.bind(this);
    this.closeLightbox  = this.closeLightbox.bind(this);
    this.collapseResearch = this.collapseResearch.bind(this);
    this.collapseInsights = this.collapseInsights.bind(this);
    this.collapseEnvironment = this.collapseEnvironment.bind(this);
    this.collapseEvaluate = this.collapseEvaluate.bind(this);
    this.collapseResults = this.collapseResults.bind(this);
  }

  openLightbox(index, event) {
    this.setState({
      lightboxIsOpen: true,
      index: index
    })
  }

  closeLightbox() {
    this.setState({
      lightboxIsOpen: false
    })
  }

  collapseResearch() {
    this.closeLightbox();
    this.setState({
      researchOpen: !this.state.researchOpen
    })
  }

  collapseInsights() {
    this.closeLightbox();
    this.setState({
      insightsOpen: !this.state.insightsOpen
    })
  }

  collapseEnvironment() {
    this.closeLightbox();
    this.setState({
      environmentOpen: !this.state.environmentOpen
    })
  }

  collapseEvaluate() {
    this.closeLightbox();
    this.setState({
      evaluateOpen: !this.state.evaluateOpen
    })
  }


  collapseResults() {
    this.closeLightbox();
    this.setState({
      resultsOpen: !this.state.resultsOpen
    })
  }

  render() {

    let pStyle = "col-xs-12 col-sm-12 col-md-offset-1 col-md-10 col-lg-offset-2dot5 col-lg-7 col-xl-offset-3 col-xl-6";
    let quoteStyle = "quote col-xs-12 col-sm-12 col-md-offset-2 col-md-8 col-lg-offset-3 col-lg-6 col-xl-offset-4 col-xl-4";

    let steps = [
      {
        title: "Research",
        processes: ["Survey", "Participatory Design", "Competitive Analysis"]
      },
      {
        title: "Synthesize",
        processes: ["Mind Map", "Affinity Map", "Actionable Insights"]
      },
      {
        title: "Design",
        processes: ["Sketches", "Unity Framework", "3D Models"]
      },
      {
        title: "Prototype",
        processes: ["Unity VR Environment", "Android App", "Notification Methods"]
      },
      {
        title: "Evaluate",
        processes: ["User Testing", "Design Guidelines", "Academic Paper"]
      }
    ];

    let images = [phone, phone_booth, popup, watch, physical, footsteps];

    let self = this;

    return (
      <div className="NotifiVR">
        <ProjectPage
          title={"NotifiVR"}
          hero={hero}
          heroAlt={"User testing of a person testing the Vive VR headset."}
          description={"Receive notifications in VR through virtual phones, smart watches, and popups"}
          navbarColor={"green"}
          content={
            <span>
              <ProjectSection
                title={"Problem"}
                content={
                  <span>
                    <Row content={
                      <p className={pStyle}>
                        When inside a virtual reality environment, you lose your connection to the outside world. Sound, vision, and movement are all mirrored and reflected in VR, which is great for immersion, but sometimes you need to know when you’re getting a call from your spouse or about to hit a chair. <b>We explored different methods of alerting players in VR about important information from their real life.</b>
                      </p>
                    }/>

                    <Row content={
                      <Isvg className={pStyle} src={problem}/>
                    }/>

                    <Row content={
                      <p className={"caption " + pStyle}>
                        VR can cause you to miss out on what’s happening around you
                      </p>
                    }/>


                  </span>
                }
              />

              <ProjectSection
                title={"Solution"}
                content={
                  <span>
                    <Row content={
                      <p className={pStyle}>
                        Four different notification methods that were prototyped and tested with real users to inform us how to design alerts in VR.
                      </p>
                    }/>

                    <Row className="one-margin-top" content={
                      <VisibilitySensor>
                        {({isVisible}) =>
                          <div className={pStyle}>
                            <Video
                              autoplay={isVisible}
                              webMsrc={solution_webm}
                              mp4src={solution_mp4}
                              caption={"Quick overview of all notification methods"}/>
                          </div>
                        }
                      </VisibilitySensor>
                    }/>
                  </span>
                }
              />

              <ProjectSection
                title={"Process"}
                content={
                  <span>
                    <Row content={
                      <p className={pStyle}>
                        Coming into this project, some work had been done previously by the Master’s student whose thesis this was, primarily in the form of a survey he had distributed. We picked up from there, helping him along to the final prototype.
                      </p>
                    }/>

                    <Row content={
                      <div
                        className="col-xs-12 col-sm-12 col-md-offset-1 col-md-10 col-lg-offset-1 col-lg-10 col-xl-offset-2 col-xl-8">
                        <Process
                          steps={steps}/>
                      </div>
                    }/>
                  </span>
                }
              />

              <ProjectSection
                title={"Logistics"}
                content={
                  <ProjectStats
                    team={["3 designers", "3 developers"]}
                    responsibilities={["Interaction Design", "Framework Design", "User Testing", "Stats Analysis"]}
                    time={"Jan ’17 – April ’17"}
                  />
                }
              />

              <ProjectSection
                title={"Research"}
                content={
                  <span>
                    <Row content={
                      <p className={pStyle}>
                        We began by sending out a survey to get VR fans’ experience with missed notifications as well as how they would prioritize certain alerts over others. We used the survey to inform a design workshop we held with Atlanta VR designers and developers, and also conducted research into how Playstation VR, the HTC Vive, and the Oculus Rift handled interruptions.
                      </p>
                    }/>

                    <div className="row callouts">
                      <Callout
                        image={survey}
                        altText={"survey checklist"}
                        title={"Survey"}
                        description={"Distributed online to VR enthusiasts with 61 responses"}
                        first={true}
                        delay={0}
                      />

                      <Callout
                        image={participate}
                        altText={"two people in front of a board"}
                        title={"Participatory Design"}
                        description={"Conducted 2 hour session with 7 VR professionals"}
                        delay={150}
                      />

                      <Callout
                        image={vr_comp}
                        altText={"playstation, vive, oculus logos"}
                        title={"Competitive Analysis"}
                        description={"Looked at what Playstation VR, HTC Vive, and Oculus do"}
                        middle={true}
                        delay={300}
                      />
                    </div>

                    <Row content={
                      <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 button-wrapper" onClick={this.collapseResearch}>
                        <Button
                          label={this.state.researchOpen ? "Hide Research Process" : "See Research Process"}
                          color={"outline green"}
                        />
                      </div>
                    }/>

                    <Collapse isOpened={this.state.researchOpen}>

                    <Row content={
                      <h4 className={pStyle}>Survey</h4>
                    }/>

                    <Row content={
                      <p className={pStyle}>
                        Our survey was distributed around subreddits like r/vive, r/oculus, as well some private forums. It asked questions regarding how long they’d owned a VR device, what their longest play sessions had been, if they’d ever missed an important event due to being immersed in VR, and asked for them to rank various possible notifications by priority.
                      </p>
                    }/>

                    <Row content={
                      <p className={pStyle}>
                        From their answers we understood that people were primarily interested in
                        information about their physical surroundings, as well as calls and texts. Some key quotes
                        include:
                      </p>
                    }/>

                    <Row content={
                      <p className={quoteStyle}>
                        “I was standing near a couch. When I turned to look at something behind me I bumped into the
                        couch.”
                      </p>
                    }/>

                    <Row content={
                      <p className={quoteStyle}>
                        “My phone was ringing and I missed the call. It was quite an important call. I would like an app that shows who is calling my phone on the HMD.”
                      </p>
                    }/>

                    <Row content={
                      <h4 className={pStyle}>Participatory Design</h4>
                    }/>

                    <Row content={
                      <p className={pStyle}>
                        Taking the results of this survey, we then held a 2 hour participatory design activity with professional VR Designers in the Atlanta area to help get their perspective on how we might solve for those problems.
                      </p>
                    }/>

                    <div className="row one-margin-top">
                        <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
                          <img className="feature-image" src={fps}
                               alt="A high energy shooting environment"/>
                        </div>

                        <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
                          <img className="feature-image" src={blocks}
                               alt="A low energy building environment"/>
                        </div>
                    </div>

                    <Row className="one-margin-bottom" content={
                      <p className={"caption " + pStyle}>
                        Designing notifications for both high energy and low energy VR environments
                      </p>
                    }/>


                    <Row content={
                      <p className={pStyle}>
                       We provided 2 different environments to think about while designing notifications: a closed and busy scenario like a shooter game, and a more open relaxed game like Tilt Brush. At the end of the activity everyone shared the designs and concerns they had written on Post-it notes and we collected them for further coding and grouping.
                      </p>
                    }/>

                    <Row className="one-margin-top" content={
                      <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
                        <img className="feature-image" src={sharing}
                            alt="One person at a whiteboard sharing their design ideas"/>
                      </div>
                    }/>

                    <Row className="one-margin-bottom" content={
                      <p className={"caption " + pStyle}>
                        Sharing and discussing ideas at our participatory design event
                      </p>
                    }/>

                    <Row content={
                      <h4 className={pStyle}>Competitive Analysis</h4>
                    }/>

                    <Row content={
                      <p className={pStyle}>
                        Some of my teammates also went out and tried various types of headgear, including the HTC Vive, the Oculus Rift, Google Daydream, Gear VR, and Playstation VR.
                      </p>

                    }/>

                    <Row content={
                      <p className={pStyle}>The Vive does have a notification pairing app with your phone, but it is a non diagetic approach where you must go to the dashboard to get details other than the sender’s name. Daydream, Gear, and Playstation also have notifications to some extent, but very 2D inspired in that they just appear on your HUD and disappear, rather than take advantage of the 3D space.
                      </p>
                    }/>


                    </Collapse>
                  </span>
                }

              />

              <ProjectSection
                title={"Synthesize"}
                content={
                  <span>
                    <Row content={
                      <p className={pStyle}>
                        Once we gathered all the results from our research, we mapped them in order to find common themes and ideas that we could use to guide what designs to create and test with
                        users. In the end, we had <b>three main notification methods:</b>
                      </p>
                    }/>
                    
                    <div className="row callouts">
                      <Callout
                        image={visual}
                        altText={"icon of an eye"}
                        title={"Visual"}
                        description={"3D models of IRL objects or info popups"}
                        first={true}
                      />

                      <Callout
                        image={sound}
                        altText={"icon of a speaker"}
                        title={"Audio"}
                        description={"3D sound and metaphors like creaking doors"}
                        delay={150}
                      />

                      <Callout
                        image={haptic}
                        altText={"icon of haptics"}
                        title={"Haptic"}
                        description={"Vibration feedback of entities around you"}
                        middle={true}
                        delay={300}
                      />
                    </div>

                    <Row content={
                      <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 button-wrapper" onClick={this.collapseInsights}>
                        <Button
                          label={this.state.insightsOpen ? "Hide Detailed Insights" : "See Detailed Insights"}
                          color={"outline green"}
                        />
                      </div>
                    }/>

                    <Collapse isOpened={this.state.insightsOpen}>

                    <Row content={
                      <h4 className={pStyle}>Visual</h4>
                    }/>

                    <Row content={
                      <p className={pStyle}>
                        <em>3D representations</em> of real world objects were the most common solutions shared. Examples included a hand or person model appearing when someone is waving or trying to talk to you, or a digital wireframe of your couch in the environment so you don’t bump into it. This also extended into ideas like smart watches or phones for digital notifications.
                      </p>
                    }/>

                    <Row content={
                      <p className={pStyle}>
                        <em>Pop-ups</em> or small billboards were common choices for “digital notifications”. For the less energetic environment it was suggested tha messages could appear on different objects in the game, and for more cognitively demanding environments they could appear next to or on the controller, so as to be more immediately noticeable.
                      </p>
                    }/>

                    <Row className="one-margin-top" content={
                      <div className={"col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12"}>
                        <img className="feature-image" src={affinity_map}
                             alt="A bunch of post its"/>
                      </div>
                    }/>

                    <Row content={
                      <p className={"caption " + pStyle}>
                        A look at codifying our results
                      </p>
                    }/>

                    <Row content={
                      <h4 className={pStyle}>Audio</h4>
                    }/>

                    <Row content={
                      <p className={pStyle}>
                        <em>3D sound</em> was often mentioned to denote physical entities. Some examples included footsteps being mapped to the actual location someone was coming from, or piping in audio from the real world when relevant so you can hear someone talking to you or a pet barking.
                      </p>
                    }/>

                    <Row content={
                      <p className={pStyle}>
                        <em>Metaphors</em> were also very popular. Sounds like a door creak to signify someone entering the room, or having an hourly chime to help keep track of how long you’ve been in VR. The designers also mentioned using sounds you were familiar with, like your ring tone or text tone, to alert you when you’ve received a message.
                      </p>
                    }/>



                    <Row content={
                      <h4 className={pStyle}>Haptic</h4>
                    }/>

                    <Row content={
                      <p className={pStyle}>
                        <em>Metaphorical vibrations</em> were very common, such as using feet vibrations to warn you about stepping on a pet, or a tap vibration for someone trying to get your attention. One idea even played with using a ring finger vibration to indicate you had a call or message from your spouse.
                      </p>
                    }/>
                    </Collapse>
                    
                  </span>
                }
              />

              <ProjectSection
                title={"Design"}
                content={
                  <span>
                    <Row content={
                      <p className={pStyle}>
                        Taking our insights of possible solutions generated from our participatory exercise, we then began ideate different designs to prototype. There were two necessary tasks to establish our testing environment:
                      </p>
                    }/>

                    <Row content={
                      <ul className={pStyle + " list"}>
                        <li>
                          Design the notifications to display in the virtual reality world
                        </li>

                        <li>
                          Create the Unity environment and framework for user testing
                        </li>
                      </ul>
                    }/>

                    <Row content={
                      <h4 className={pStyle}>Notification Design</h4>
                    }/>

                    <Row content={
                      <p className={pStyle}>
                        Based on our insights, we then began to sketch out how those methods might be displayed in VR and when they might be delivered.
                      </p>
                    }/>

                    <Lightbox
                      images={[
                        {
                          src: phone,
                          caption: 'Displaying call information over a controller'

                        },
                        {
                          src: phone_booth,
                          caption: 'Popping up a phone booth to answer a call'
                        },
                        {
                          src: popup,
                          caption: 'Message popups over the game environment'
                        },
                        {
                          src: watch,
                          caption: 'A smartwatch showing info using 3D space'
                        },
                        {
                          src: physical,
                          caption: 'Displaying a physical obstacle in VR'
                        },
                        {
                          src: footsteps,
                          caption: 'Footsteps conveying that someone is in the room'
                        }
                      ]}
                      open={this.state.lightboxIsOpen}
                      index={this.state.index}
                    />

                    <Row className="one-margin-top" content={
                      images.map(function (image, index) {
                        return (
                          <div key={"sketch" + index} onClick={(e) => self.openLightbox(index, e)}
                               className={"col-xs-4 col-sm-4 col-md-2 col-lg-2 col-xl-2"}>
                            <img className="mini-image" src={image} alt=""/>
                          </div>
                        )
                      })
                    }/>

                    <Row content={
                      <p className={"caption " + pStyle}>
                        My sketches of different notification approaches
                      </p>
                    }/>

                    <Row content={
                      <p className={pStyle}>
                        After brainstorming, we ended up with <b>four different notifications types</b> we wanted to pursue for this part of the project, which were all aimed at conveying the status of digital notifications you’d received. Unfortunately <b>we had to abandon the physical situations</b> due to the time it would take to integrate a Kinect into the project.
                      </p>
                    }/>

                    <div className="row callouts">
                      <Callout
                        image={phone_icon}
                        altText={"Icon of a phone over Vive controller"}
                        title={"Phone Overlay"}
                        description={"A phone overlaid on the controller for incoming calls"}
                        first={true}
                        number={4}
                      />

                      <Callout
                        image={phone_booth_icon}
                        altText={"Icon of a British phone booth"}
                        title={"Phone Booth"}
                        description={"A phone booth in the environment for incoming calls"}
                        number={4}
                        delay={150}
                      />

                      <Callout
                        image={popup_icon}
                        altText={"Icon of a Popup"}
                        title={"Popup"}
                        description={"Popups placed on the environment for messages"}
                        number={4}
                        delay={300}
                      />

                      <Callout
                        image={watch_icon}
                        altText={"Icon of a smart watch"}
                        title={"Watch"}
                        description={"A smart watch on the wrist to show messages"}
                        number={4}
                        delay={450}
                      />
                    </div>

                    <Row content={
                      <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 button-wrapper" onClick={this.collapseEnvironment}>
                        <Button
                          label={this.state.environmentOpen ? "Hide Unity Details" : "See Unity Details"}
                          color={"outline green"}
                        />
                      </div>
                    }/>

                    <Collapse isOpened={this.state.environmentOpen}>

                    <Row content={
                      <h4 className={pStyle}>Unity Environment and Framework</h4>
                    }/>

                    <Row content={
                      <p className={pStyle}>
                        For user comfort and time restraint reasons, we decided to use a low energy environment for testing purposes. The environment modeled was one where the user would pick up a ball using the HTC Vive controllers and place it in a glowing ring on the floor in a giant warehouse. As the user repeated this task, different notifications and signifiers would be triggered randomly, like a vibration and a pop up to indicate you have a message, or spawning a phone booth in the player’s field of view to inform you of an incoming call.
                      </p>
                    }/>

                    <Row className="one-margin-top" content={
                      <div className={pStyle}>

                        <ImageZoom
                          image={{
                            src: playing_env,
                            alt: 'Screen capture of our game environment with a controller, a blue ball, and a yellow circle goal in the distance',
                            className: 'feature-image'
                          }}
                          zoomImage={{
                            src: playing_env,
                            alt: 'Screen capture of our game environment with a controller, a blue ball, and a yellow circle goal in the distance'
                          }}
                        />
                      </div>
                    }/>

                    <Row content={
                      <p className={"caption " + pStyle}>
                        A look at our warehouse demo
                      </p>
                    }/>


                    <Row content={
                      <p className={pStyle}>
                        We also had to design a software framework that would work within Unity taking outside notifications and triggering the proper cue on the proper object. I and another teammate worked on this part, as we wanted the framework to be easily usable by developers wishing to add notifications to their VR experience. In the end we came up with this:
                      </p>
                    }/>

                    <Row content={
                      <div className={pStyle}>
                        <ImageZoom
                          image={{
                            src: framework,
                            alt: 'Framework architecture',
                            className: 'feature-image'
                          }}
                          zoomImage={{
                            src: framework,
                            alt: 'Framework architecture'
                          }}
                        />
                      </div>
                    }/>

                    <Row className="one-margin-top" content={
                      <p className={"caption " + pStyle}>
                        The abstracted process
                      </p>
                    }/>

                    <Row content={
                      <p className={pStyle}>
                        The premise is that a Unity scene has a Notification Manager, which watches for incoming triggers like phone calls, text messages, or physical entrances. The Manager also keeps track of what Notifier objects exist, which are the game objects that actually spawn and inform you of the notification that you received. A developer is able to pick what sort of feedback the Notifier object provides, and how it manifests itself.
                      </p>
                    }/>

                    <Row content={
                      <div className={"col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12"}>
                        <img className="feature-image" src={developer_storyboard}
                             alt="One person at a whiteboard sharing their design ideas"/>
                      </div>
                    }/>

                    <Row content={
                      <p className={"caption " + pStyle}>
                        Storyboard of the developer process
                      </p>
                    }/>

                    </Collapse>

                  </span>
                }
              />

              <ProjectSection
                title={"Prototype"}
                content={
                  <span>
                    <Row content={
                      <p className={pStyle}>
                        With the designs, framework, and the environment decided upon, it was time to combine them into one cohesive unit. We used models from the asset store and hacked together some of our own, wired them up to the environment using our framework and with some help from our good old friend the Wizard of Oz to fake the outside triggers.
                      </p>
                    }/>
                    <Row className="one-margin-vert" content={
                      <VisibilitySensor>
                        {({isVisible}) =>
                          <div className={pStyle}>
                            <Video
                              autoplay={isVisible}
                              webMsrc={phone_video_webm}
                              mp4src={phone_video_mp4}
                              caption={"Receiving a phone call on the controller"}/>
                          </div>
                        }
                      </VisibilitySensor>

                    }/>

                    <Row className="one-margin-vert" content={
                      <VisibilitySensor>
                        {({isVisible}) =>
                          <div className={pStyle}>
                            <Video
                              autoplay={isVisible}
                              webMsrc={phone_booth_video_webm}
                              mp4src={phone_booth_video_mp4}
                              caption={"Answering a call in a phone booth"}/>
                          </div>
                        }
                      </VisibilitySensor>
                    }/>

                    <Row className="one-margin-vert" content={
                      <VisibilitySensor>
                        {({isVisible}) =>
                          <div className={pStyle}>
                            <Video
                              autoplay={isVisible}
                              webMsrc={popup_video_webm}
                              mp4src={popup_video_mp4}
                              caption={"Getting a message from Slack on a wall"}/>
                          </div>
                        }
                      </VisibilitySensor>
                    }/>

                    <Row className="one-margin-vert" content={
                      <VisibilitySensor>
                       {({isVisible}) =>
                         <div className={pStyle}>
                           <Video
                             autoplay={isVisible}
                             webMsrc={watch_video_webm}
                             mp4src={watch_video_mp4}
                             caption={"Checking email on a watch"}/>
                         </div>
                       }
                      </VisibilitySensor>
                    }/>
                  </span>
                }
              />

              <ProjectSection
                title={"Evaluate"}
                content = {
                  <span>
                    <Row content={
                      <p className={pStyle}>
                        Once we had the prototypes down it was time to see how they performed with people. We rounded up willing participants to go through our user testing and get their impressions on our notification methods.
                      </p>
                    }/>

                    <div className="row callouts">
                      <Callout
                        image={fourteen}
                        altText={"fourteen"}
                        title={"Participants"}
                        description={"Most without any extensive VR experience, and about half were interaction designers"}
                        first={true}
                      />

                      <Callout
                        image={lattice_square}
                        altText={"grid with 12 boxes"}
                        title={"Lattice Square"}
                        description={"Displayed all alerts in a random order with 3 types of feedback: visual, visual audio, and visual haptic"}
                        delay={150}
                      />

                      <Callout
                        image={metrics}
                        altText={"five"}
                        title={"Metrics Measured"}
                        description={"Noticeability, understandability, interactibility, believability, intrusiveness"}
                        middle={true}
                        delay={300}
                      />
                    </div>

                    <Row content={
                      <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 button-wrapper" onClick={this.collapseEvaluate}>
                        <Button
                          label={this.state.evaluateOpen ? "Hide Detailed Evaluation" : "See Detailed Evaluation"}
                          color={"outline green"}
                        />
                      </div>
                    }/>

                    <Collapse isOpened={this.state.evaluateOpen}>

                      <Row content={
                        <p className={pStyle}>
                          All 14 participants had some experience with VR, but most not a whole ton. Because of that, we began the test with each user getting accustomed to the controls of the HTC Vive by having them teleport and place a ball in a ring several times until they felt comfortable.
                        </p>
                      }/>

                      <Row content={
                        <div className={"col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12"}>
                          <img className="feature-image" src={testing}
                               alt="One person holding a Vive controller with a phone on screen"/>
                        </div>
                      }/>

                      <Row content={
                        <p className={"caption " + pStyle}>
                          Testing out our phone booth
                        </p>
                      }/>

                      <Row content={
                        <p className={pStyle}>
                          Each participant was presented each notification in a counterbalanced order according to a latin square of 12 conditions (4 notification methods, 3 modes of feedback). Participants were encouraged to think-aloud as they encountered each notification and the system logged their reaction time and interaction time.
                        </p>
                      }/>



                    </Collapse>

                    <Row content={
                      <p className={pStyle}>
                        After the test, we then had users fill out a questionnare containing some short answer questions and a prompt to rate the notifications on a <span className="highlight">Likert scale for five different metrics:</span>
                      </p>
                    }/>

                    <Row content={
                      <ul className={pStyle + " list"}>
                        <li>Noticeability (How easy was it to notice?)</li>
                        <li>Understandability (Could you understand what it was conveying?)</li>
                        <li>Interactibility (How much did you want to play with it?)</li>
                        <li>Believability (Did you believe it was coming from the real world?)</li>
                        <li>Intrusiveness (How did it affect your immersion?)</li>
                      </ul>
                    }/>

                  </span>
                }
              />

              <ProjectSection
                title={"Results"}
                content={
                  <span>
                    <Row content={
                      <p className={pStyle}>
                        To analyze the data, we compiled the Likert scores and compared medians across a wide margin of metrics. The graphs below are an <span className={"highlight"}>average across all metrics of each design</span> with visual, visual audio, and visual haptic feedback.
                      </p>
                    }/>
                    
                    
                    <div className="row charts">
                      <PolarChart
                        data={[
                          {x: "📞", y: 2},
                          {x: "⌚️", y: 3.5},
                          {x: "📰", y: 3.166666666666},
                          {x: "☎️", y: 1.3333333333},
                        ]}
                        caption={"Noticeability"}
                        first={true}
                      />

                      <PolarChart
                        data={[
                          {x: "📞", y: 2},
                          {x: "⌚️", y: 2},
                          {x: "📰", y: 2.333333333333},
                          {x: "☎️", y: 2},
                        ]}
                        caption={"Understandability"}
                      />

                      <PolarChart
                        data={[
                          {x: "📞", y: 3},
                          {x: "⌚️", y: 5.5},
                          {x: "📰", y: 2.5},
                          {x: "☎️", y: 2.66666666667},
                        ]}
                        caption={"Interactability"}
                      />

                      <PolarChart
                        data={[
                          {x: "📞", y: 1.333333333},
                          {x: "⌚️", y: 2},
                          {x: "📰", y: 2},
                          {x: "☎️", y: 2.833333333},
                        ]}
                        caption={"Believability"}
                        first={true}
                      />

                      <PolarChart
                        data={[
                          {x: "📞", y: 4},
                          {x: "⌚️", y: 2.166666667},
                          {x: "📰", y: 2.166666667},
                          {x: "☎️", y: 6.5},
                        ]}
                        caption={"Intrusiveness"}
                      />

                      <div className="legend col-xs-6 col-sm-4 col-md-4 col-lg-3 col-xl-3">
                        <p><span id={"phoneEmoji"}>📞</span> = Phone Overlay</p>
                        <p>☎️ = Phone Booth</p>
                        <p>📰 = Popup</p>
                        <p>⌚️ = Watch</p>
                      </div>

                    </div>

                     <Row content={
                       <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 button-wrapper" onClick={this.collapseResults}>
                         <Button
                           label={this.state.resultsOpen ? "Hide Detailed Results" : "See Detailed Results"}
                           color={"outline green"}
                         />
                       </div>
                     }/>

                    <Collapse isOpened={this.state.resultsOpen}>

                    <Row content={
                      <p className={pStyle}>
                        From these charts it is easy to see that the phone booth was the most intrusive of all four notification methods. However, it also scored the highest on the Believability scale, which means that perhaps because it was so intrusive to the game it was easy to understand it represented something from the real world coming into the VR environment. This is also seen on a smaller scale with the phone overlay.
                      </p>
                    }/>

                    <Row content={
                      <p className={pStyle}>
                        The wrist watch was also notable for its high level of Interactibility, people were quick and wanting to play with the wrist watch to view and manage their notifications, and thought it could be capitalized on to a greater extent.
                      </p>
                    }/>

                    <Row content={
                      <p className={quoteStyle}>
                        “The controller dances in-between, as a universal threshold object. It’s a bridge between external reality and virtual reality.”
                      </p>
                    }/>

                    <Row content={
                      <p className={pStyle}>
                        Tying in with the wrist watch, actions that were related to the controller’s physical form or position were more easily seen as a source for external notifications, due to its unique status of being both "real" and "virtual", by existing in both worlds it can act as a unifier between the two.
                      </p>
                    }/>

                    <Row content={
                      <p className={pStyle}>
                        One other important result was that the reaction time for purely visual feedback notifications were the slowest, probably due to the fact that in VR you have a large viewport and may not be looking where the notification spawns. Notifications with audio or haptic cues both had consistently faster reaction times compared to just a visual cue.
                      </p>
                    }/>

                    </Collapse>

                  </span>

                }
              />

              <ProjectSection
                title={"Recommendations"}
                content={
                  <span>
                    <Row content={
                      <p className={pStyle}>
                        From our observations, testing, and participant feedback, we can provide the following suggestions when designing notifications for virtual reality:
                      </p>
                    }/>

                    <Row content={
                      <ul className={pStyle + " list"}>
                        <li><span className={"highlight"}>Notifications should have a visual style or language that is different from the environment</span>, as multiple users noted the visual difference of the notifications versus the game made them understand they were from an external source</li>
                        <li><span className={"highlight"}>Haptic feedback should be reserved for only the most important notifications</span>, as it is intrusive to the game and can also be hard to differentiate from diagetic vibration, optimally vibration would occur from a source other then the controller (e.g. wrist, feet, or head motors)</li>
                        <li><span className={"highlight"}>Controllers are easier to understand as a source of external alerts</span>, because they are both real and virtual (as in they are rendered in the game, but are also physically held by the player). However, placing a lot of notifications over the controller would be very disruptive so they should be used sparingly</li>
                        <li><span className={"highlight"}>Purely visual notifications should be avoided</span>, or placed in a specific spot in the environment, as they are easy to miss and require a lot of visual scan by the user to find</li>
                        <li><span className={"highlight"}>Do not spawn notifications too close to the body</span> (if they are not on the body), as it causes undesired jump scares and user confusion</li>
                        <li><span className={"highlight"}>Borrow from existing metaphors</span> (smart watches, phone interfaces) to display notifications in VR, it is easier for the player to grasp and interact with as they already have a mental model of how it works</li>
                      </ul>
                    }/>



                  </span>

                }
              />

              <ProjectSection
                title={"Conclusion"}
                content={
                  <span>
                  <Row content={
                    <p className={pStyle}>
                      From this project I learned a lot about designing for virtual reality as well as the affordances provided by the platform. I got to try my hand at designing the interactions and exploring the new possibilites within VR, as well as designing Unity software for the Vive.
                    </p>
                  }/>

                  <Row content={
                    <p className={pStyle}>
                      Designing for VR is stimulating because not all the interaction paradigms are thought out yet, which gives you a lot more freedom to explore and try ouy things that might not make sense in a 2D interface. I hope that I can continue to play with and design for VR experiences in the future as the technology becomes more mainstream and more accessible.
                    </p>
                  }
                  />

                  <Row content={
                    <p className={pStyle}>
                      (I also really hope our paper gets published)
                    </p>
                  }
                  />
                  </span>
                }
              />

              <ProjectSection
                title={"Links"}
                content={
                  <Row content={
                    <p className={pStyle + " links"}>
                      <a href="https://github.com/LinkCable/NotifiVR">Github</a>
                    </p>
                  }/>
                }
              />

            </span>
          }
        />
      </div>
    );
  }
}

export default NotifiVR;
