
import "./homeTab.css";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { Tab, TabList } from "react-tabs";

import Switch from "react-switch";
import { setAddItemToCart } from "../../redux/favSlice";
import { addFavalue, removeValue, showToggleIcon } from "../../redux/weatherSlice";
import { toggleIcon } from "../../redux/iconSlice";


const HomeTab = (props) => {
  const [favHeart, setFavHeart] = useState(false);
  const Data = useSelector((state) => state.weatherData.value);
  const favData = useSelector((state) => state.weatherData.favalues)

  const homeData = useSelector((state) => state.weatherData.showeather)
  const showIcon = useSelector((state) => state.weatherData.icon)

  const favHeartState = JSON.parse(localStorage.getItem("FavHeartID") || '[]')

  const [yellow, setYellow] = useState(false)

  console.log(Data && Data.location && Data.location.woeid)
  let res = ''

  useEffect(() => {
    res = Data && Data.location && Data.location.woeid

    if (favHeartState.includes(res)) {
      setYellow(true)
    }
    else {
      setYellow(false)
    }
    // if (showIcon) {
    //   setYellow(true)
    // }
    // else {
    //   setYellow(false)
    // }
  }, [res, favHeartState])


  console.log("homeData", homeData)

  console.log("Data", Data);
  console.log("yellow", yellow);

  const dispatch = useDispatch();

  let icon = ''
  let homeicon = ''

  const [checked, setChecked] = useState(false);

  const previousData = JSON.parse(localStorage.getItem("fav") || "[]");

  const addFav = () => {
    const arr = [];
    previousData.map((user, i) => {

      if (user.location.woeid === Data.location.woeid) {
        arr.push("exists");
      }
    });

    if (arr.includes("exists")) {
      setFavHeart(true)
      // alert("Place already added to Favourite");
    } else {
      // if (JSON.stringify(Data) !== "{}") {
      previousData.push(Data);
      dispatch(addFavalue(previousData))
      localStorage.setItem("fav", JSON.stringify(previousData));
      setFavHeart(!favHeart);
    }
  };



  const whiteHeart = () => {
    // if()
    // if (favData !== '[]') {

    //   favData.map((ele) => {
    //     console.log(ele.location.woeid);
    //     // if (ele.location.woeid !== Data.location.woeid) {

    //     // }
    //   })
    // }
    console.log("favdata", favData)
    // if (favData) {

    //   favData.map((ele) => {
    //     if (ele.location.woeid !== Data.location.woeid) {
    //       return
    //     }
    //   })
    //   // setFavHeart(false)
    // }
    // else {

    // setFavHeart(true)

    // const newValue = {
    //   data: Data,
    //   iconState:favHeart
    // }
    dispatch(addFavalue(Data))
    // dispatch(toggleIcon(favHeart))

    // dispatch(toggleIcon(favHeart))
    // }

  }


  const yellowHeart = () => {
    // setFavHeart(false)
    dispatch(removeValue(Data))
    // dispatch(toggleIcon(favHeart))
    setYellow(false)
  }


  const handleChange = () => {
    setChecked(!checked);
  };

  const onDelete = () => { };

  // console.log(
  //   Data.current_observation
  //     .condition.text);

  // const iconLogo = (Data && Data.current_observation && Data.current_observation.condition && Data.current_observation.condition.text) || "Cloudy";

  // console.log(iconLogo)

  // const toggleIcon = useSelector((state) => state.iconStatus.icon)


  const result = useSelector((state) => state.weatherData.favalues)
  console.log("favData", result);


  // const headData = Data && Data.location && Data.location.city

  switch (
  Data &&
  Data.current_observation && Data.current_observation.condition &&
  Data.current_observation.condition.text
  ) {
    case "Haze":
      icon = "icon_mostly_sunny_small.png";
      break;
    case "Mostly Sunny":
      icon = "icon_mostly_sunny_small.png";
      break;
    case "Sunny":
      icon = "icon_mostly_sunny_small.png";
      break;
    case "Clear":
      icon = "icon_mostly_sunny_small.png";
      break;

    case "Cloudy":
      icon = "icon_mostly_cloudy_small.png";
      break;
    case "Partly Cloudy":
      icon = "icon_mostly_cloudy_small.png";
      break;
    case "Mostly Cloudy":
      icon = "icon_mostly_cloudy_small.png";
      break;

    case "Rainy":
      icon = "icon_rain_small.png";
      break;
    case "Sleet":
      icon = "icon_rain_small.png";
      break;
    case " Showers":
      icon = "icon_rain_small.png";
      break;
    default:
      icon = "icon_rain_small.png";
      break;
  }

  switch (
  homeData &&
  homeData.current_observation && homeData.current_observation.condition &&
  homeData.current_observation.condition.text
  ) {
    case "Haze":
      homeicon = "icon_mostly_sunny_small.png";
      break;
    case "Mostly Sunny":
      homeicon = "icon_mostly_sunny_small.png";
      break;
    case "Sunny":
      homeicon = "icon_mostly_sunny_small.png";
      break;
    case "Clear":
      homeicon = "icon_mostly_sunny_small.png";
      break;

    case "Cloudy":
      homeicon = "icon_mostly_cloudy_small.png";
      break;
    case "Partly Cloudy":
      homeicon = "icon_mostly_cloudy_small.png";
      break;
    case "Mostly Cloudy":
      homeicon = "icon_mostly_cloudy_small.png";
      break;

    case "Rainy":
      homeicon = "icon_rain_small.png";
      break;
    case "Sleet":
      homeicon = "icon_rain_small.png";
      break;
    case " Showers":
      homeicon = "icon_rain_small.png";
      break;
    default:
      homeicon = "icon_rain_small.png";
      break;
  }

  console.log(icon);

  return (
    // {

    // }
    <div className="weatherContainer">
      <div className="homeTabContainer">
        <div className="dateMobile">{props.value}</div>
        <div className="locationName">

          {/* {

            
            homeData?({homeData && homeData.location && homeData.location.city},&nbsp;
              {homeData && homeData.location && homeData.location.country})
              :(
                
                {Data && Data.location && Data.location.city},&nbsp;
                {Data && Data.location && Data.location.country}
                )
              } */}


          {
            homeData ? homeData && homeData.location && homeData.location.city :
              Data && Data.location && Data.location.city
          },
          {" "}
          {
            homeData ? homeData && homeData.location && homeData.location.country :
              Data && Data.location && Data.location.country
          }

        </div>
        {
          !yellow ? (
            <div
              className="addFav"
              onClick={() => {
                whiteHeart();
              }}
            >
              <div className="favImg">
                <img
                  src={require("../../assets/icon_favourite.png")}
                  alt="img"
                  className="heartImg"
                />
              </div>
              <div className="favText">Add to favourite</div>
            </div>
          ) : (
            <div
              className="addFav"
              onClick={() => {
                yellowHeart()
                // a()
                // setFavHeart(!favHeart);
              }}
            >
              <div className="favImg">
                <img
                  src={require("../../assets/icon_favourite_Active.png")}
                  alt="img"
                  className="heartImg"
                />
              </div>
              <div className="favText textColor" onClick={onDelete}>
                Added to favourite
              </div>
            </div>
          )
        }

        <div className="weatherDisplay">
          <div className="weatherImg"
          >
            {
              homeData ?
                homeicon ?
                  <img
                    src={require(`../../assets/${homeicon}`)}
                    alt=""
                    className="sunnyImg"
                  /> :
                  <img
                    src={require(`../../assets/Cloudy.png`)}
                    alt=""
                    className="sunnyImg"
                  />
                :
                icon ?
                  <img
                    src={require(`../../assets/${icon}`)}
                    alt=""
                    className="sunnyImg"
                  /> :
                  <img
                    src={require(`../../assets/Cloudy.png`)}
                    alt=""
                    className="sunnyImg"
                  />
            }
          </div>
          <div className="weatherDegree">
            <div>
              {checked
                ?
                // far
                homeData ?
                  homeData.current_observation &&
                  homeData.current_observation.condition &&
                  homeData.current_observation.condition.temperature
                  :
                  Data.current_observation &&
                  Data.current_observation.condition &&
                  Data.current_observation.condition.temperature
                :
                // cel
                (
                  homeData ?
                    (
                      homeData.current_observation &&
                      homeData.current_observation.condition &&
                      homeData.current_observation.condition.temperature - 32) *
                    (5 / 9)
                    :
                    (
                      Data.current_observation &&
                      Data.current_observation.condition &&
                      Data.current_observation.condition.temperature - 32) *
                    (5 / 9)
                ).toFixed(0)}{" "}

              {/* {checked
                ?
                Data.current_observation &&
                Data.current_observation.condition &&
                Data.current_observation.condition.temperature
                :
                (
                  (Data.current_observation &&
                    Data.current_observation.condition &&
                    Data.current_observation.condition.temperature - 32) *
                  (5 / 9)
                ).toFixed(0)}{" "} */}

            </div>
            <div className="switchTempature">
              <Switch
                borderRadius={4}
                onChange={handleChange}
                checked={checked}
                className="react-switch"
                offColor="transparent"
                onColor="transparent"
                uncheckedHandleIcon={
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      height: "100%",
                      fontSize: 18,
                      color: "red",
                    }}
                  >
                    {"\u00B0"}C
                  </div>
                }
                uncheckedIcon={
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      height: "100%",
                      fontSize: 18,
                      paddingRight: 2,
                      color: "white",
                      zIndex: "2",
                    }}
                  >
                    {"\u00B0"}F
                  </div>
                }
                checkedIcon={
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      height: "100%",
                      fontSize: 18,
                      paddingRight: 2,
                      color: "white",
                    }}
                  >
                    {"\u00B0"}C
                  </div>
                }
                checkedHandleIcon={
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      height: "100%",
                      color: "red",
                      fontSize: 18,
                    }}
                  >
                    {"\u00B0"}F
                  </div>
                }
              />
            </div>
          </div>
          <div className="weatherDetail">
            {Data.current_observation &&
              Data.current_observation.condition &&
              Data.current_observation.condition.text}
          </div>
        </div>
      </div>
      <div className="footerContainer">
        <div className="footerItem">
          <div className="footerImg">
            <img
              src={require("../../assets/icon_temperature_info.png")}
              alt=""
              className="footerImage"
            />
          </div>

          <div className="minMax">
            <div className="minMaxText">Min-Max</div>
            <div className="minMaxDegree">
              {
                homeData ?
                  homeData.current_observation &&
                  homeData.current_observation.condition &&
                  homeData.current_observation.condition.temperature - 3
                  :
                  Data.current_observation &&
                  Data.current_observation.condition &&
                  Data.current_observation.condition.temperature - 3
              }
              &deg;-{" "}
              {
                homeData ?
                  homeData.current_observation &&
                  homeData.current_observation.condition &&
                  homeData.current_observation.condition.temperature + 3
                  :
                  Data.current_observation &&
                  Data.current_observation.condition &&
                  Data.current_observation.condition.temperature + 3
              }
              &deg;
            </div>
          </div>
        </div>

        <div className="footerItem">
          <div className="footerImg">
            <img
              src={require("../../assets/icon_precipitation_info.png")}
              alt=""
              className="footerImage"
            />
          </div>

          <div className="minMax">
            <div className="minMaxText">Precipitation</div>
            <div className="minMaxDegree">
              {
                homeData ?
                  (homeData.current_observation &&
                    homeData.current_observation.atmosphere &&
                    homeData.current_observation.atmosphere.pressure.toFixed(0))
                  :
                  (Data.current_observation &&
                    Data.current_observation.atmosphere &&
                    Data.current_observation.atmosphere.pressure.toFixed(0))
              }
              %
            </div>
          </div>
        </div>

        <div className="footerItem">
          <div className="footerImg">
            <img
              src={require("../../assets/icon_humidity_info.png")}
              alt=""
              className="footerImage"
            />
          </div>

          <div className="minMax">
            <div className="minMaxText">Humidity</div>
            <div className="minMaxDegree">
              {
                homeData ?
                  (homeData.current_observation &&
                    homeData.current_observation.atmosphere &&
                    homeData.current_observation.atmosphere.humidity)
                  :
                  (Data.current_observation &&
                    Data.current_observation.atmosphere &&
                    Data.current_observation.atmosphere.humidity)
              }
              %
            </div>
          </div>
        </div>

        <div className="footerItem">
          <div className="footerImg">
            <img
              src={require("../../assets/icon_wind_info.png")}
              alt=""
              className="footerImage"
            />
          </div>

          <div className="minMax">
            <div className="minMaxText">Wind</div>
            <div className="minMaxDegree">
              {" "}
              {
                homeData ?
                  homeData.current_observation &&
                  homeData.current_observation.wind &&
                  homeData.current_observation.wind.speed
                  :
                  Data.current_observation &&
                  Data.current_observation.wind &&
                  Data.current_observation.wind.speed
              }{" "}
              mph
            </div>
          </div>
        </div>

        <div className="footerItem">
          <div className="footerImg">
            <img
              src={require("../../assets/icon_visibility_info.png")}
              alt=""
              className="footerImage"
            />
          </div>

          <div className="minMax">
            <div className="minMaxText">Visibility</div>
            <div className="minMaxDegree">
              {
                homeData ?
                  (homeData.current_observation &&
                    homeData.current_observation.atmosphere &&
                    homeData.current_observation.atmosphere.visibility.toFixed(0))
                  :
                  (Data.current_observation &&
                    Data.current_observation.atmosphere &&
                    Data.current_observation.atmosphere.visibility.toFixed(0))
              }{" "}
              mi
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeTab;

/*
    'X-RapidAPI-Key': '45a282db58msh7809c8d38865266p123eecjsn39d34aa9c352',
    'X-RapidAPI-Host': 'yahoo-weather5.p.rapidapi.com'
*/