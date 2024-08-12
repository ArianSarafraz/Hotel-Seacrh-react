import { useNavigate, useParams } from "react-router-dom";
import Loader from "../Loader/Loader";
import { useHotels } from "../context/HotelsProvider";
import { useEffect } from "react";
import { HiArrowLeft } from "react-icons/hi";

function SingleHotel() {
  const { id } = useParams();
  const { getHotel, isLoadingCurrHotel, currentHotel } = useHotels();
  const navigate = useNavigate();

  useEffect(() => {
    getHotel(id);
  }, [id]);

  if (isLoadingCurrHotel || !currentHotel) return <Loader />;

  return (
    <>
      <button onClick={() => navigate(-1)} className="btn btn--back">
        <HiArrowLeft className="icon" /> Back
      </button>
      <div className="room">
        <div className="roomDetail">
          <h2>{currentHotel.name}</h2>
          <div>
            {currentHotel.number_of_reviews} reviews &bull;{" "}
            {currentHotel.smart_location}
          </div>
          <img src={currentHotel.thumbnail_url} alt={currentHotel.name} />
        </div>
      </div>
    </>
  );
}

export default SingleHotel;
