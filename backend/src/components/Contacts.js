import React, { Fragment, useEffect, useState } from 'react';

const Contacts = (props) => {
  const [contacts, setContacts] = useState(null);

  useEffect(() => {
    props.fetchContacts().then(response => setContacts(response.data))
  }, [])

  if (!contacts) {
    return <h2>Loading...</h2>
  }
  return (
    <Fragment>
      <h1 className="display-4">Contacts</h1>
      <table className="table table-sm">
        <thead>
          <tr>
            <th scope="col">First</th>
            <th scope="col">Last</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          {contacts.map((contact) => {
            return (
              <tr>
                <td>{contact.firstName}</td>
                <td>{contact.lastName}</td>
                <td><a className="text-primary"><i className="fa fa-edit"></i></a></td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </Fragment>
  )
}

export default Contacts;