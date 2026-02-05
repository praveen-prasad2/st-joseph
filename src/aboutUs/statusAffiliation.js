import React from "react";
import Header from "../home/Header";
import Footer from "../home/Footer";

const StatusAffiliation = () => {
  return (<>
  <Header />
    <div  style={{ display: 'grid', justifyContent: 'center', backgroundColor: "rgba(249, 177, 177, 0.62)" }}>
      <h3><u>The School is Affiliated to Central Board of Secondary Education (CBSE)</u></h3>
      <h3 style={{textAlign:'center'}}><u>upto Secondary Level</u></h3>
     <table border="1" cellPadding="8" style={{ marginTop: '20px', borderCollapse: 'collapse', textAlign: 'center', fontWeight: 'bold', width: '80%', fontSize: '1.2rem' }}>
        <tbody>
          <tr>
            <td>Affiliation No</td>
            <td>1931328</td>
          </tr>
          <tr>
            <td>Affiliated For</td>
            <td>Secondary level</td>
          </tr>
          <tr>
            <td>Affiliation Upto</td>
            <td>31.03.2029</td>
          </tr>
        </tbody>
      </table>
      <br/><br/>
    </div>
   <Footer /> </>);
}
export default StatusAffiliation;