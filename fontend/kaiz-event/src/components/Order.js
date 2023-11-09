function Order(){
    return (
        <div>
            <div className="w-100" style={{background: "whitesmoke"}}>
                <div className="container">
                    <div className="row">
                        <div className="col-sm-8 col-xs-12 mt-3">
                            <table className="table table-striped table-responsive w-100">
                                <thead>
                                <tr>
                                    <th>Loại vé</th>
                                    <th>Giá vé</th>
                                    <th>Số lượng</th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr>
                                    <td></td>
                                    <td></td>
                                    <td>
                                        <div className="btn-group">
                                            <div className="input-group w-50">
                                                <button className="btn btn-outline-secondary" type="button">
                                                    -
                                                </button>
                                                <input type="number" min="0" className="form-control text-center w-50"/>
                                                <button className="btn btn-outline-secondary" type="button">
                                                    +
                                                </button>
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td></td>
                                    <td>
                                        <div className="btn-group">
                                            <div className="input-group w-50">
                                                <button className="btn btn-outline-secondary" type="button">
                                                    -
                                                </button>
                                                <input type="number" min="0" className="form-control text-center w-50"/>
                                                <button className="btn btn-outline-secondary" type="button">
                                                    +
                                                </button>
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td></td>
                                    <td>
                                        <div className="btn-group">
                                            <div className="input-group w-50">
                                                <button className="btn btn-outline-secondary" type="button">
                                                    -
                                                </button>
                                                <input type="number" min="0" className="form-control text-center w-50"/>
                                                <button className="btn btn-outline-secondary" type="button">
                                                    +
                                                </button>
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                        <div className="col-sm-4 col-xs-12 mt-3">
                            <div className="w-100">
                                <div className="w-100 pos-relative">
                                    <div className="details bg-white p-2 w-100">
                                        <table className="table table-striped">
                                            <thead>
                                            <tr>
                                                <th colSpan="2">
                                                    THÔNG TIN ĐẶT VÉ
                                                </th>
                                            </tr>
                                            </thead>
                                            <tbody>
                                            <tr>
                                                <th>
                                                    Loại vé
                                                </th>
                                                <th>
                                                    Số lượng
                                                </th>
                                            </tr>
                                            <tr>
                                                <td>PHỤ THU BẾN THÀNH</td>
                                                <td>3</td>
                                            </tr>
                                            <tr>
                                                <td>1.200.000đ</td>
                                                <td>3.600.000đ</td>
                                            </tr>
                                            </tbody>
                                        </table>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}
export default Order;