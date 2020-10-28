import ModalConfirm from './ModalConfirm';
import ModalTextInput from './ModalInputText';

const modals = {
  textInput: ModalTextInput,
  confirm: ModalConfirm,
};

export default (modalName) => modals[modalName];
