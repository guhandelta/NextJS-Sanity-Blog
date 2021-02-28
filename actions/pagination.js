import { Col } from 'react-bootstrap';
import { useSWRPages } from "swr"
import { CardItem, CardListItem } from 'components';
import { useGetBlogs } from 'actions';

export const useGetBlogsPages = ({ blogs , filter }) =>{ //{blogs} => Initial Data
    
    return useSWRPages(
        'index-page',
        // callback() to display the components on the page
        ({ offset, withSWR }) =>{
            let initialData = !offset && blogs; // Assign the blogs as initial value only if offset is null or 0
            const { data: paginatedBlogs } = withSWR(useGetBlogs({offset, filter}, initialData));
            if(!paginatedBlogs) return 'Loading';
            return paginatedBlogs
                .map(({title, subtitle, slug, date, coverImage, author}) => 
                    filter.view.list ? //Checking what view is currently used to display the blogs
                    /* --------------------------------- */
                    <Col key={`${slug}-list`} md="9">
                        <CardListItem 
                        title={title} 
                        subtitle={subtitle} 
                        date={date} 
                        author={author}
                        slug={slug}
                        link={{
                            href: '/blogs/[slug]',
                            as: `/blogs/${slug}`
                        }}
                        />
                    </Col>
                    /* --------------------------------- */
                    :
                    /* --------------------------------- */
                    <Col key={slug} md="4"> 
                        <CardItem 
                        title={title} 
                        subtitle={subtitle} 
                        date={date} 
                        image={coverImage}  
                        author={author}
                        slug={slug}
                        link={{
                            href: '/blogs/[slug]',
                            as: `/blogs/${slug}`
                        }}
                        /> 
                    </Col>
                )   
        },
        // fn to compute offset to supply to teh previous callback()
        // SWR: Data withSWR() || index: current page number
        // Data fetched in #12, will be available also in SWR
        (SWR, index) => {
            if(SWR.data && SWR.data.length === 0) return null;
            return (index+1)*3;
        },
        // Dependency Array :: fn gets re executed whenever the value changes
        [filter]
    )
}