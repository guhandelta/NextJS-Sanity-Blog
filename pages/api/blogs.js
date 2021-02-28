// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { getAllBlogs } from 'lib/api';

export default async function useGetAllBlogs(req, res){

  // Assign 0 if offset is undefined and parse the offset to int, as it will be a string
  const offset = parseInt((req.query.offset || 0), 10); // 10 => radix 10 for decimal system
  const date = req.query.date || 'desc';
  const data = await getAllBlogs({offset, date});
  return res.status(200).json(data);
}
