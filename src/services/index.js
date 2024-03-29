export const getAllContentfulData = async () => {
  const endpoint = `https://graphql.contentful.com/content/v1/spaces/${process.env.REACT_APP_CONTENTFUL_SPACE}`;
  const query = `{
      projectCollection(order: date_ASC) {
        items {
          sys {
            id
          }
          identifier
          name
          link
          type
          technologies
          image {
            url
          }
        }
      }
      skillCollection {
        items {
          sys {
            id
          }
          name
          type
          image {
            url
          }
        }
      }
    }`;

  const fetchOptions = {
    spaceID: process.env.REACT_APP_CONTENTFUL_SPACE,
    accessToken: process.env.REACT_APP_CONTENTFUL_ACCESS_TOKEN,
    endpoint,
    method: "POST",
    headers: {
      Authorization: `Bearer ${process.env.REACT_APP_CONTENTFUL_ACCESS_TOKEN}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ query }),
  };
  const response = await fetch(endpoint, fetchOptions);
  const jsonData = await response.json();
  return {
    projects: parseContentfulItems(jsonData.data.projectCollection.items),
    skills: parseContentfulItems(jsonData.data.skillCollection.items),
  };
};

const parseContentfulItems = (items) => {
  const parsedItems = items
    .slice(0)
    .reverse()
    .map((item) => {
      return {
        ...item,
        id: item.sys.id,
        image: item.image.url,
      };
    })
    .map(({ sys, ...items }) => items);
  return parsedItems;
};
