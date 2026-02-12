
import './tablestyle.css';
import TableData from './table.json'
import Document from './docJS/doc1';
import { Link } from 'react-router-dom';

function Table() {
  return (
    <div style={{backgroundColor:'#f6f6da',paddingTop:'10px', paddingBottom:'10px'}}>

     
 <div className=".container-fluid " style={{marginLeft:'10%', marginRight:'10%',marginTop:'2%'}}>
     <table class="table table-bordered" >
  <thead>
    <tr style={{textAlign:'center'}}>
      <th scope="col" className="from" >S.NO</th>
      <th scope="col" className="subject" >Document Details</th>
      <th scope="col" className="date">Download Link</th>
      
    </tr>
  </thead>
  <tbody>
  {TableData.map((row, index) =><tr>
      <th scope="row" style={{textAlign:'center'}}>{row.sNo}</th>
      <td>{row.name}</td>
      <td style={{textAlign:'center'}}>
        {row.url.startsWith('http') ? (
          <a className="navbar-brand" href={row.url} target="_blank" rel="noreferrer">{row.btnText}</a>
        ) : (
          <Link className="navbar-brand" to={row.url}>{row.btnText}</Link>
        )}
      </td>
      
    </tr>)}
  </tbody>
</table>
</div>            
</div>
  );
}

export default Table;

                               