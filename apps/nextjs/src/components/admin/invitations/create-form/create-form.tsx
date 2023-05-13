import type { FC } from 'react';
import { trpc } from '../../../../utils/trpc';
import { useForm, type FieldErrors } from 'react-hook-form';
import { AdminConfirmModal } from '../../ui/confirm-modal';

export type FormValues = {
  by: string;
  familyId: string;
};

export type AdminFamilyCreateFormProps = {
  onSave: (data: FormValues) => void;
  onInvalid: (data: FieldErrors<FormValues>) => void;
};

const resolver = (values: FormValues) => ({
  values,
  errors: {
    ...(!values.by && {
      name: {
        type: 'required',
        message: 'Who is inviting is required',
      },
    }),
    ...(!values.familyId && {
      familyId: {
        type: 'required',
        message: 'Who is being invited is necessary',
      },
    }),
  },
});

export type AdminInvitationCreateFormProps = {
  onSave: (data: FormValues) => void;
  onInvalid: (data: FieldErrors<FormValues>) => void;
};

export const AdminInvitationCreateForm: FC<AdminInvitationCreateFormProps> = ({
  onSave,
  onInvalid,
}) => {
  const { data: families } = trpc.families.list.useQuery();

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
          <span className="label-text">
            Which family is the invitation for?
          </span>
        </label>
        <select
          className="select-bordered select w-full"
          {...register('familyId')}
        >
          {families?.map((person) => (
            <option key={person.id} value={person.id}>
              {person.name}
            </option>
          ))}
        </select>
      </div>
      <div className="form-control w-full max-w-md">
        <label className="label">
          <span className="label-text">Who is inviting this family?</span>
        </label>
        <select
          className="select-bordered select w-full"
          {...register('by')}
          defaultValue="NONE"
        >
          <option value="Both">Both</option>
          <option value="Bessy">Bessy</option>
          <option value="Darwin">Darwin</option>
        </select>
        {errors.by && (
          <label className="label">
            <span className="label-text-alt">{errors.by.message}</span>
          </label>
        )}
      </div>
      <a
        href="#create-invitation-modal"
        className="btn-success btn mt-10 rounded-lg capitalize"
      >
        Publish
      </a>
      <AdminConfirmModal
        id="create-invitation-modal"
        onConfirm={onSubmit}
        title="Are you sure you want to create this invitation?"
        description="Confirm that you want to create this invitation. You can edit and delete the invitation further on."
      />
    </form>
  );
};
