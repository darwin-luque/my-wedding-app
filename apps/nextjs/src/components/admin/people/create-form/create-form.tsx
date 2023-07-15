import { FieldErrors, useForm } from 'react-hook-form';
import type { FC } from 'react';
import { trpc } from '../../../../utils/trpc';
import { AdminConfirmModal } from '../../ui/confirm-modal';
import { AdminSelectAssetsModal } from '../../ui/select-assets-modal';
import Image from 'next/image';

export type FormValues = {
  name: string;
  role: string;
  description?: string;
  picture?: string;
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
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm({
    resolver,
    defaultValues: {
      isChild: false,
      role: 'None',
    },
  });

  const onSubmit = handleSubmit(onSave, onInvalid);

  const selectPictureHandler = (urls: string[]) => {
    setValue('picture', urls[0] as never);
  };

  const picture = watch('picture') as string | undefined;

  return (
    <form className="w-[90%] px-10" onSubmit={(e) => e.preventDefault()}>
      <div className="form-control w-full max-w-md">
        <label className="label">
          <span className="label-text">What is the name of the person?</span>
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
          <span className="label-text">
            Which family does this person belongs to?
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
          <span className="label-text">
            What&apos;s the person&apos;s role on the big day?
          </span>
        </label>
        <select
          className="select-bordered select w-full"
          {...register('role')}
          defaultValue="NONE"
        >
          <option selected value="NONE">
            Guest
          </option>
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
          <option value="WEDDING_PLANNER">Wedding Planner</option>
        </select>
        {errors.role && (
          <label className="label">
            <span className="label-text-alt">{errors.role.message}</span>
          </label>
        )}
      </div>
      <div className="form-control w-full max-w-xl">
        <label className="label">
          <span className="label-text">Describe this person (optional)</span>
        </label>
        <textarea
          placeholder="Type here"
          className="textarea-bordered textarea w-full"
          {...register('description')}
        />
        {errors.description && (
          <label className="label">
            <span className="label-text-alt">{errors.description.message}</span>
          </label>
        )}
      </div>
      <div className="form-control w-fit">
        <label className="label items-center justify-center gap-4">
          <span className="label-text">Select a picture for this person</span>
          <a
            href="#select-assets-modal"
            className="btn-primary btn-sm btn rounded-lg capitalize"
          >
            Select Asset
          </a>
        </label>
        {picture && (
          <Image
            src={picture}
            alt="picture"
            width={200}
            height={200}
            style={{ objectFit: 'contain' }}
          />
        )}
      </div>
      <div className="form-control w-fit">
        <label className="label cursor-pointer gap-4">
          <span className="label-text">Is it a child?</span>
          <input {...register('isChild')} type="checkbox" className="toggle" />
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
      <AdminSelectAssetsModal
        multiple={false}
        onSelect={selectPictureHandler}
        initialSelected={picture ? [picture] : undefined}
      />
    </form>
  );
};
