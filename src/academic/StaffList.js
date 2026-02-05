import React from "react";

const StaffList = () => {
  const tableData = [{role: 'PGT Teachers', count: '8'},
                     {role: 'TGT Teachers', count: '7'},
                     {role: 'PRT Teachers', count: '6'},
                     {role: 'PET Teachers', count: '2'},
                     {role: 'NTT Teachers', count: '1'},
                     {role: 'Librarian', count: '1'},
    ];
  return (<>
    <div style={{ display: 'grid', justifyContent:'center', alignItems: 'center', backgroundColor: "rgba(249, 177, 177, 0.62)" }}>
     <u> <h3 style={{ textAlign: 'center' }} >Number of Teaching Staff</h3></u>
     <table border="1" cellPadding="8" style={{ marginTop: '20px', borderCollapse: 'collapse', textAlign: 'center', fontSize: '1.2rem' }}>
     <thead >
        <tr>
          <th style={{ textAlign: 'center' }}>&nbsp;&nbsp;&nbsp;DESIGNATION&nbsp;&nbsp;&nbsp;</th>
          <th style={{ textAlign: 'center' }}>&nbsp;&nbsp;&nbsp;COUNT&nbsp;&nbsp;&nbsp;</th>
        </tr>
      </thead>
        <tbody style={{  width: '80%', fontSize: '1.2rem'}}>
        {tableData.map((item, i) => (
          <tr key={i}>
            <td>{item.role}</td>
            <td>{item.count}</td>
          </tr>
        ))}
         
        </tbody>
      </table>
      <br/><br/>
    </div></>);
}
export default StaffList;