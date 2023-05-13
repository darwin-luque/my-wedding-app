import { FieldErrors, useForm } from 'react-hook-form';
import type { FC } from 'react';
import { AdminConfirmModal } from '../../ui/confirm-modal';

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
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver });

  const onSubmit = handleSubmit(onSave, onInvalid);

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
      <a
        href="#create-family-modal"
        className="btn-success btn mt-10 rounded-lg capitalize"
      >
        Publish
      </a>
      <AdminConfirmModal
        id="create-family-modal"
        onConfirm={onSubmit}
        title="Are you sure you want to create this family?"
        description="Confirm that you want to create this family. You can edit and delete the family further on."
      />
    </form>
  );
};
