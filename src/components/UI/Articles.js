
import Article from './Article';

function Articles(props) {

    const DUMMY_ARTICLES = [
        {
            id: 'a1',
            title: 'Stellar team',
            description: 'Every project is unique and that\'s how we treat it. We combine our extensive experience with heaps of creativity to create a winning strategy for your brand.  Again and again.'
        },

        {
            id: 'a2',
            title: 'Care',
            description: 'We know you take your projects to heart because we do too. We put great care into every aspect - from customer care to brand care.'
        },

        {
            id: 'a3',
            title: 'Tailor-made approach',
            description: 'You want to set your brand apart and we help you with a tailor-made approach. Your company is like no other and so should be your digital strategy.'
        },

        {
            id: 'a4',
            title: 'Technology',
            description: 'We use the best tools on the market to make data-driven decisions and act faster than your competitors.'
        },

        {
            id: 'a5',
            title: 'Consistency',
            description: 'Consistency wins the race, especially in the digital world. Our focus is on quality, day in and day out, because the race in digital never ends.'
        }
    ];

    const articlesList = DUMMY_ARTICLES.map(article => <Article
        key={article.id}
        title={article.title}
        description={article.description} 
         />
    )

    return (
        
            <div>
                {articlesList}
            </div>
        
    );
};

export default Articles;