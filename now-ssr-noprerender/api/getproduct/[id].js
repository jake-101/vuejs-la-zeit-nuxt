const { request } = require("graphql-request");

module.exports = async (req, res) => {
  const endpoint = "https://tilta.com/graphql";
  const param = req.query
  const query = /* GraphQL */ `
  {

    productBy(productId: ${param.id}) {
        id
        productId
        price
        name
        stockStatus
        slug
        tech_specs
        packing_list
        only_available_in_tilta_gray
        coming_soon
        backorders
        description
        length
        width
        height
        weight
        categories(where:{shouldOnlyIncludeConnectedItems: true, shouldOutputInFlatList: true}) {

          nodes { 
            name
          productCategoryId
            id
            slug
            parent {
              id
              name
              productCategoryId
            }
            
          
        }

      }
        related {
          nodes {
            name
            price
            productId
            slug
            image {
              sourceUrl
              srcSet
              mediaDetails {
                width
                height
                sizes {
                  sourceUrl
                  width
                }
              }
            }
            id
          }
        }
        galleryImages {
          nodes {
            sourceUrl
            srcSet
            mediaDetails {
              sizes {
                sourceUrl
                width
                height
              }
            }
          }
        }
        variations {
          nodes {
            name
            id
            sku
            backorders
            variationId
            image {
              sourceUrl
              srcSet
              mediaDetails {
                width
                height
                sizes {
                  sourceUrl
                  width
                }
              }
            }
            attributes {
              nodes {
                name
                value
              }
            }
            stockStatus
          }
        }
        image {
          srcSet
          mediaDetails {
            sizes {
              sourceUrl
              width
              height
            }
          }
        }
        catalogVisibility
        sku
      }
    }
  
  `;
  const data = await request(endpoint, query);
  // let count = data.productCategory.children.nodes.length
  // const resobj = {
  //   "results_size": count,
  //   "results": []
  //   }
  // await data.productCategory.children.nodes.forEach(function(item) {
  //   let obj = {
  //     "id": item.productCategoryId,
  //     "title": item.name,
  //     "last_update" : Date.now(),
  //     "blob": {
  //      count: item.count,
  //      slug: item.slug,
  //      route: `/product-category/${item.slug}/${item.productCategoryId}/`,
  //      parent: {name: item.parent.name,id:item.parent.productCategoryId,slug:item.parent.slug}
  //     }
  //   }
  //   resobj.results.push(obj)
  //   console.log(item);
  // });

  // res.set("cache-control", "s-maxage=1, maxage=0, stale-while-revalidate");

  res.json(data);
};
