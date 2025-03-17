import LoginFrame from "./component/LoginFrame";
import NameInput from "./component/Input";
import Navbar from "./component/Navbar";

export default function MainFrame() {
  return (
    <div className="w-screen h-screen bg-gray-100 flex flex-col items-center">
      <Navbar />
      <LoginFrame />
    </div>
  );
}
