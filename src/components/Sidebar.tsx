import { PencilLine } from 'phosphor-react';
import { Avatar } from './Avatar';

import styles from './Sidebar.module.css';

export function Sidebar () {
  return (
    <>
      <aside className={styles.sidebar}>
        <img 
          className={styles.cover}
          src="https://images.unsplash.com/photo-1605379399642-870262d3d051?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8ZGV2ZWxvcGVyfGVufDB8fDB8fA%3D%3D&amp;auto=format&amp;it=crop&amp;w=500&amp;q=60"
        />
      
        <div className={styles.profile}>
          
          <Avatar src="https://github.com/IgorKaliel.png" />

          <strong>Igor Kaliel</strong>
          <span>Web Developer</span>
        </div>
        
        <footer>
            <a href="#">
              <PencilLine />
              Editar seu perfil
            </a>
        </footer>
      </aside>
      
      

    </>
  );
}