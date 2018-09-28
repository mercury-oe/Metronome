import React, { Component } from 'react'
// ======================================================
// Helpers and utils
// ======================================================

// ======================================================
// Components and css
// ======================================================
import { ArrowPlusIcon, ArrowMinusIcon } from 'components/SvgIcons'
import './Bpm.css'
// ======================================================
// Static
// ======================================================

// ======================================================
// Component
// ======================================================
export default class Bpm extends Component {
  // ======================================================
  // Life cycles
  // ======================================================

  // ======================================================
  // Helpers
  // ======================================================

  // ======================================================
  // Handlers
  // ======================================================

  // ======================================================
  // Render
  // ======================================================
  render() {
    return (
      <div className={'Bpm'}>
        <ArrowMinusIcon className={'Bpm__arrow Bpm__arrow--minus'} />
        <span className={'Bpm__rate'}>120</span>
        <ArrowPlusIcon className={'Bpm__arrow Bpm__arrow--plus'} />
      </div>
    )
  }
}