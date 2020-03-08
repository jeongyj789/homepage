import React from 'react';
import HeaderContainer from '../containers/common/HeaderContainer';
const { kakao } = window;

class PostListPage extends React.Component {
  componentDidMount() {

    var container = document.getElementById('map'),
    options = {
         center: new kakao.maps.LatLng(33.450701, 126.570667),
         level: 3
    };
    var map = new kakao.maps.Map(container, options); // 지도 생성
    // if (navigator.geolocation) {
      // GeoLocation을 이용해서 접속 위치를 얻어옵니다.
      navigator.geolocation.getCurrentPosition(function(position){
          
          var lat = position.coords.latitude, // 위도
              lon = position.coords.longitude; // 경도
              
          var locPostion = new kakao.maps.LatLng(lat, lon), //마커가 표시될 위치를 geolocation 좌표로 생성합니다.
              message = '<div style="padding:5px;">여기에 계신가요?!</div>'; // 인포윈도우에 표시될 내용입니다.

          // 마커와 인포윈도우를 표시합니다.
          displayMarker(locPostion,message);
      });
  // } else {   
  // }
  function displayMarker(locPostion, message) {
            
    // 마커를 생성합니다.
    var marker = new kakao.maps.Marker({
        map: map,
        position: locPostion
    });

    var iwContent = message, // 인포윈도우에 표시할 내용
        iwRemoveable = true;
    
    // 인포윈도우를 생성합니다.
    var infowindow = new kakao.maps.InfoWindow({
        content : iwContent,
        removable : iwRemoveable
    });

    // 인포윈도우를 마커위에 표시합니다.
    infowindow.open(map,marker);

    // 지도 중심좌표를 접속위치로 변경합니다.
    map.setCenter(locPostion);
}

  }

  render(){

  return (
    <>
      <HeaderContainer />
      <div>안녕하세요.</div>
      <div id="map" className="Map" style={{ width : '100%', height:'550px'}}></div>
      
    </>
  );
};
};

export default PostListPage;
