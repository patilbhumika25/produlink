import React, { useState } from "react";
import "./companyPlantSetup.css";

export default function CompanyPlantSetup() {

  const [activeTab, setActiveTab] = useState("general");

  return (
    <div className="company-page">

      <div className="company-header">
        <h2>Company Setup</h2>
        <p>Last Updated By Admin On 21-07-2022 2:47 PM</p>
        <button className="general-btn">General Setting</button>
      </div>

      <div className="company-tabs">
        <button
          className={activeTab === "general" ? "tab active" : "tab"}
          onClick={() => setActiveTab("general")}
        >
          General
        </button>

        <button
          className={activeTab === "data2" ? "tab active" : "tab"}
          onClick={() => setActiveTab("data2")}
        >
          Data-2
        </button>

        <button
          className={activeTab === "logo" ? "tab active" : "tab"}
          onClick={() => setActiveTab("logo")}
        >
          Logo/Images
        </button>

        <button
          className={activeTab === "invoice" ? "tab active" : "tab"}
          onClick={() => setActiveTab("invoice")}
        >
          E-Invoice
        </button>
      </div>

      {activeTab === "general" && (

  <div className="company-form">

    <div className="form-row">
      <div>
        <label>Company Name:</label>
        <input type="text" value="SHARP ENGINEERS" />
      </div>

      <div>
        <label>MSME No:</label>
        <input type="text" value="MH04P0022406" />
      </div>
    </div>

    <div className="form-row">
      <div>
        <label>Short Name:</label>
        <input type="text" value="SE" />
      </div>
    </div>

    <div className="form-row">
      <div>
        <label>Address:</label>
        <textarea rows="3">A-31 MIDC WALUJ 431136</textarea>
      </div>

      <div>
        <label>Address:</label>
        <textarea rows="3">A-31 MIDC WALUJ 431136</textarea>
      </div>
    </div>

    <div className="form-row">
      <div>
        <label>Website:</label>
        <input type="text" value="sharp-engineers.com" />
      </div>

      <div>
        <label>Pin Code:</label>
        <input type="text" value="431136" />
      </div>
    </div>

    <div className="form-row">
      <div>
        <label>Email Id:</label>
        <input type="email" value="contact@sharp-engineers.com" />
      </div>

      <div>
        <label>City:</label>
        <input type="text" value="AURANGABAD" />
      </div>
    </div>

    <div className="form-row">
      <div>
        <label>Contact No:</label>
        <input type="text" value="8888826579" />
      </div>

      <div>
        <label>State:</label>
        <input type="text" value="MAHARASHTRA" />
      </div>
    </div>

    <div className="form-row">
      <div>
        <label>Footer Message:</label>
        <textarea rows="3">Property of Sharp Engineers</textarea>
      </div>

      <div>
        <label>State No Numeric:</label>
        <input type="text" value="27" />
        <small>eg : 27</small>
      </div>
    </div>

    <div className="form-row">
      <div>
        <label>Director Name:</label>
        <input type="text" value="Umesh Khandelwal" />
      </div>

      <div>
        <label>State Code Alpha:</label>
        <input type="text" value="MH" />
        <small>eg : MH</small>
      </div>
    </div>

    <div className="form-row">
      <div>
        <label>Director Sign:</label>
        <input type="file" />
      </div>
    </div>

  </div>
)}
  {activeTab === "data2" && (

  <div className="company-form">

    <div className="form-row">
      <div>
        <label>VAT TIN:</label>
        <input type="text" />
      </div>

      <div>
        <label>Vat Tin Date:</label>
        <input type="date" />
      </div>
    </div>

    <div className="form-row">
      <div>
        <label>CST TIN:</label>
        <input type="text" />
      </div>

      <div>
        <label>Cst Tin Date:</label>
        <input type="date" />
      </div>
    </div>

    <div className="form-row">
      <div>
        <label>C. Excise Range:</label>
        <textarea rows="2"></textarea>
      </div>

      <div>
        <label>Subject to:</label>
        <input type="text" />
      </div>
    </div>

    <div className="form-row">
      <div>
        <label>Commissionerate:</label>
        <input type="text" />
      </div>

      <div>
        <label>Division:</label>
        <input type="text" />
      </div>
    </div>

    <div className="form-row">
      <div>
        <label>C Excise Reg No:</label>
        <input type="text" />
      </div>

      <div>
        <label>GST No:</label>
        <input type="text" />
      </div>
    </div>

    <div className="form-row">
      <div>
        <label>ECC No:</label>
        <input type="text" />
      </div>

      <div>
        <label>PAN No:</label>
        <input type="text" />
      </div>
    </div>

    <div className="form-row">
  <div>
    <label>PLA No:</label>
    <input type="text" />
  </div>

  <div>
    <label>PAN No:</label>
    <input type="text" />
  </div>
</div>

<div className="form-row">
  <div>
    <label>Service Tax No:</label>
    <input type="text" />
  </div>

  <div>
    <label>CIN No:</label>
    <input type="text" />
  </div>
</div>

<div className="form-row">
  <div>
    <label>Import / Export Code:</label>
    <input type="text" />
  </div>

  <div>
    <label>Import / Export Date:</label>
    <input type="date" />
  </div>
</div>

<div className="form-row">
  <div>
    <label>ARN No:</label>
    <input type="text" />
  </div>

  <div>
    <label>ARN Date:</label>
    <input type="date" />
  </div>
</div>

<div className="form-row">
  <div>
    <label>Export House No:</label>
    <input type="text" />
  </div>

  <div>
    <label>LUT No:</label>
    <input type="text" />
  </div>
</div>

<div className="form-row">
  <div>
    <label>Udyog Aadhar No:</label>
    <input type="text" />
  </div>

  <div>
    <label>LUT Date:</label>
    <input type="date" />
  </div>
</div>


  </div>
)}

{activeTab === "logo" && (

  <div className="company-form">

    <div className="form-row">
      <div>
        <label>Company Logo:</label>
        <p className="text-view">Not Uploaded</p>
      </div>

      <div>
        <label>Print Logo:</label>
        <p className="text-view">Not Uploaded</p>
      </div>
    </div>

    <div className="form-row">
      <div>
        <label>Header Image:</label>
        <p className="text-view">Not Uploaded</p>
      </div>

      <div>
        <label>Footer Image:</label>
        <p className="text-view">Not Uploaded</p>
      </div>
    </div>

    <div className="form-row">
      <div>
        <label>Authorized Sign Image:</label>
        <p className="text-view">Not Uploaded</p>
      </div>

      <div>
        <label>Stamp Image:</label>
        <p className="text-view">Not Uploaded</p>
      </div>
    </div>

  </div>
)}
 
 {activeTab === "invoice" && (

  <div className="company-form">

    <div className="form-row">
      <div>
        <label>IRN API Enabled:</label>
        <p className="text-view">No</p>
      </div>

      <div>
        <label>E-Invoice User:</label>
        <p className="text-view">Not Configured</p>
      </div>
    </div>

    <div className="form-row">
      <div>
        <label>E-Invoice Password:</label>
        <p className="text-view">********</p>
      </div>

      <div>
        <label>GST Portal Link:</label>
        <p className="text-view">Not Set</p>
      </div>
    </div>

  </div>
)}


    </div>
  );
}
