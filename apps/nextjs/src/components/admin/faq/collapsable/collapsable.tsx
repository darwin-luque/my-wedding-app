import { useState, type FC, useMemo } from 'react';
import {
  FaBan,
  FaCheck,
  FaChevronDown,
  FaChevronUp,
  FaPen,
  FaTrash,
} from 'react-icons/fa';

type FaqData = {
  question: string;
  answer: string;
};

export type AdminFaqCollapsableProps = FaqData & {
  onEdit: (data: FaqData) => void;
  onDelete: () => void;
};

export const AdminFaqCollapsable: FC<AdminFaqCollapsableProps> = ({
  question,
  answer,
  onEdit,
  onDelete,
}) => {
  const [mutation, setMutation] = useState<'edit' | 'delete'>();
  const [open, setOpen] = useState<boolean>(false);
  const [questionValue, setQuestionValue] = useState<string>(question);
  const [answerValue, setAnswerValue] = useState<string>(answer);

  const className = useMemo(
    () => (open ? 'collapse-open' : 'collapse-close'),
    [open],
  );

  const toggle = () => setOpen((prev) => !prev);

  const confirm = () => {
    if (!mutation) return;
    if (mutation === 'edit') {
      onEdit({
        question: questionValue,
        answer: answerValue,
      });
    } else if (mutation === 'delete') {
      onDelete();
    }
    setMutation(undefined);
  };

  return (
    <div
      className={`rounded-box collapse border border-base-300 bg-base-100 ${className}`}
    >
      <button
        className="btn-ghost btn-xs btn absolute right-2 top-5 z-10"
        onClick={toggle}
      >
        {open ? <FaChevronUp size={16} /> : <FaChevronDown size={16} />}
      </button>
      <div className="collapse-title flex w-full items-center">
        <div className="flex-1">
          <input
            disabled={mutation !== 'edit'}
            className="input-bordered input input-sm w-11/12 text-lg font-medium"
            value={questionValue}
            onChange={(e) => setQuestionValue(e.target.value)}
          />
        </div>
        <div className="inline-flex flex-none gap-2">
          {mutation ? (
            <>
              <button
                onClick={() => setMutation(undefined)}
                className="btn-ghost btn-xs btn"
              >
                <FaBan />
              </button>
              <button onClick={confirm} className="btn-ghost btn-xs btn">
                <FaCheck />
              </button>
            </>
          ) : (
            <>
              <button
                onClick={() => setMutation('edit')}
                className="btn-ghost btn-xs btn"
              >
                <FaPen className="text-blue-500" />
              </button>
              <button
                onClick={() => setMutation('delete')}
                className="btn-ghost btn-xs btn"
              >
                <FaTrash className="text-red-500" />
              </button>
            </>
          )}
        </div>
      </div>
      <div className="collapse-content">
        <textarea
          disabled={mutation !== 'edit'}
          className="textarea-bordered textarea w-11/12"
          value={answerValue}
          onChange={(e) => setAnswerValue(e.target.value)}
        />
      </div>
    </div>
  );
};
