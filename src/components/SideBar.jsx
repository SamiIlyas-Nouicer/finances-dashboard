import React from "react"

function SideBar(props) {
  return (
    <div className="side-bar">
      <div className="side-bar-items">
        <ul>
          <li>
            <i className="bi bi-wallet"></i>Overview
          </li>
          <hr className="thin-line"></hr>
          <li>
            <i class="bi bi-bank"></i>Income & Expenses
          </li>
          <hr className="thin-line"></hr>
          <li>
            <i class="bi bi-layout-text-window-reverse"></i> Budgeting
          </li>
          <hr className="thin-line"></hr>
          <li>
            <i class="bi bi-currency-dollar"></i> Investement Portfolio
          </li>
          <hr className="thin-line"></hr>
          <li>
            {" "}
            <i class="bi bi-clock-history"></i>Transaction History
          </li>
          <hr className="thin-line"></hr>
        </ul>
      </div>
    </div>
  )
}

export default SideBar
