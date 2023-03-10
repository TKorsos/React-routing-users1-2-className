import React, { useState, useEffect } from "react";
import axios from 'axios';

const Users1 = () => {

    const [users, setUsers] = useState( [] );

    useEffect( () => {
        axios.get('https://jsonplaceholder.typicode.com/users', {
                params: { 
                    id: [1, 2, 3, 4, 5]
            },
                paramsSerializer: {
                    indexes: null
                }
            })
            .then( res => {
                setUsers( res.data );
            })
            .catch( err => {
                console.log( err );
            })
    }, [] );

    return (
      <div>
          <h1 style={ { backgroundColor: 'green' } }>
            Ez a Users-1 oldal
          </h1>

          <div>
            <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Saepe velit voluptatum veritatis provident optio quidem sint ipsum? Ex, odit aperiam expedita, ab ipsam accusantium, maiores praesentium atque minima et nulla!
            </p>
          </div>

          <div>
            {
                users.map( (user,index) => {
                    return <React.Fragment key={index}>
                                <div className="user_color">
                                    <h2>{user.id}. {user.name}</h2>
                                    <p><b>Username: </b>{user.username}</p>
                                    <p><b>Email: </b>{user.email}</p>
                                    <p><b>Adress 1: </b>{user.address.street} {user.address.suite}</p>
                                    <p><b>Adress 2: </b>{user.address.city} {user.address.zipcode}</p>
                                    <p><b>Geolocation: </b>{user.address.geo.lat} {user.address.geo.lng}</p>
                                    <p><b>Phonenumber: </b>{user.phone}</p>
                                    <p><b>Website: </b>{user.website}</p>
                                    <p><b>Companyname: </b>{user.company.name}</p>
                                    <p><b>CompanyPhrase: </b>{user.company.catchPhrase}</p>
                                    <p><b>Company bs: </b>{user.company.bs}</p>
                                </div>
                                <hr />
                            </React.Fragment>
                })
            }
          </div>

            <footer>
                <div>
                    <h2 id="users1_footer">
                        Footer
                    </h2>
                </div>
            </footer>

      </div>
    )
}

export default Users1;