import React from 'react';

const Users = ({users, visible}) =>{ 

        return(
            <>
            {
            users.slice(0,visible).map((users) => (
                <div key={users.name} className="users-item">
                <div className="users-contant">
                  <div className="top-contant">
                  <img src={users.photo} alt="Avatar"/>
                    <p className="name">{users.name}</p>
                  </div>
                  <div className="users-info">
                    <p className="position">{users.position}</p>
                    <p className="email">{users.email}</p>
                    <p className="phone">{users.phone}</p>
                  </div>
                </div>
              </div>
            ))}
            </>
        );
    }
    


export default Users;