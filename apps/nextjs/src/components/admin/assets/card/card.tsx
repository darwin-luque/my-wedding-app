import type { Asset } from '@acme/db';
import Image from 'next/image';
import type { FC } from 'react';
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
    asset.key.length > 20 ? `${asset.key.slice(0, 20)}...` : asset.key;

  return (
    <div className="card h-96 w-80 bg-base-100 shadow-xl">
      <figure>
        <Image
          src={asset.url}
          alt="Shoes"
          width={400}
          height={250}
          style={{
            objectFit: 'contain',
            height: 250,
          }}
        />
      </figure>
      <div className="card-body">
        <div className="tooltip" data-tip={asset.key}>
          <h2 className="card-title text-base font-bold">{parsedKey}</h2>
        </div>
        <div className="pb-2 pl-2 text-sm">
          <p>
            <strong>Created At:</strong> {parsedCreatedAt}
          </p>
          <p>
            <strong>Updated At:</strong> {parsedUpdatedAt}
          </p>
        </div>
        <div className="card-actions justify-end">
          <div className="tooltip" data-tip="Delete">
            <button className="btn-primary btn-error btn-xs btn gap-2">
              <FaTrash />
            </button>
          </div>
          <div className="tooltip" data-tip="Edit">
            <button className="btn-primary btn-info btn-xs btn gap-2">
              <FaPen />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
