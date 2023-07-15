import { FieldErrors, useForm } from 'react-hook-form';
import type { FC } from 'react';
import Image from 'next/image';
import { AdminSelectAssetsModal } from '../../ui/select-assets-modal';
import { AdminConfirmModal } from '../../ui/confirm-modal';
import { RollingBarrelLoader } from '../../../ui/loaders/rolling-barrel';

const googleMapsUrlRegex = /^https?\:\/\/(www\.)?google\.[a-z]+\/maps\b/;

export type FormValues = {
  name: string;
  description: string;
  startsAt: string;
  endsAt: string;
  googleMapsUrl: string;
  pictures: string[];
};

export type AdminEventCreateFormProps = {
  onSave: (data: FormValues) => void;
  onInvalid: (data: FieldErrors<FormValues>) => void;
  isLoading?: boolean;
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
    ...(!values.description && {
      description: {
        type: 'required',
        message: 'Description is required',
      },
    }),
    ...(!values.startsAt && {
      startsAt: {
        type: 'required',
        message: 'Starts at is required',
      },
    }),
    ...(!values.endsAt && {
      endsAt: {
        type: 'required',
        message: 'Ends at is required',
      },
    }),
    ...(!googleMapsUrlRegex.test(values.googleMapsUrl) && {
      googleMapsUrl: {
        type: 'required',
        message: 'Google Maps URL is required',
      },
    }),
  },
});

export const AdminEventCreateForm: FC<AdminEventCreateFormProps> = ({
  onSave,
  onInvalid,
  isLoading,
}) => {
  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors, isDirty },
  } = useForm({
    resolver,
    defaultValues: { pictures: [] },
  });

  const pictures = watch('pictures') as string[];

  const onSubmit = handleSubmit(onSave, onInvalid);

  const selectPictureHandler = (urls: string[]) => {
    setValue('pictures', urls as never);
  };

  return (
    <form
      className="flex w-[90%] flex-col gap-4 px-10 py-10"
      onSubmit={(e) => e.preventDefault()}
    >
      <div className="form-control w-full max-w-xl">
        <label className="label">
          <span className="label-text">What is the event&apos;s name?</span>
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
      <div className="form-control w-full max-w-xl">
        <label className="label">
          <span className="label-text">Describe the event</span>
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
      <div className="form-control w-full max-w-xl">
        <label className="label">
          <span className="label-text">
            Paste a google maps link as reference of the location
          </span>
        </label>
        <input
          type="text"
          placeholder="Type here"
          className="input-bordered input w-full"
          {...register('googleMapsUrl')}
        />
        {errors.googleMapsUrl && (
          <label className="label">
            <span className="label-text-alt">
              {errors.googleMapsUrl.message}
            </span>
          </label>
        )}
      </div>
      <div className="form-control w-fit">
        <label className="label items-center justify-start gap-4">
          <span className="label-text">Select a picture for this person</span>
          <a
            href="#select-assets-modal"
            className="btn-primary btn-sm btn rounded-lg capitalize"
          >
            Select Asset
          </a>
        </label>
        <div className="flex flex-wrap gap-2">
          {pictures.map((picture) => (
            <Image
              key={picture}
              src={picture}
              alt="picture"
              width={200}
              height={200}
              style={{
                objectFit: 'contain',
                maxHeight: 300,
                width: 'fit-content',
              }}
            />
          ))}
        </div>
      </div>
      <div className="form-control w-fit">
        <div className="flex items-center">
          <div className="relative">
            <input
              type="datetime-local"
              className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500"
              placeholder="Select date start"
              {...register('startsAt')}
            />
          </div>
          <span className="mx-4 text-gray-500">to</span>
          <div className="relative">
            <input
              type="datetime-local"
              className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500"
              placeholder="Select date end"
              {...register('endsAt')}
            />
          </div>
        </div>
      </div>
      <a
        href="#create-event-modal"
        className={`btn-success btn mt-10 min-w-[100px] self-center rounded-lg capitalize ${
          !isDirty || isLoading
            ? 'pointer-events-none cursor-not-allowed disabled:opacity-50'
            : ''
        }`}
        aria-disabled={!isDirty || isLoading}
      >
        {isLoading ? <RollingBarrelLoader size={24} /> : 'Publish'}
      </a>
      <AdminConfirmModal
        id="create-event-modal"
        onConfirm={onSubmit}
        title="Are you sure you want to create this family?"
        description="Confirm that you want to create this family. You can edit and delete the family further on."
      />
      <AdminSelectAssetsModal
        multiple
        onSelect={selectPictureHandler}
        initialSelected={pictures}
      />
    </form>
  );
};
