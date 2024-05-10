import { PreprSdk } from "../prepr";



export const getBlogs = async ({where, limit}) => {
    console.log(where);
    const data = await PreprSdk.Blogs({ where: where, limit: limit });
    console.log(data);
    
    return data
 }
