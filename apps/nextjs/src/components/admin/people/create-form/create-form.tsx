import { FieldErrors, useForm } from 'react-hook-form';
import { FC } from 'react';
import { Popconfirm } from 'antd';
import { trpc } from '../../../../utils/trpc';

export type FormValues = {
  name: string;
  role: string;
  isChild: boolean;
  familyId: string;
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
    ...(!values.familyId && {
      familyId: {
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
    reset,
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

  const onConfirm = async () => {
    await onSubmit();
    reset();
  };

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
          <span className="label-text">What is the family&apos;s name?</span>
        </label>
        <select
          className="select-bordered select w-full"
          {...register('familyId')}
        >
          {families?.map((family) => (
            <option key={family.id} value={family.id}>
              {family.name}
            </option>
          ))}
        </select>
      </div>
      <div className="form-control w-full max-w-md">
        <label className="label">
          <span className="label-text">What is the family&apos;s name?</span>
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
