import { useNavigate } from "react-router-dom";
import NewMeetupForm from "../components/meetups/NewMeetupForm";

function NewMeetup() {
  const navigate = useNavigate();
  function addMeetup(data) {
    navigate("/", { replace: true });
  }
  return (
    <div>
      <h1>Add New Meetup</h1>
      <NewMeetupForm onAddMeetup={addMeetup} />
    </div>
  );
}

export default NewMeetup;
