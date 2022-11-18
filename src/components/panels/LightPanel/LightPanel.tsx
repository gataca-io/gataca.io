import React from 'react';
import styles from './lightPanel.module.scss';

type LightPanelProps = {
  className?: string
};

const LightPanel: React.FC<LightPanelProps> = React.memo((props) => {
  const { className, children } = props;

  return (
    <div className={`${styles.lightPanel} ${className ? className : ''}`}>
        {children}
    </div>
  )
})

export default LightPanel;
