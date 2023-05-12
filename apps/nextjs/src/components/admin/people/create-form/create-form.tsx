import { FieldErrors, useForm } from 'react-hook-form';
import type { FC } from 'react';
import { trpc } from '../../../../utils/trpc';
import { AdminConfirmModal } from '../../ui/confirm-modal';

export type FormValues = {
  name: string;
  role: string;
  isChild: boolean;
  personId: string;
};

export type AdminPeopleCreateFormProps = {
  onSave: (data: FormValues) => void;
  onInvalid: (data: FieldErrors<FormValues>) => void;
};

const resolver = (values: FormValues) => ({
  values,
  errors: {
    ...(!values.name && {
      name: {
        type: 'required',
        message: 'Name is required',
      },
    }),
    ...(!values.personId && {
      personId: {
        type: 'required',
        message: 'Family is required',
      },
    }),
  },
});

export const AdminPeopleCreateForm: FC<AdminPeopleCreateFormProps> = ({
  onSave,
  onInvalid,
}) => {
  const { data: families } = trpc.families.list.useQuery();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver,
    defaultValues: {
      isChild: false,
      role: 'None',
    },
  });

  const onSubmit = handleSubmit(onSave, onInvalid);

  return (
    <form className="w-[90%] px-10" onSubmit={(e) => e.preventDefault()}>
      <div className="form-control w-full max-w-md">
        <label className="label">
          <span className="label-text">What is this person&apos;s name?</span>
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
      <div className="form-control w-full max-w-md">
        <label className="label">
          <span className="label-text">What is the person&apos;s name?</span>
        </label>
        <select
          className="select-bordered select w-full"
          {...register('personId')}
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
          <span className="label-text">What is the person&apos;s name?</span>
        </label>
        <select
          className="select-bordered select w-full"
          {...register('role')}
          defaultValue="NONE"
        >
          <option value="NONE">Guest</option>
          <option value="BEST_MAN">Best Man</option>
          <option value="BRIDESMAID">Bridesmaid</option>
          <option value="GROOMSMAN">Groomsman</option>
          <option value="MAID_OF_HONOR">Maid of Honor</option>
          <option value="BRIDES_FATHER">Father of the Bride</option>
          <option value="GROOMS_FATHER">Father of the Groom</option>
          <option value="BRIDES_MOTHER">Mother of the Bride</option>
          <option value="GROOMS_MOTHER">Mother of the Groom</option>
          <option value="FLOWER_GIRL">Flower Girl</option>
          <option value="RING_BEARER">Ring Bearer</option>
        </select>
        {errors.role && (
          <label className="label">
            <span className="label-text-alt">{errors.role.message}</span>
          </label>
        )}
      </div>
      <div className="form-control w-fit">
        <label className="label cursor-pointer gap-4">
          <span className="label-text">Is Child?</span>
          <input
            {...register('isChild')}
            type="checkbox"
            className="toggle"
            checked
          />
        </label>
      </div>
      <a
        href="#create-person-modal"
        className="btn-success btn mt-10 rounded-lg capitalize"
      >
        Publish
      </a>
      <AdminConfirmModal
        id="create-person-modal"
        onConfirm={onSubmit}
        title="Are you sure you want to create this person?"
        description="Confirm that you want to create this person. You can edit and delete the person further on."
      />
    </form>
  );
};
