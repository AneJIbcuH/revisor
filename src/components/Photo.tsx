import { useState } from "react";
import { useActions } from "../hooks/actions";
import { useAppSelector } from "../hooks/redux";
import { AlbumPhotos } from "../models/models";
import { Modal } from "antd";
import { StarFilled } from "@ant-design/icons";

type Props = {
  photo: AlbumPhotos;
};

const Photo: React.FC<Props> = ({ photo }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { addPhoto, deletePhoto } = useActions();
  const { favorites } = useAppSelector((state) => state.favorites);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <div key={photo.id} className="photos_photo" onClick={showModal}>
        <img src={photo.url} alt="" />
        {favorites.find((el) => el.id == photo.id) ? (
          <div className="photos_photo-icon">
            <StarFilled
              onClick={(e) => {
                e.stopPropagation();
                deletePhoto(photo);
              }}
            />
          </div>
        ) : (
          <div className="photos_photo-icon icon-nf ">
            <StarFilled
              onClick={(e) => {
                e.stopPropagation();
                addPhoto(photo);
              }}
            />
          </div>
        )}
      </div>
      <Modal open={isModalOpen} onCancel={handleCancel} footer={[]} width={666}>
        <img src={photo.url} alt="" className="modal-img" />
      </Modal>
    </>
  );
};

export default Photo;
