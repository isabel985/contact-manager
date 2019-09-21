import React, { useRef, useEffect } from 'react';

const ContactEditForm = (props) => {
  console.log(props);

  const firstRef = useRef();
  const lastRef = useRef();

  useEffect(() => {
    // check if we have an id, if we do, we're editing and we need to fetch the contact
    // if we are editing then we need to set the values for our refs

    firstRef.current.value = props.firstName || "";
    lastRef.current.value = props.lastName || "";
  }, [props.firstName, props.lastName]);

  const handleSave = (e) => {
    e.preventDefault();
    const firstName = firstRef.current.value;
    const lastName = lastRef.current.value;
    props.saveContact({ firstName, lastName }).then(response => console.log("success"));
  }

  return (
    <form onSubmit={handleSave}>
      <div className="form-row">
        <div className="form-group col-md-6">
          <label>First Name</label>
          <input type="text" className="form-control" placeholder="First Name" name="firstName" ref={firstRef} />
        </div>
        <div className="form-group col-md-6">
          <label>Last Name</label>
          <input type="text" className="form-control" placeholder="Last Name" name="lastName" ref={lastRef} />
        </div>
      </div>
      <button type="submit" className="btn btn-primary">Sign in</button>

    </form>
  )
}

export default ContactEditForm;