import { Route, Routes } from "react-router-dom";
import Layout from "./components/layout/Layout";
import Favorites from "./pages/Favorites";
import Meetups from "./pages/Meetups";
import NewMeetup from "./pages/NewMeetup";

function App() {
  return (
    <div>
      <Layout>
        <Routes>
          <Route path="/" element={<Meetups />} exact />
          <Route path="/new-meetup" element={<NewMeetup />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route
            path="*"
            element={
              <main style={{ padding: "1rem" }}>
                <p>There's nothing here!</p>
              </main>
            }
          />
        </Routes>
      </Layout>
    </div>
  );
}

export default App;
