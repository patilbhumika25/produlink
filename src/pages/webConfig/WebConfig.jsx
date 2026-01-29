import React from "react";
import "./webConfig.css";

export default function WebConfigFile() {
  return (
    <div className="webconfig-page">

      <div className="webconfig-header">
        <h2>Web Config File</h2>
      </div>

      <div className="webconfig-table-box">

        <table>
          <thead>
            <tr>
              <th>Sr.</th>
              <th>Key</th>
              <th>Value</th>
              <th>Description</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>1</td>
              <td>Company Name</td>
              <td>SHARP ENGINEERS, AURANGABAD</td>
              <td>ERP Login Page Display Company name</td>
            </tr>

            <tr>
              <td>2</td>
              <td>InvoiceRpt</td>
              <td>rptInvoiceALL_GST_Sharp.rdlc</td>
              <td>GST Invoice rpt</td>
            </tr>

            <tr>
              <td>3</td>
              <td>TCSInvoiceRpt</td>
              <td>rptInvoiceALL_GST_Sharp.rdlc</td>
              <td>TCS/Scrap Invoice rpt</td>
            </tr>

            <tr>
              <td>4</td>
              <td>LBInvoiceRpt</td>
              <td>rpt.labworkInvoice_GST_SHARP.rdlc</td>
              <td>Jobwork Invoice rpt</td>
            </tr>

            <tr>
              <td>5</td>
              <td>LB_Invoice_RefFormat</td>
              <td>1</td>
              <td></td>
            </tr>
          </tbody>
        </table>

      </div>

    </div>
  );
}
