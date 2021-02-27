// Next.js API route support: https://nextjs.org/docs/api-routes/introduction


export default function useGetAllBlogs(req, res){
  return res.status(200).json([
    { name: "Blog1" },
    { name: "Blog2" },
    { name: "Blog3" },
    { name: "Blog4" },
    { name: "Blog5" },
  ]);
}
