import React from "react";

const StudentList = () => {
  const tableData = [{class: 'LKG [A]', count: '6'},
                     {class: 'UKG [A]', count: '13'},
                     {class: 'I [A]', count: '18'},
                     {class: 'II [A]', count: '40'},
                     {class: 'III [A]', count: '39'},
                     {class: 'IV [A]', count: '35'},
                     {class: 'V [A]', count: '41'},
                     {class: 'VI [A]', count: '42'},
                     {class: 'VII [A]', count: '39'},
                     {class: 'VIII [A]', count: '38'},
                     {class: 'IX [A]', count: '21'},
                     {class: 'X [A]', count: '20'},
                     {class: 'TOTAL', count: '352'},
    ];
  return (<>
    <div style={{ display: 'grid', justifyContent:'center', alignItems: 'center', backgroundColor: "rgba(249, 177, 177, 0.62)" }}>
     <u> <h3 style={{ textAlign: 'center' }} >Students Strength</h3></u>
     <table border="1" cellPadding="8" style={{ marginTop: '20px', borderCollapse: 'collapse', textAlign: 'center', fontSize: '1.2rem' }}>
     <thead >
        <tr>
          <th style={{ textAlign: 'center' }}>&nbsp;&nbsp;&nbsp;Class & Section&nbsp;&nbsp;&nbsp;</th>
          <th style={{ textAlign: 'center' }}>&nbsp;&nbsp;&nbsp;2025-2026&nbsp;&nbsp;&nbsp;</th>
        </tr>
      </thead>
        <tbody style={{  width: '80%', fontSize: '1.2rem'}}>
        {tableData.map((item, i) => (
          <tr key={i}>
            <td>{item.class}</td>
            <td>{item.count}</td>
          </tr>
        ))}
         
        </tbody>
      </table>
      <br/><br/>
    </div></>);
}
export default StudentList;