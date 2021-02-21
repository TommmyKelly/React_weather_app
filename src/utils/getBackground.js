export const getBackGround = (con) => {
  let URL = "";
  switch (con) {
    case "Clouds":
      URL =
        'url("https://images.unsplash.com/photo-1469365556835-3da3db4c253b?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NXx8Y2xvdWR5fGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60")';

      break;
    case "Clear":
      URL =
        'url("https://images.unsplash.com/photo-1607280719353-3272826b21cc?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NzZ8fGNsZWFyJTIwc2t5fGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60")';

      break;
    case "Snow":
      URL =
        'url("https://images.unsplash.com/photo-1519944159858-806d435dc86b?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTB8fHNub3clMjB3ZWF0aGVyfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60")';

      break;
    case "Rain":
      URL =
        'url("https://images.unsplash.com/photo-1486016006115-74a41448aea2?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1347&q=80")';

      break;
    case "Drizzle":
      URL =
        'url("https://images.pexels.com/photos/5706239/pexels-photo-5706239.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940")';

      break;
    case "Thunderstorm":
      URL =
        'url("https://images.unsplash.com/photo-1561485132-59468cd0b553?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8dGh1bmRlcnN0b3JtfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60")';

      break;

    default:
      URL =
        'url("https://images.unsplash.com/photo-1583268023358-47edee5723eb?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTg2fHx3ZWF0aGVyfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60")';
  }
  return URL;
};
