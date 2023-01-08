import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { AuthContext } from '../../../contexts/AuthProvider';
import moment from 'moment';
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const AddAProduct = () => {
    const {register, formState: { errors }, handleSubmit} = useForm();

    const {user} = useContext(AuthContext);
    
    const navigate = useNavigate();

    const imgHostKey = process.env.REACT_APP_imgbb_key;

    const handleAddProduct = data =>{
        const image = data.image[0];
        const formData = new FormData();
        formData.append('image', image);
        const url = `https://api.imgbb.com/1/upload?key=${imgHostKey}`;
        fetch(url, {
            method: 'POST',
            body: formData
        })
        .then(res => res.json())
        .then(imgData =>{
            if(imgData.success){
                // console.log(imgData.data.url);
                const product = {
                    brand: data.brand,
                    model: data.model,
                    resale_price: parseInt(data.resale_price),
                    original_price: parseInt(data.original_price),
                    condition_type: data.condition_type,
                    seller_phone: data.seller_phone,
                    seller_location: data.seller_location,
                    using_period: data.using_period,
                    seller_name: user?.displayName,
                    seller_email: user?.email,
                    posted_date: moment().format("MMM D YYYY"),
                    img: imgData.data.url,
                    status: "available",
                }
                fetch('https://kt-mart-server.vercel.app/products', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json',
                        authorization: `Bearer ${localStorage.getItem('accessToken')}`
                    },
                    body: JSON.stringify(product)
                })
                .then(res => res.json())
                .then(result =>{
                    if(result.acknowledged){
                        toast.success(`Your product ${data.brand} ${data.model} is added successfully`);
                        navigate('/dashboard/myproducts');
                    }
                })
            }
        })
    }
    return (
        <section className='m-4'>
            <h2 className='text-2xl text-neutral font-medium mb-4'>Add A Product</h2>
            <div className='w-80 p-5 card shadow-xl'>
                <form onSubmit={handleSubmit(handleAddProduct)}>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Brand</span>
                        </label>
                        <select className="select select-primary w-full max-w-xs" 
                        {...register("brand")}>
                            <option>Iphone</option>
                            <option>Samsung</option>
                            <option>Nokia</option>
                        </select>
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Model</span>
                        </label>
                        <input type="text" 
                        {...register("model", {required:"Model is required"})} 
                        placeholder="Model" className="input input-bordered input-primary text-neutral w-full max-w-xs"/>
                        {errors.model && <p className='text-red-600'>{errors.model?.message}</p>}
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Resale Price</span>
                        </label>
                        <input type="text" 
                        {...register("resale_price", {required:"Resale Price is required"})} 
                        placeholder="Resale Price" className="input input-bordered input-primary text-neutral w-full max-w-xs"/>
                        {errors.resale_price && <p className='text-red-600'>{errors.resale_price?.message}</p>}
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Original Price</span>
                        </label>
                        <input type="text" 
                        {...register("original_price", {required:"Original Price is required"})} 
                        placeholder="Resale Price" className="input input-bordered input-primary text-neutral w-full max-w-xs"/>
                        {errors.original_price && <p className='text-red-600'>{errors.original_price?.message}</p>}
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Condition Type</span>
                        </label>
                        <select className="select select-primary w-full max-w-xs" 
                        {...register("condition_type")}>
                            <option>excellent</option>
                            <option>good</option>
                            <option>fair</option>
                        </select>
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Phone Number</span>
                        </label>
                        <input type="tel" 
                        {...register("seller_phone", {required:"Phone Number is required"})} 
                        placeholder="Phone Number" className="input input-bordered input-primary text-neutral w-full max-w-xs"/>
                        {errors.phone && <p className='text-red-600'>{errors.phone?.message}</p>}
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Location</span>
                        </label>
                        <select className="select select-primary w-full max-w-xs" 
                        {...register("seller_location")}>
                            <option>Dhaka</option>
                            <option>Chittagong</option>
                            <option>Sylhet</option>
                        </select>
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Years of Use</span>
                        </label>
                        <input type="text" 
                        {...register("using_period", {required:"Years of Use is required"})} 
                        placeholder="Years of Use" className="input input-bordered input-primary text-neutral w-full max-w-xs"/>
                        {errors.using_period && <p className='text-red-600'>{errors.using_period?.message}</p>}
                    </div>
                    {/* <input hidden type="text" disabled
                    {...register("posted_date", {value: moment().format("MMM D YYYY")})} 
                    className="input input-bordered text-neutral w-full max-w-xs"/>
                    {errors.posted_date && <p className='text-red-600'>{errors.posted_date?.message}</p>} */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Mobile Picture</span>
                        </label>
                        <input type="file" 
                        {...register("image", {required:"Mobile Picture is required"})} 
                        className="input input-bordered input-primary text-neutral w-full max-w-xs"/>
                        {errors.img && <p className='text-red-600'>{errors.img?.message}</p>}
                    </div>
                    <input className='btn btn-secondary w-full text-base-100 mt-4' value='Add Product' type="submit" />
                </form>
            </div>
        </section>
    );
};

export default AddAProduct;