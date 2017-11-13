import React from 'react';
// import counterpart from 'counterpart';
// import translate from 'counterpart';
import '../images/danablue.gif';
// import ProgressBar from 'react-progress-bar-plus';
import PropTypes from 'prop-types';

// counterpart.registerTranslations('en', require('../locales/en'));
// counterpart.registerTranslations('id', require('../locales/id'));
// let marker;

class Index extends React.Component {
  static propTypes = {
    children: PropTypes.any
  };
  //
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     percent: -1,
  //     intervalTime: 200,
  //     locale: []
  //   };
  //   this.handleChange = this.handleChange.bind(this);
  //   this.setPercent = this.setPercent.bind(this);
  //   this.start = this.start.bind(this);
  //   this.getCurrentLocation = this.getCurrentLocation.bind(this);
  // }
  //
  // componentDidMount() {
  //   this.setPercent(100);
  //   this.getCurrentLocation();
  // }
  //
  // componentWillMount() {
  //   const checkLocal = localStorage.getItem('lang');
  //   if (checkLocal) {
  //     counterpart.setLocale(checkLocal);
  //     const locale = translate('layout');
  //     this.setState({
  //       locale: locale
  //     });
  //   }
  //   const locale = translate('layout');
  //   this.setState({
  //     locale: locale
  //   });
  //
  // }
  //
  // getCurrentLocation() {
  //   // If brower supports HTML5 geoLocation
  //   if (navigator.geolocation) {
  //     navigator.geolocation.getCurrentPosition(function (position) {
  //       let lat = position.coords.latitude;
  //       let lng = position.coords.longitude;
  //       let accuracy = position.coords.accuracy;
  //       // let coords = new google.maps.LatLng(lat, lng);
  //       // Remove previously added marker
  //       if (marker) {
  //         marker.setMap(null);
  //       }
  //       // console.log(lat)
  //       // console.log(lng)
  //       // console.log(accuracy)
  //       localStorage.setItem('lat', lat);
  //       localStorage.setItem('lng', lng);
  //       localStorage.setItem('accuracy', accuracy);
  //       //   let popupContent = '<div id='content'><h1 id='firstHeading' className='heading'>location....</h1></div>'
  //       //   let infowindow = new google.maps.InfoWindow({
  //       //     content: popupContent
  //       //   });
  //       //   marker = new google.maps.Marker({
  //       //       map: map,
  //       //       zoom: 14,
  //       //       position: currentLoc
  //       //   });
  //       //   infowindow.open(map,marker);
  //     });
  //   }
  //   // else {
  //   //   alert('This Browser doesn\'t support HTML5 geolocation');
  //   // }
  // }
  //
  // setPercent(percent) {
  //   this.setState({
  //     percent: percent
  //   });
  // }
  //
  // start() {
  //   this.setState({
  //     percent: 0,
  //     intervalTime: (Math.random() * 1000)
  //   });
  // }
  //
  // handleChange(e) {
  //   counterpart.setLocale(e.target.value);
  //   const locale = translate('layout');
  //   this.setState({
  //     locale: locale
  //   });
  // }

  // Current location click event

  render() {
    return (
      <div className='language'>
        {this.props.children}
      </div>
    );
  }
}

export default Index;
