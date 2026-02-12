
import React from 'react';
import './tablestyle.css';
import TableData from './table.json'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { IoClose } from "react-icons/io5";
import fileMap from '../assets/files/Primary/fileMap';

function Table() {
  const location = useLocation();
  const navigate = useNavigate();

  // Check if current path matches any doc URL
  const selectedDoc = TableData.find(doc => doc.url === location.pathname);

  const closeModal = () => {
    navigate('/mandatory');
  };

  return (
    <div style={{ backgroundColor: '#f6f6da', paddingTop: '10px', paddingBottom: '10px' }}>
      <div className=".container-fluid " style={{ marginLeft: '10%', marginRight: '10%', marginTop: '2%' }}>
        <table className="table table-bordered">
          <thead>
            <tr style={{ textAlign: 'center' }}>
              <th scope="col" className="from">S.NO</th>
              <th scope="col" className="subject">Document Details</th>
              <th scope="col" className="date">Download Link</th>
            </tr>
          </thead>
          <tbody>
            {TableData.map((row, index) => (
              <tr key={index}>
                <th scope="row" style={{ textAlign: 'center' }}>{row.sNo}</th>
                <td>{row.name}</td>
                <td style={{ textAlign: 'center' }}>
                  <Link
                    to={row.url}
                    className="btn btn-info"
                    style={{ fontSize: '14px', padding: '5px 15px' }}
                  >
                    {row.btnText}
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Popup Modal Overlay */}
      {selectedDoc && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close-btn" onClick={closeModal}>
              <IoClose />
            </button>
            <div className="modal-body">
              {selectedDoc.video ? (
                <iframe
                  src={selectedDoc.video}
                  title={selectedDoc.name}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              ) : (
                <iframe
                  src={fileMap[selectedDoc.file]}
                  title={selectedDoc.name}
                  width="100%"
                  height="100%"
                  style={{ border: 'none' }}
                ></iframe>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}





export default Table;

                               