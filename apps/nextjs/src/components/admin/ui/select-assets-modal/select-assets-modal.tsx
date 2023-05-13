import { type FC, useState } from 'react';
import { trpc } from '../../../../utils/trpc';
import Image from 'next/image';
import { FaCheck } from 'react-icons/fa';

export type AdminSelectAssetsModalProps = {
  onSelect: (urls: string[]) => void;
  onCancel?: () => void;
  multiple?: boolean;
  initialSelected?: string[];
};

export const AdminSelectAssetsModal: FC<AdminSelectAssetsModalProps> = ({
  onCancel,
  onSelect,
  multiple = false,
  initialSelected = [],
}) => {
  const { data } = trpc.assets.list.useQuery();
  const [selectedAssetUrls, setSelectedAssetUrls] =
    useState<string[]>(initialSelected);

  const closeModal = () => {
    window.location.hash = '';
  };

  const cancelHandler = () => {
    closeModal();
    onCancel?.();
  };

  const selectHandler = () => {
    closeModal();
    onSelect(selectedAssetUrls);
  };

  const selectAssetHandler = (url: string, selected: boolean) => {
    setSelectedAssetUrls((prev) =>
      selected
        ? prev.filter((prevUrl) => prevUrl !== url)
        : multiple
        ? [...prev, url]
        : [url],
    );
  };

  return (
    <div className="modal" id="select-assets-modal">
      <div className="modal-box w-2/4 max-w-5xl">
        <h3 className="text-lg font-bold">Select Assets</h3>
        <div className="carousel-center carousel rounded-box space-x-4 bg-neutral p-4">
          {data?.map((asset) => {
            const selected = selectedAssetUrls.includes(asset.url);
            return (
              <button
                onClick={() => selectAssetHandler(asset.url, selected)}
                key={asset.id}
                className="carousel-item relative"
              >
                <Image
                  src={asset.url}
                  alt={asset.key}
                  width={200}
                  height={200}
                  className={`rounded-box border-2 ${
                    selected ? 'border-blue-400' : 'border-transparent'
                  }`}
                  style={{
                    objectFit: 'contain',
                    height: 400,
                    width: 'fit-content',
                  }}
                />
                {selected && (
                  <div className="absolute bottom-2 right-2 rounded-full border-2 border-blue-400 p-1">
                    <FaCheck className="text-blue-400" size={18} />
                  </div>
                )}
              </button>
            );
          })}
        </div>
        <div className="modal-action">
          <button onClick={cancelHandler} className="btn-error btn">
            Cancel
          </button>
          <button className="btn-success btn" onClick={selectHandler}>
            Select
          </button>
        </div>
      </div>
    </div>
  );
};
