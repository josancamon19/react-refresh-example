import { useRef } from "react";
import classes from "./NewMeetupForm.module.css";
import Card from "../ui/Card";

function NewMeetupForm(props) {
  const titleInputRef = useRef();
  const imageInputRef = useRef();
  const addressInputRef = useRef();
  const descriptionInputRef = useRef();

  function handleSubmit(e) {
    e.preventDefault();
    const title = titleInputRef.current.value;
    const image = titleInputRef.current.value;
    const address = titleInputRef.current.value;
    const description = titleInputRef.current.value;

    const data = { title, image, address, description };
    props.onAddMeetup(data);
  }

  return (
    <Card>
      <form onSubmit={handleSubmit} className={classes.form}>
        <div className={classes.control}>
          <label htmlFor="title">Meetup Title</label>
          <input
            type="text"
            name="title"
            id="title"
            required
            ref={titleInputRef}
          />
        </div>
        <div className={classes.control}>
          <label htmlFor="image">Meetup Image</label>
          <input
            type="url"
            name="image"
            id="image"
            required
            ref={imageInputRef}
          />
        </div>
        <div className={classes.control}>
          <label htmlFor="address">Address</label>
          <input
            type="url"
            name="address"
            id="address"
            required
            ref={addressInputRef}
          />
        </div>
        <div className={classes.control}>
          <label htmlFor="description">Description</label>
          <textarea
            name="description"
            id="description"
            required
            ref={descriptionInputRef}
          />
        </div>
        <div className={classes.actions}>
          <button>Add Meetup</button>
        </div>
      </form>
    </Card>
  );
}

export default NewMeetupForm;
