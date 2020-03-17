import React from 'react';
import styles from './users.modules.css';

let Users = (props) => {

   if (props.users.length === 0) {
       props.setUsers(
           [
               {
                   id: 1,
                   photoUrl: 'https://yandex.ru/collections/card/5c2325fbd87d11002af98414/',
                   followed: true,
                   fullName: 'Dmitry',
                   status: 'Hi everyone!',
                   location: {city: 'Minsk', country: 'Belarus'}
               },
               {
                   id: 2,
                   photoUrl: 'https://yandex.ru/collections/card/5c2325fbd87d11002af98414/',
                   followed: true,
                   fullName: 'Sasha',
                   status: 'Sad',
                   location: {city: 'Moskow', country: 'Russia'}
               },
               {
                   id: 3,
                   photoUrl: 'https://yandex.ru/collections/card/5c2325fbd87d11002af98414/',
                   followed: false,
                   fullName: 'Oksana',
                   status: 'Privetiki',
                   location: {city: 'Kiev', country: 'Ukraine'}
               },
               {
                   id: 4,
                   photoUrl: 'https://yandex.ru/collections/card/5c2325fbd87d11002af98414/',
                   followed: true,
                   fullName: 'Sheldon',
                   status: 'Supermind!',
                   location: {city: 'Texas', country: 'America'}
               },
           ],
       );
   }
   };

    return <div>
        {
            props.users.map(u => <div key={u.id}>
            <span>
               <div>
                 <img src={u.photoUrl} className={styles.userPhoto}/>
               </div>
               <div>
                   {u.followed
                       ? <button onClick={() => {props.unfollow(u.id)}}>Unfollow</button>
                       : <button onClick={() => {props.follow(u.id)}}>Follow</button>}
               </div>
            </span>
            <span>
               <span>
                 <div>{u.fullName}</div>
                 <div>{u.status}</div>
               </span>
               <span>
                 <div>{u.location.country}</div>
                 <div>{u.location.city}</div>
               </span>
            </span>
        </div>)
        }
    </div>
};

export default Users;