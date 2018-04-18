import React from 'react';
import './ActivityLog.css';

const ActivityLog = (props) => {
  const { activityLog } = props
  return (
    <tr>
      <td>
        <div className="media-left icon">
          <i className="fa fa-play" aria-hidden="true"></i>
        </div>
        <div className="media-body">
          <h4 className="media-heading title">{activityLog.title}</h4>
          <p>{activityLog.subject}</p>
        </div>
      </td>
      <td>
        <p>Last viewed on <strong>{activityLog.lastViewed}</strong></p>
      </td>
      <td>
      <div className="progress">
        <div className="progress-bar progress-bar-success" role="progressbar" aria-valuenow={activityLog.completed}
        aria-valuemin="0" aria-valuemax="100" style={{width: activityLog.completed + '%'}}>
        </div>
      </div>
      <span>{activityLog.completed}%</span>
      </td>
    </tr>
  );
}

export default ActivityLog;