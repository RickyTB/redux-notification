import React, {useCallback, useEffect, useRef, useState} from 'react';
import cx from 'classnames';

import classes from './Notification.scss';

const styles = {
  'default': classes.Default,
  'success': classes.Success,
  'error': classes.Error,
  'info': classes.Info,
  'warning': classes.Warning
};

const FRAME_TIME = 1 / 30;

const Notification = ({displayType, timeout, text, id, remove}) => {
  const [progress, setProgress] = useState(100);
  const intervalRef = useRef(null);

  const handleCloseButton = useCallback(() => setProgress(0), [setProgress]);
  const handleRemoval = useCallback(() => setTimeout(() => remove(id), 800), [remove, id]);

  useEffect(() => {
    const reduction = progress / timeout;
    const frame = reduction * FRAME_TIME;
    intervalRef.current = setInterval(() => {
      setProgress(progress => progress - frame);
    }, FRAME_TIME * 1000);
    return () => clearInterval(intervalRef.current);
  }, []);

  useEffect(() => {
    if (progress > 0) return;
    clearInterval(intervalRef.current);
    handleRemoval();
  }, [progress]);

  return (
    <div
      className={cx(classes.Notification, styles[displayType] || styles.default, 'animated', progress > 0 ? 'bounceInLeft' : 'bounceOutLeft')}>
      <button type="button" className="btn" onClick={handleCloseButton}>
        <i className="fa fa-times fa-fw"/>
      </button>
      <div className={classes.Content}>
        {text}
      </div>
      <div style={{width: `${progress}%`}} className={classes.ProgressBar}/>
    </div>
  );
};

Notification.defaultProps = {
  timeout: 10
};

export default Notification;
