import {v2 as cloudinary} from 'cloudinary';
import dotenv from 'dotenv';
dotenv.config("../.env");

cloudinary.config({ 
    cloud_name: "dvazwc2q0", 
    api_key: process.env.CLOUDINARY_KEY, 
    api_secret: process.env.CLOUDINARY_API
});

console.log(cloudinary.config());

async function Upload(imgSrc) {
    const uploadResult = await cloudinary.uploader.upload(imgSrc, {}).catch((error)=>{console.log(error)});
    return uploadResult.url
}

export {Upload};