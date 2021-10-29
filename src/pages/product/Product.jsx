import { Link } from 'react-router-dom'
import './product.css'
import Chart from "../../chart/Chart"
import { productData } from '../../dummyData'
import { Publish } from '@material-ui/icons'

export default function Product() {
    return (
        <div className="product">
            <div className="productTitleContainer">
                <h1 className="productTitle">Product</h1>

                <Link to="/newProduct">
                    <button className="productAddButton">Create</button>
                </Link>
            </div>
            <div className="productTop">
                <div className="productTopLeft">
                    <Chart data={productData} dataKey="Sales" title="Sales Performance"/>
                </div>
                <div className="productTopRight">
                    <div className="productInfoTop">
                        <img src="https://images.pexels.com/photos/7586239/pexels-photo-7586239.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="" className="productInfoImage" />
                        <span className="productName">Apple Airpods</span>
                    </div>
                    <div className="productInfoBottom">
                        <div className="productInfoItem">
                            <span className="productInfoKey">Id: </span>
                            <span className="productInfoValue">1234</span>
                        </div>
                        <div className="productInfoItem">
                            <span className="productInfoKey">Sales: </span>
                            <span className="productInfoValue">6921</span>
                        </div>
                        <div className="productInfoItem">
                            <span className="productInfoKey">Active: </span>
                            <span className="productInfoValue">Yes</span>
                        </div>
                        <div className="productInfoItem">
                            <span className="productInfoKey">In stock: </span>
                            <span className="productInfoValue">no</span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="productBottom">
                <form className="productForm">
                    <div className="productFormLeft">
                        <label>Product Name</label>
                        <input type="text" placeholder="Apple AirPod"/>
                        <label> In Stock</label>
                        <select name="inStock" id="inStock">
                            <option value="yes">Yes</option>
                            <option value="no">No</option>
                        </select>
                        <label>Active</label>
                        <select name="active" id="active">
                            <option value="yes">Yes</option>
                            <option value="no">No</option>
                        </select>
                    </div>
                    <div className="productFormRight">
                        <div className="productUpload">
                            <img src="https://images.pexels.com/photos/7586239/pexels-photo-7586239.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="" className="productUploadImage" />
                            <label for="file">
                                <Publish/>
                            </label>
                            <input type="file" id="file" style={{display:"none"}}/>
                        </div>
                        <button className="productRightButton">Update</button>
                    </div>
                </form>
            </div>
        </div>
    )
}
