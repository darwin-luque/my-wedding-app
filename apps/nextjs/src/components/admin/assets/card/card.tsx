import type { Asset } from '@acme/db';
import Image from 'next/image';
import { FC } from 'react';
import { FaPen, FaTrash } from 'react-icons/fa';

export type AdminAssetCardProps = {
  asset: Asset;
};

export const AdminAssetCard: FC<AdminAssetCardProps> = ({ asset }) => {
  const parsedCreatedAt = new Intl.DateTimeFormat('en-US', {
    dateStyle: 'medium',
    timeStyle: 'short',
  }).format(new Date(asset.createdAt));
  const parsedUpdatedAt = new Intl.DateTimeFormat('en-US', {
    dateStyle: 'medium',
    timeStyle: 'short',
  }).format(new Date(asset.createdAt));

  const parsedKey =
    asset.key.length > 27 ? `${asset.key.slice(0, 27)}...` : asset.key;

  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure>
        <Image
          src={asset.url}
          alt="Shoes"
          width={400}
          height={250}
          style={{
            objectFit: 'contain',
            width: 400,
            height: 250,
          }}
        />
      </figure>
      <div className="card-body">
        <div className="tooltip" data-tip={asset.key}>
          <h2 className="card-title">{parsedKey}</h2>
        </div>
        <div className="pb-2 pl-2">
          <p>
            <strong>Created At:</strong> {parsedCreatedAt}
          </p>
          <p>
            <strong>Updated At:</strong> {parsedUpdatedAt}
          </p>
        </div>
        <div className="card-actions justify-end">
          <button className="btn-primary btn-error btn-sm btn gap-2">
            <FaTrash />
            <span>Delete</span>
          </button>
          <button className="btn-primary btn-info btn-sm btn gap-2">
            <FaPen />
            <span>Edit</span>
          </button>
        </div>
      </div>
    </div>
  );
};
