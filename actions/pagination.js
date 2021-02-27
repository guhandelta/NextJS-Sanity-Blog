import { Col } from 'react-bootstrap';
import { useSWRPages } from "swr"
import { CardItem, CardListItem } from 'components';
import { useGetBlogs } from 'actions';

export const useGetBlogsPages = ({ blogs: initialData, filter }) =>{ //{blogs} => Initial Data
    
    return useSWRPages(
        'index-page',
        // callback() to display the components on the page
        ({ offset, withSWR }) =>{
            const { data: blogs } = withSWR(useGetBlogs(initialData));
            
            if(!blogs) return 'Loading';
            return blogs
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
        (SWR, index) => {
            return 0;
        },
        // Dependency Array :: fn gets re executed whenever the value changes
        [filter]
    )
}