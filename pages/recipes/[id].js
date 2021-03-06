import Layout from '../../components/Layout';
import { recipesController } from '../../controllers';

const Recipe = ({ recipe } = {}) => {

    const { author, image, title } = recipe;

    return (
        <Layout>
            {recipe ?
                <div>
                    <h1>{title}</h1>
                    {author.name && <p>{`Created by ${author.name}`}</p>}
                    {image && <img src={image} />}
                </div>
                : <h2>Something went wrong!  We were not able to retreive this recipe, sorry about that :(</h2>}
        </Layout>
    );
};

/* TODO: fetch by Id from Neo4j
*
* below is a sample:
*/

Recipe.getInitialProps = async function (context) {
    const id = context.query.id;
    const recipe = await recipesController.findById(id);

    console.log(`Recipe # ${id}`, recipe);
    return { recipe };
}

export default Recipe;