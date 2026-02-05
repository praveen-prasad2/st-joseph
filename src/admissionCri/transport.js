
// import React from "react";

// const BusRoutes = () => {
//   const routes = [
//     "Threekudapuram, Chokkampatti",
//     "Kumunthapuram, Bohanallur",
//     "Kadayanallur, Mela Kadayanallur",
//     "Kasitharmam, Mekkarai",
//     "Achanputhur, Vavanagaram",
//     "Vadakarai, Anna Nagar, Karisal, Thirumalaikovil",
//     "Panpoli",
//     "Meenkashipuram, Rajapuram Colony",
//     "K.P.Valasai, Elathur, Seevanallur",
//     "Nainagaram, Edaikal, Ayikudi, Agarakattu",
//     "Sambavar Vadakarai, Surandai, Sernthamaram, Thannuthu",
//     "IT Point, KK Valasai",
//     "Sakthinagar, Thendralnagar, Housingboard",
//     "Tenkasi",
//     "Statebank Colony, Melagaram, Minnagar, Nannagaram",
//     "Kudiyuruppu, Courtallam, Kasimejapuram",
//     "Border, Kottakulam",
//     "Ilanji, Vanjinagar, Vallam",
//     "Ayyapuram, Alagappapuram, Subramaniyapuram",
//     "Kathiravan Colony, 3 Vaikal, Dam, Shencottai",
//     "Railwaygate, Kalangarai, P.P.Valasai, Forest Office",
//     "Mavadikal, Bharathinagar, Mariamman Kovil, Vishwanathapuram",
//     "Ariyankavu",
//     "Therkumedu, S-Bend, RTO Office, Puliyarai",
//     "Puthur, Chavukkai, Thatko Nagar, Karkudi",
//     "Thavanai, Eraviatharmapuram, Kesavapuram, Kattalaikudiyuruppu",
//     "Lalakudiyuruppu, Kalangathakandi"
//   ];

//   return (
//     <div style={{ display: "flex", flexDirection: "column", padding: "20px" }}>
//       <h2>Bus Routes 2025-2026</h2>
//       <table
//         style={{
//           borderCollapse: "collapse",
//           width: "100%",
//           border: "1px solid #000"
//         }}
//       >
//         <thead>
//           <tr>
//             <th
//               style={{
//                 border: "1px solid #000",
//                 padding: "8px",
//                 backgroundColor: "#f2f2f2",
//                 textAlign: "left"
//               }}
//             >
//               Places
//             </th>
//           </tr>
//         </thead>
//         <tbody>
//           {routes.map((place, index) => (
//             <tr key={index}>
//               <td style={{ border: "1px solid #000", padding: "8px" }}>
//                 {place}
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default BusRoutes;


import React from "react";
import Header from '../home/Header';
import Footer from '../home/Footer';

const StaffList = () => {
 
  return (<>
  <Header />
  <style>
    {`td {
        padding: 10px !important;
      }`}
  </style>
    <div style={{ display: 'grid', justifyContent:'center', alignItems: 'center', backgroundColor: "rgba(249, 177, 177, 0.62)" }}>
     <u> <h3 style={{ textAlign: 'center' }} >Transport routes</h3></u>
     <table border="1" cellPadding="8" style={{ marginTop: '20px', borderCollapse: 'collapse', fontSize: '1.2rem' }}>
     <thead >
        <tr>
          <th style={{ textAlign: 'center' }}>&nbsp;&nbsp;&nbsp;Places&nbsp;&nbsp;&nbsp;</th>
          {/* <th style={{ textAlign: 'center' }}>&nbsp;&nbsp;&nbsp;COUNT&nbsp;&nbsp;&nbsp;</th> */}
        </tr>
      </thead>
        <tbody style={{  width: '80%', fontSize: '1.2rem'}}>
        
          <tr >
            <td>Threekudapuram,Chokkampatti <br />
                Kumunthapuram, Bohanallur
            </td>
            </tr>
            <tr>
            <td>Kadayanallur,Mela Kadayanallur<br/>
                Kasitharmam, Mekkarai
            </td>
            </tr>
            <tr>
            <td>
                Achanputhur,Vavanagaram<br/>
                Vadakarai,Anna nagar,Karisal,Thirumalaikovil
            </td>
            </tr>
            <tr>
            <td>
                Panpoli
            </td>
            </tr>
            <tr>
            <td>
                Meenkashipuram,Rajapuram colony
            </td>
          </tr>
          <tr>
            <td>
               <br/>
            </td>
          </tr>
           <tr>
            <td>
                K.P.Valasai,Elathur, Seevanallur<br/>
                Nainagaram,Edaikal,Ayikudi,Agarakattu
            </td>
            </tr>
            <tr>
            <td>
               Sambavar vadakarai, Surandai,Sernthamaram,Thannuthu
            </td>
            </tr>
            <tr>
            <td>
                IT Point, KK Valasai,<br/>
                Sakthinagar,Thendralnagar,Housingboard
            </td>
            </tr>
            <tr>
            <td>
                Tenkasi,<br/>
                Statebank colony,Melagaram,Minnagar,Nannagaram<br/>
                Kudiyuruppu,Courtallam,Kasimejapuram
            </td>
            </tr>
            <tr>
                <td>
                    <br />
                </td>
            </tr>
            <tr>
            <td>
                Border,Kottakulam,<br/>
                Ilanji,Vanjinagar,Vallam,<br/>
                Ayyapuram,Alagappapuram,Subramaniyapuram
            </td>
            </tr>
            <tr>
                <td>
                    <br />
                </td>
            </tr>
            <tr>
                <td>
                    Kathiravan colony,3 Vaikal,Dam,<br/>
                    Shencottai,
                </td>
            </tr>
            <tr>
                <td>
                    Railwaygate,Kalangarai,P.P.Valasai,Forest office<br/>
                    Mavadikal,Bharathinagar,Mariamman Kovil,Vishwanathapuram
                </td>
            </tr>
            <tr>
                <td>
                    <br />
                </td>
            </tr>
            <tr>
                <td>
                    Ariyankavu
                </td>
            </tr>
            <tr>
                <td>
                    Therkumedu, S-Bend, RTO Office,Puliyarai<br/>
                    Puthur,Chavukkai,Thatko Nagar,Karkudi<br/>
                    Thavanai,Eraviatharmapuram,Kesavapuram,Kattalaikudiyuruppu<br/>
                    Lalakudiyuruppu,Kalangathakandi
                </td>
            </tr>
        </tbody>
      </table>
      <br/><br/>
    </div>
    <Footer/></>);
}
export default StaffList;
