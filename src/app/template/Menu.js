import { faBolt, faCube, faUsers } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

export default function Menu() {
  return (
    <nav className="sidebar sidebar-offcanvas" id="sidebar">
      <ul className="nav">
        <li className="nav-item">
          <Link className="nav-link" href="/">
            <i className="icon-grid menu-icon"></i>
            <span className="menu-title">Dashboard</span>
          </Link>
        </li>
        <li className="nav-item">
          <a
            className="nav-link"
            data-bs-toggle="collapse"
            href="#ui-basic"
            aria-expanded="false"
            aria-controls="ui-basic"
          >
            <FontAwesomeIcon className="me-3" icon={faCube} />
            <span className="menu-title">Master</span>
            <i className="menu-arrow"></i>
          </a>
          <div className="collapse" id="ui-basic">
            <ul className="nav flex-column sub-menu">
              <li className="nav-item">
                <Link className="nav-link" href="/jeniskelamin">
                  Jenis Kelamin
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" href="/jenjangpendidikan">
                  Jenjang Pendidikan
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" href="/lowongan">
                  Lowongan
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" href="/tahapan">
                  Tahapan
                </Link>
              </li>
            </ul>
          </div>
        </li>
        <li className="nav-item">
          <a
            className="nav-link"
            data-bs-toggle="collapse"
            href="#form-elements"
            aria-expanded="false"
            aria-controls="form-elements"
          >
            <FontAwesomeIcon className="me-3" icon={faBolt} />
            <span className="menu-title">Transaksi</span>
            <i className="menu-arrow"></i>
          </a>
          <div className="collapse" id="form-elements">
            <ul className="nav flex-column sub-menu">
              <li className="nav-item">
                <Link className="nav-link" href="/pelamar">
                  Pelamar
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" href="/berkas">
                  Berkas
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" href="/seleksi">
                  Seleksi
                </Link>
              </li>
            </ul>
          </div>
        </li>
        <li className="nav-item">
          <a
            className="nav-link"
            data-bs-toggle="collapse"
            href="#charts"
            aria-expanded="false"
            aria-controls="charts"
          >
            <FontAwesomeIcon className="me-3" icon={faUsers} />
            <span className="menu-title">Pengguna</span>
            <i className="menu-arrow"></i>
          </a>
          <div className="collapse" id="charts">
            <ul className="nav flex-column sub-menu">
              <li className="nav-item">
                <Link className="nav-link" href="/admin">
                  Admin
                </Link>
              </li>
            </ul>
          </div>
        </li>
      </ul>
    </nav>
  );
}
