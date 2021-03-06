import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Process.css';

import first from '../../media/icons/first.svg';
import middle from '../../media/icons/middle.svg';
import last from '../../media/icons/last.svg';

class Process extends Component {

  static propTypes = {
    steps: PropTypes.array.isRequired
  }

  static defaultProps = {
    steps: undefined
  }

  render() {

    let stepsLength = this.props.steps.length;

    return (
      <span className="Process">
        <ul className="timeline">
          {(this.props.steps).map(function (step, index){

              return (
                <span key={"step" + index} className="step">
                  <div className="time">
                    <img
                      src={index === 0 ? first :
                        (index === stepsLength - 1 ? last
                        : middle)}
                      alt={index + " step"}
                    />
                  </div>
                  <li key={index} className="step-details">
                    <h5 className="step-header">{step.title}</h5>
                    <ul className="step-info">
                    {(step.processes).map(function (process, index){
                      return <li key={step.title + "desc" + index}>{process}</li>
                    })}
                    </ul>
                  </li>
                </span>
              )

          })}
        </ul>

      </span>
    );
  }
}

export default Process;
