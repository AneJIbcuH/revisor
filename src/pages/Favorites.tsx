import { StarFilled } from "@ant-design/icons";
import { useAppSelector } from "../hooks/redux";
import { useActions } from "../hooks/actions";
import { Tooltip } from "antd";

const Favorites: React.FC = () => {
  const { favorites } = useAppSelector((state) => state.favorites);
  const { deletePhoto } = useActions();

  return (
    <div className="favorites">
      {favorites.length ? (
        <div className="favorites_photos">
          {favorites.map((photo) => (
            <div key={photo.id} className="photos_photo">
              <Tooltip placement="bottom" title={photo.title}>
                <img src={photo.url} alt="" />
                <div className="photos_photo-icon">
                  <StarFilled onClick={() => deletePhoto(photo)} />
                </div>
              </Tooltip>
            </div>
          ))}
        </div>
      ) : (
        <div className="favorites_none">
          <img src="https://i.ibb.co/r4JFPgd/none.png" alt="" />
          <h2>Список избранного пуст</h2>
          <h3>Добавляйте изображения, нажимая на звездочки</h3>
        </div>
      )}
    </div>
    
  );
};

export default Favorites;
