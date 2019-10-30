// import React, { Component } from 'react';
// import dotenv from "dotenv";

// import "./rover-image-gallery.css";
// import "react-datepicker/dist/react-datepicker.css";

// dotenv.config();

// class RoverImageGallery extends Component {
//     state = {
//         rover: this.props.rover,
//         isLoading: true,
//         manifestData: [],
//         imageData: [],
//         selectedDay: 1,
//         selectedCamera: []
//     }
//     //   Fetch manifest data via API call and set to component state
//     //   Alert if data is not available and doesn't load
//     fetchManifestData = () => {
//         const url = `https://api.nasa.gov/mars-photos/api/v1/manifests/${
//             this.state.rover}/?api_key=${
//                 process.env.REACT_APP_NASA_API_KEY}`;
//         fetch(url)
//           .then(response => response.json())
//           .then(
//             data => {
//               this.setState({
//                 isLoading: true,
//                 manifestData: data.photo_manifest
//               });
//             },
//             error => {
//               if (error) {
//                 alert("Image gallery is currently unavailable");
//               }
//             }
//           );
//       };

// //   Fetch image data via API call and set to component state
// //   Alert if data is not available and doesn't load
//   fetchImageData = () => {
//     const url = `https://api.nasa.gov/mars-photos/api/v1/rovers/${
//         this.state.rover}/photos?sol=1000&api_key=${
//       process.env.REACT_APP_NASA_API_KEY}`;
//     fetch(url)
//       .then(response => response.json())
//       .then(
//         data => {
//           this.setState({
//             isLoading: true,
//             imageData: data
//           });
//         },
//         error => {
//           if (error) {
//             alert("Image gallery is currently unavailable");
//           }
//         }
//       );
//   };

//   componentDidMount() {
//     // Make API call when component mounts
//     this.fetchManifestData();
//     this.fetchImageData();
//   }

//   addDays = (date, days) => {
//     let result = new Date(date);
//     result.setDate(result.getDate() + days);
//     return result;
//   }

  
//     render () {
//       console.log(this.state.manifestData.max_sol)
//       const lastDateAvail = this.state.manifestData.max_date;
//       const maxSol = this.state.manifestData.max_sol;

//       let readableDateLong = date => {
//         let monthNum = new Date(date).getMonth();
//         let months = [
//           "January",
//           "February",
//           "March",
//           "April",
//           "May",
//           "June",
//           "July",
//           "August",
//           "September",
//           "October",
//           "November",
//           "December"
//         ];
//         return ` ${new Date(date).getDate()} ${months[monthNum]} ${new Date(date).getFullYear()} `;
//       };

//       return (
//           <>
//           <div className="dataDetails">
//             <div className="dataTable">
//               <div><h3>Launch Date</h3><hr></hr><p>{readableDateLong(this.state.manifestData.launch_date)}</p></div>
//               <div><h3>Landing Date</h3><hr></hr><p>{readableDateLong(this.state.manifestData.landing_date)}</p></div>
//               <div><h3>Rover Status</h3><hr></hr><p>{this.state.manifestData.status}</p></div>
//               <div><h3>No. Photos Taken</h3><hr></hr><p>{this.state.manifestData.total_photos}</p></div>
//             </div>
//           </div>
//           <h2>Image Gallery</h2>
//           <div className="image-form">
//             <form className="form" onSubmit={{}}>
//             <div className="field">
//                 <label className="label">Choose mission day:</label>
//               </div>
//               <div className="field">
//                 <label className="label">Select camera</label>
//                     <select
//                       value={{}}
//                       name="editor"
//                       onChange={{}}
//                     >
//                       <option value="vscode">VsCode</option>
//                       <option value="atom">Atom</option>
//                     </select>
//               </div>
//               <div className="field">
//                     <input
//                       type="submit"
//                       value="Submit"
//                       className="button is-primary"
//                     />
//               </div>
//             </form>
//            </div>
//           <div className="image-gallery">
//               <div className="thumbnails-section"></div>
//               <div className="main-image-section"></div>
//           </div>
//           </>
//       )
//     }
// }

// export default RoverImageGallery;
