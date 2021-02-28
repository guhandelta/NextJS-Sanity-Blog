import { Col } from 'react-bootstrap';
import { useSWRPages } from "swr"
import { CardItem, CardListItem, CardItemPlaceholder, CardListItemPlaceholder } from 'components';
import { useGetBlogs } from 'actions';
import { useEffect } from 'react';

export const useGetBlogsPages = ({ blogs , filter }) =>{ //{blogs} => Initial Data
    
    
    // On the clientside, to refetch the blogs without providing initialData, to include the blogs in the current-
    //- page(i.e. the blogs fetched 1st) in the sorting with/by the date
    // Using useEffect() to make sure that this functionality is executed in the browser
    useEffect(()=>{
    window.__pagination__init = true;
    },[]);
    
    
    return useSWRPages(
        'index-page',
        // callback() to display the components on the page
        ({ offset, withSWR }) =>{
            let initialData = !offset && blogs; // Assign the blogs as initial value only if offset is null or 0
            
            // initialData = null, if the refetch request originates from the browser
            if(typeof window !== 'undefined' && window.__pagination__init) initialData = null;

            const { data: paginatedBlogs } = withSWR(useGetBlogs({offset, filter}, initialData));
            if(!paginatedBlogs){
                return Array(3)
                        .fill()
                        .map((_,i) => // _ => iterated item(don't care about the number) | i -> index 
                        <Col key={i} md="4"> 
                        {/*Using the index as the key is not a good practice, as it can negatively impact 
                        performance and may cause issues with component state, it is used here as this is just
                        to display the placeholder and nothing special would be done here*/}
                            <CardItemPlaceholder />
                        </Col>
                    )
                }
            
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