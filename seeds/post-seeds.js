const { Post } = require('../models');

const postData = [
    {
        title: "GMC Stocks goes to the Moon!",
        post_content: "It's a rag to riches story as diamond hands all of the nation unite in celebration of peasant victory!",
        user_id: 3
    },
    {
        title: "Apple breaks news of iPhone 14 just one week after the release of iPhone 13!",
        post_content: "They added 3 more additional colors as an added feature and another camera len to capture heat sensor!",
        user_id: 1
    },
    {
        title: "Iceland proclaims they are not actually living on a land of ice!",
        post_content: "Majority of the world still believes otherwise.",
        user_id: 2

    },
    {
        title: "Titanic uncovered in the Sahara Desert!",
        post_content: "Researchers are stunned as they found that the cruiseline found in the desert is the very same to be hit by an iceberg!",
        user_id: 5
    },
    {
        title: "Tupac discovered in beachhouse in Jamaica!",
        post_content: "Witnesses have claimed to have seen Tupac and Bob Marley chatting along a porch in a beachhouse along the beach of Jamaica.",
        user_id: 4
    }
]

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;