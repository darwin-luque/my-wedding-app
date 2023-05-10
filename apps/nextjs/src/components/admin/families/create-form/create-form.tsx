import { FieldErrors, useForm } from 'react-hook-form';
import { Popconfirm } from 'antd';
import { FC } from 'react';

export type FormValues = {
  name: string;
};

export type AdminFamilyCreateFormProps = {
  onSave: (data: FormValues) => void;
  onInvalid: (data: FieldErrors<FormValues>) => void;
};

const resolver = (values: FormValues) => ({
  values: values.name ? values : {},
  errors: {
    ...(!values.name && {
      name: {
        type: 'required',
        message: 'Name is required',
      },
    }),
  },
});

export const AdminFamilyCreateForm: FC<AdminFamilyCreateFormProps> = ({
  onSave,
  onInvalid,
}) => {
  const {
    reset,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver });

  const onSubmit = handleSubmit(onSave, onInvalid);

  const onConfirm = async () => {
    await onSubmit();
    reset();
  };

  return (
    <form className="w-[90%] px-10" onSubmit={(e) => e.preventDefault()}>
      <div className="form-control w-full max-w-md">
        <label className="label">
          <span className="label-text">What is the family&apos;s name?</span>
        </label>
        <input
          type="text"
          placeholder="Type here"
          className="input-bordered input w-full"
          {...register('name')}
        />
        {errors.name && (
          <label className="label">
            <span className="label-text-alt">{errors.name.message}</span>
          </label>
        )}
      </div>
      <Popconfirm
        title="Create the family?"
        description="Are you sure to create this family?"
        onConfirm={onConfirm}
        okText="Yes"
        okButtonProps={{ className: 'btn-success' }}
      >
        <button className="btn-success btn mt-10 rounded-lg capitalize">
          Publish
        </button>
      </Popconfirm>
    </form>
  );
};
