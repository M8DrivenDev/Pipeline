import { IModalType } from "../../../lib/interfaces";
import Modal from "../../Ui/Modal";
import FriendsModal from "./FriendsModal";
import UserSettings from "./UserSettigns";

const ModalWindow = ({ type, isOpen, close }: IModalType) => {
  return (
    <Modal open={isOpen} onClose={close}>
      {type === "friends" ? (
        <FriendsModal />
      ) : type === "userSettings" ? (
        <UserSettings onClose={close} />
      ) : (
        ""
      )}
    </Modal>
  );
};

export default ModalWindow;
