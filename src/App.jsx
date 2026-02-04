import Wrapper from "./components/Wrapper";
import ProfileCard from "./components/ProfileCard";
import ControlledInput from "./components/ControlledInput";
import UncontrolledInput from "./components/UncontrolledInput";

const App = () => {
  return (
    <Wrapper>
      <div className="space-y-4">
        <ProfileCard name="P Mano Vikas Reddy" role="React Student" />
        <ControlledInput />
        <UncontrolledInput />
      </div>
    </Wrapper>
  );
};

export default App;
