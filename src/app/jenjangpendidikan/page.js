import { faPencilAlt, faPlus, faSyncAlt, faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Jenjangpendidikan() {
  return (
    <>
      <div className="row">
        <div className="col-12 grid-margin stretch-card">
          <div className="card">
            <div className="card-header">
              <div className="row">
                <div className="col-md-8">
                  <h4 className="card-title">Data Jenjang Pendidikan</h4>
                </div>
                <div className="col-md-4 text-end">
                  <button
                    type="button"
                    className="btn btn-outline-success btn-sm"
                    title="Tambah data?"
                  >
                    <FontAwesomeIcon icon={faPlus} />
                  </button>
                  <button
                    type="button"
                    className="btn btn-outline-primary btn-sm"
                    title="Reload data?"
                  >
                    <FontAwesomeIcon icon={faSyncAlt} />
                  </button>
                </div>
              </div>
            </div>
            <div className="card-body">
              <div className="row">
                <div className="col-md-12">
                  <div className="table-responsive">
                    <table className="table table-borderless table-hover table-striped">
                      <thead>
                        <tr>
                          <th className="text-center" style={{ width:"80px" }} >#</th>
                          <th className="text-center" style={{ width:"100px" }}>Aksi</th>
                          <th className="text-center">ID</th>
                          <th className="text-center">Jenis Kelamin</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="text-center">1</td>
                          <td className="text-center">
                            <button type="button" className="btn btn-warning btn-sm" 
                            title="Ubah data?">
                              <FontAwesomeIcon icon={faPencilAlt} className="text-light" />
                            </button>
                            <button type="button" className="btn btn-danger btn-sm" 
                            title="Hapus data?">
                              <FontAwesomeIcon icon={faTrashAlt} className="text-light" />
                            </button>
                          </td>
                          <td className="text-center">l</td>
                          <td className="text-center">Laki-Laki</td>
                        </tr>
                      </tbody>
                      <tfoot>
                        <tr colSpan="3"></tr>
                      </tfoot>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
