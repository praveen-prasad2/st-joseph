
import React, { useState } from 'react';
import './tablestyle.css';
import TableData from './table.json'
import { IoClose } from "react-icons/io5";
import fileMap from '../assets/files/Primary/fileMap';

function Table() {
  const [selectedDoc, setSelectedDoc] = useState(null);

  const openModal = (row) => {
    setSelectedDoc(row);
  };

  const closeModal = () => {
    setSelectedDoc(null);
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
                  <button
                    className="btn btn-info"
                    onClick={() => openModal(row)}
                    style={{ fontSize: '14px', padding: '5px 15px' }}
                  >
                    {row.btnText}
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Popup Modal */}
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

                               