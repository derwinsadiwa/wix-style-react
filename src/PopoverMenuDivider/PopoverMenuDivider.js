import React from 'react';
import WixComponent from '../BaseComponents/WixComponent';

import styles from './PopoverMenuDivider.scss';

class PopoverMenuDivider extends WixComponent {
  static displayName = 'PopoverMenuDivider';

  render() {
    return (
      <li className={styles.root}>
        <div className={styles.divider} />
      </li>
    );
  }
}

export default PopoverMenuDivider;
