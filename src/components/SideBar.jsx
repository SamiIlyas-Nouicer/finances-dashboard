import { useState } from "react"
import { Link } from "react-router-dom"

function SideBar(props) {
  const [sideBar, setSideBar] = useState(false)
  return (
    <div className={sideBar ? "side-bar opened" : "side-bar"}>
      <div className="side-bar-items">
        <button
          className="side-bar-button"
          onClick={() => setSideBar(!sideBar)}
        >
          <i class="bi bi-card-list"></i>
        </button>
        <ul>
          <Link to="/">
            <li>
              <i className="bi bi-wallet"></i>
              <p>Overview</p>
            </li>
          </Link>
          <hr className="thin-line"></hr>
          <li>
            <i class="bi bi-bank"></i>
            <p>Income & Expenses</p>
          </li>
          <hr className="thin-line"></hr>
          <li>
            <i class="bi bi-layout-text-window-reverse"></i> <p>Budgeting</p>
          </li>
          <hr className="thin-line"></hr>
          <li>
            <i class="bi bi-currency-dollar"></i> <p>Investement Portfolio</p>
          </li>
          <hr className="thin-line"></hr>
          <li>
            {" "}
            <i class="bi bi-clock-history"></i>
            <p>Transaction History</p>
          </li>
          <hr className="thin-line"></hr>
        </ul>
      </div>
    </div>
  )
}

export default SideBar
