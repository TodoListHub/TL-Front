import LoginFrame from "./component/LoginFrame";
import NameInput from "./component/Input";

export default function MainFrame() {
  return (
    <div className="w-screen h-screen bg-white flex justify-center items-center">
      <LoginFrame />
    </div>
  );
}
