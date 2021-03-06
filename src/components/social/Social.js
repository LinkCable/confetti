import React, { Component } from 'react';
import Isvg from 'react-inlinesvg';
import './Social.css';

import dribbble from '../../media/social/dribbble.svg';
import github from '../../media/social/github.svg';
import twitter from '../../media/social/twitter.svg';
import medium from '../../media/social/medium.svg';
import untappd from '../../media/social/untappd.svg';
import linkedin from '../../media/social/linkedin.svg';
import instagram from '../../media/social/instagram.svg';
import mal from '../../media/social/MAL.svg';

class Social extends Component {
  render () {
    return(
      <p className="col-xs-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 social">

        <a href="http://dribbble.com/linkcable" rel="noopener noreferrer" target="_blank" id="dribbble">
          <Isvg src={dribbble}>
            <img src={dribbble} alt="dribbbble link" width="20px" />
          </Isvg>
        </a>

        <a href="http://github.com/linkcable" rel="noopener noreferrer" target="_blank" id="github">
          <Isvg src={github}>
            <img src={github} alt="github link" width="20px" />
          </Isvg>
        </a>

        <a href="http://twitter.com/link_cable" rel="noopener noreferrer" target="_blank" id="twitter">
          <Isvg src={twitter}>
            <img src={twitter} alt="twitter link" width="20px" />
          </Isvg>
        </a>

        <a href="http://linkedin.com/in/philkt" rel="noopener noreferrer" target="_blank" id="linkedin">
          <Isvg src={linkedin}>
            <img src={linkedin} alt="linkedin link" width="20px" />
          </Isvg>
        </a>

        <a href="https://medium.com/@LinkCable" rel="noopener noreferrer" target="_blank" id="medium">
          <Isvg src={medium}>
            <img src={medium} alt="medium link" width="20px" />
          </Isvg>
        </a>

        <a href="https://instagram.com/link_cable" rel="noopener noreferrer" target="_blank" id="instagram">
          <Isvg src={instagram}>
            <img src={instagram} alt="instagram link" width="20px" />
          </Isvg>
        </a>

        <a href="https://untappd.com/user/LinkCable" rel="noopener noreferrer" target="_blank" id="untappd">
          <Isvg src={untappd}>
            <img src={untappd} alt="untappd link" width="20px" />
          </Isvg>
        </a>

        <a href="https://myanimelist.net/profile/LinkCable" rel="noopener noreferrer" target="_blank" id="mal">
          <Isvg src={mal}>
            <img src={mal} alt="my anime list link" width="20px" />
          </Isvg>
        </a>
      </p>
    )
  }
}

export default Social;