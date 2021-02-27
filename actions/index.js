// SWR - Stale-While-Revalidate => Provide data from cache, while the req sent in parallel will fetch the updated data adn update the UI with-
//- with latest data, once res arrives
import useSWR from 'swr';

// Making a req to fetch more blogs througha useEffect(()=>{},[]) will throw a CORS error
// This fn() will will make a call ti lib/api, which will be executed in the server => preventing CORS error
const fetcher = url => fetch(url).then(res => res.json());

export const useGetHello = () => useSWR('/api/hello', fetcher);
export const useGetBlogs = ({offset}, initialData) => useSWR(`/api/blogs?offset=${offset || 0}`, fetcher, { initialData });