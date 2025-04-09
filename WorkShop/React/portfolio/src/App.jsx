import Navbar from "./components/Navbar";
import Overlay from "./components/Overlay";
import PageContent from "./components/PageContent";

function App() {
  return (
    <>
        <Navbar/>
        {/* Overlay effect when opening sidebar on small screens */}
        <Overlay/>
        {/* !PAGE CONTENT! */}
        <PageContent />
        {/* <ContactPage/> */}
        {/* <AboutPage /> */}
    </>
  );
}

export default App;
