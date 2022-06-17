/* eslint-disable no-unused-vars */
import { connection } from "..";

const addGoogleUser = ({ id, email, firstName, lastName }) => {
  
  let today = new Date();
  const dd = String(today.getDate()).padStart(2, '0');
  const mm = String(today.getMonth() + 1).padStart(2, '0');
  const yyyy = today.getFullYear();

  today = `${yyyy}-${mm}-${dd}`;
  const sqlQuery = `INSERT INTO users (id, email, firstName, lastName, profilePhoto, source, lastVisited) values ('${ 
                  id  }','${  email  }','${  firstName  }','${  lastName  }','NULL', 'google',${  today}`;
  connection.query(sqlQuery, (err, result, fields) => {
    if (err) throw err;
    console.log(result);
  });
};

const getUsers = () => {
  const sqlQuery = "SELECT * FROM users;";
  connection.query(sqlQuery, (err, result, fields) => {
    if (err) throw err;
    console.log(result);
  });
};

const getUserByEmail = function(email){
  const sqlQuery = `SELECT * FROM users WHERE email='${  email  }';`;
  connection.query(sqlQuery, (err, result, fields) => {
    if (err) throw err;
    console.log(result);
  });
};
const getUserById = function(id){
  const sqlQuery = `SELECT * FROM users WHERE id='${  id  }';`;
  connection.query(sqlQuery, (err, result, fields) => {
    if (err) throw err;
    console.log(result);
  });
};

export { addGoogleUser, getUsers, getUserByEmail, getUserById };
