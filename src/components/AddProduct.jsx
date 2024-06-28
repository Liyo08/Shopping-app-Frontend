import React from 'react'
import ProductNavbar from './ProductNavbar'

const AddProduct = () => {
  return (
    <div>
        <ProductNavbar/>
<div className="container">
    <div className="row">
        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
<div className="row g-3">
    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
        <label htmlFor="" className="form-label">Product Title</label>
<input type="text" className="form-control" />
    </div>
    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
        <label htmlFor="" className="form-label">Upload Image</label>
        <input type="file" name="" id="" className="form-control" />
    </div>
    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
        <label htmlFor="" className="form-label">Description</label>
        <textarea name="" id="" className="form-control"></textarea>
    </div>
    <div className="col col-12 col-sm-3 col-md-3 col-lg-3 col-xl-3 col-xxl-3">
        <label htmlFor="" className="form-label">Category</label>
        <select className="form-contro">
        <option value="Choose">Choose</option>
            <option value="Men's Clothing">Men's Clothing</option>
            <option value="Women's Clothing">Women's Clothing</option>
            <option value="Jewelery">Jewelery</option>
            <option value="Electronics">Electronics</option>
        </select>
    </div>
    <div className="col col-12 col-sm-9 col-md-9 col-lg-9 col-xl-9 col-xxl-9">
        <label htmlFor="" className="form-label">Prize</label>
        <input type="text" className="form-control" />
    </div>
    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
        <button className="btn btn-info">Submit</button>
    </div>
</div>


        </div>
    </div>
</div>



    </div>
  )
}

export default AddProduct