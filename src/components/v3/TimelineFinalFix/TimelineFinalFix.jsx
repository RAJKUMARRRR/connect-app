import React from 'react'
import SubmissionEditText from '../SubmissionEditText'
import MilestonePostMessage from '../MilestonePostMessage'

import PT from 'prop-types'
import './TimelineFinalFix.scss'

// use for demo edit multiple link
class TimelineFinalFix extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      isCompleted: false,
      inProgress: true,
      isCancel: false
    }
  }

  render() {
    const { isCompleted, inProgress } = this.state
    const { postContent } = this.props
    return (
      <div styleName={'timeline-post '}>
        <div styleName="col-date">
          <div styleName="month">{postContent.month}</div>
          <div styleName="day">{postContent.date}</div>
        </div>
        <div styleName={'col-timeline-post-con '
          + (isCompleted ? 'completed ' : '')
          + (inProgress ? 'in-progress ' : '')
        }
        >
          <i styleName={'status-ring'} />
          <h4 styleName="post-title" dangerouslySetInnerHTML={{ __html: postContent.title }} />
          <div styleName="post-con" dangerouslySetInnerHTML={{ __html: postContent.postMsg }} />
          {
            !this.state.isCancel && (
              <SubmissionEditText inProgress={false}/>
            )
          }
          {
            this.state.isCancel && (
              <div styleName="progress-wrap">
                <MilestonePostMessage inProgress={false} label={'Design acceptance'} backgroundColor={'#CEE6FF'} message={'Do you need any refinement on winner’s design before we deliver you the final source files? Some refinement or final fixes outside the projet scope may cost you additional payment'} isShowSelection={false} button1Title={'Request fixes'} button3Title={'Accept design'} />
              </div>
            )
          }
          
        </div>
      </div>
    )
  }
}

TimelineFinalFix.propTypes = {
  postContent: PT.shape({
    postId: PT.string,
    isCompleted: PT.boolean,
    month: PT.string,
    date: PT.string,
    title: PT.string,
    postMsg: PT.string
  })
}

export default TimelineFinalFix
