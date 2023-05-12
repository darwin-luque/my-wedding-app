import { type FC } from 'react';

export type AdminConfirmModal = {
  onConfirm: () => void;
  onCancel?: () => void;
  id: string;
  title: string;
  description?: string;
  confirmText?: string;
  cancelText?: string;
};

export const AdminConfirmModal: FC<AdminConfirmModal> = ({
  onConfirm,
  onCancel,
  id,
  title,
  description,
  confirmText = 'Confirm',
  cancelText = 'Cancel',
}) => {
  const closeModal = () => {
    window.location.hash = '';
  };

  const cancelHandler = () => {
    closeModal();
    onCancel?.();
  };

  const confirmHandler = () => {
    closeModal();
    onConfirm();
  };

  return (
    <div className="modal" id={id}>
      <div className="modal-box">
        <h3 className="text-lg font-bold">{title}</h3>
        {description && <p className="py-4">{description}</p>}
        <div className="modal-action">
          <button onClick={cancelHandler} className="btn-error btn">
            {cancelText}
          </button>
          <button className="btn-success btn" onClick={confirmHandler}>
            {confirmText}
          </button>
        </div>
      </div>
    </div>
  );
};
