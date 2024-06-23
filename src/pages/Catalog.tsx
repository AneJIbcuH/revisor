import { useState } from "react";
import axios from "axios";
import { User, Album, AlbumPhotos } from "../models/models";
import { MinusCircleOutlined, PlusCircleFilled } from "@ant-design/icons";
import Photo from "../components/Photo";

const Catalog: React.FC = () => {
  const [catalog, setCatalog] = useState<User[]>([]);
  const [albums, setAlbums] = useState<Album[]>([]);
  const [albumsPhotos, setAlbumsPhotos] = useState<AlbumPhotos[]>([]);

  axios.get("http://localhost:3000/users/").then((res) => setCatalog(res.data));

  function openUser(userId: string) {
    axios.get(`http://localhost:3000/albums/${userId}`).then((res) => {
      if (albums?.find((el) => el.userId == userId)) {
        setAlbums([...albums.filter((el) => el.userId != userId)]);
      } else {
        setAlbums([...albums, ...res.data]);
      }
    });
  }

  function openAlbum(albumId: string) {
    axios.get(`http://localhost:3000/photos/${albumId}`).then((res) => {
      if (albumsPhotos?.find((el) => el.albumId == albumId)) {
        setAlbumsPhotos([
          ...albumsPhotos.filter((el) => el.albumId != albumId),
        ]);
      } else {
        setAlbumsPhotos([...albumsPhotos, ...res.data]);
      }
    });
  }

  return (
    <div className="catalog">
      {catalog?.map((user) => (
        <div key={user.id} className="catalog-user">
          <div onClick={() => openUser(user.id)}>
            {albums?.find((el) => el.userId == user.id) ? (
              <MinusCircleOutlined className="catalog-user_icon" />
            ) : (
              <PlusCircleFilled className="catalog-user_icon" />
            )}
          </div>
          <div className="catalog-user-name">{user.name}</div>

          <div>
            {albums
              ?.filter((album) => album.userId == user.id)
              .map((album) => (
                <div className="catalog-user-album" key={album.albumId}>
                  <div onClick={() => openAlbum(album.albumId)}>
                    {albumsPhotos?.find((el) => el.albumId == album.albumId) ? (
                      <MinusCircleOutlined className="catalog-user_icon" />
                    ) : (
                      <PlusCircleFilled className="catalog-user_icon" />
                    )}
                  </div>
                  <div className="catalog-user-album-title">{album.title}</div>
                  <div className="catalog-user-album_photos">
                    {albumsPhotos
                      ?.filter((photo) => photo.albumId == album.albumId)
                      .map((photo) => (
                        <Photo photo={photo} />
                      ))}
                  </div>
                </div>
              ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Catalog;
