import React from 'react';
import kasa from '../asssets/kasa.png';
import styles from '../style/footer.module.scss';


function Footer() {
    return (
        <footer className={styles.erreurfoot}>
        <figure>
         <img src = {kasa} alt='kasa footer'className={styles.imgfoot}/>
          <figcaption className={styles.textfoot}>© 2020 Kasa. All rights reserved</figcaption>
        </figure>
      </footer>

    )
}

export default Footer