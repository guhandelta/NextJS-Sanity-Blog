// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { getAllBlogs } from 'lib/api';

export default async function useGetAllBlogs(req, res){
  const data = await getAllBlogs();
  return res.status(200).json(data);
}
