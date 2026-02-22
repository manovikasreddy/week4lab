import Layout from "./components/Layout";
import ProfileCard from "./components/ProfileCard";
import ControlledInput from "./components/ControlledInput";
import UncontrolledInput from "./components/UncontrolledInput";

const App = () => {
  return (
    <Layout>
      <div className="bg-white p-8 rounded-2xl shadow-2xl w-full max-w-md">
        <ProfileCard name="P Mano Vikas Reddy" role="Frontend Developer" />
        <ControlledInput />
        <UncontrolledInput />
      </div>
    </Layout>
  );
};

export default App;
