import { ColorModeProvider } from "./context/ColorModeContext";
import HomePageContainer from "./HomePageContainer";

const App = () => {
  return (
    <>
      <ColorModeProvider>
        <HomePageContainer />
      </ColorModeProvider>
    </>
  );
};

export default App;
