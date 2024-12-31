// sanity/pet.ts
export default {
    name: 'blog',
    type: 'document',
    title: 'Blog',
    fields: [
        {
            name: 'name',
            type: 'string',
            title: 'Name'
        },
        {
            name: 'subheading',
            type: 'string',
            title: 'Name'
        },
        // {
        //     name: 'description',
        //     type: 'string',
        //     title: 'Description'
        //   },
        //   {
        //     name: 'author',
        //     type: 'reference',
        //     title: 'Author',
        //     to: {type: 'person'}
        //   }
       

        {
            title: 'Poster',
            name: 'poster',
            type: 'image',
            options: {
              hotspot: true // <-- Defaults to false
            },
            fields: [
              {
                name: 'caption',
                type: 'string',
                title: 'Caption',
              },
              {
                name: 'attribution',
                type: 'string',
                title: 'Attribution',
              }
            ]
          },
          {
            title: 'Current popularity',
            name: 'popularity',
            type: 'number'
          },
          {
            title: 'Address',
            name: 'address',
            type: 'object',
            fields: [
              {name: 'street', type: 'string', title: 'Street name'},
              {name: 'streetNo', type: 'string', title: 'Street number'},
              {name: 'city', type: 'string', title: 'City'}
            ]
          },
        //   {
        //     name: 'movie',
        //     type: 'object',
        //     fields: [
        //       {
        //         title: 'Director',
        //         name: 'director',
        //         type: 'reference',
        //         to: [{type: 'person'}]
        //       }            `
        //     ]
        //   },
        {
          title: 'Slug',
          name: 'slug',
          type: 'slug',
          options: {
              source: 'blog.name',
              maxLength: 200,
              slugify: (input: string) => input // Add type annotation here
                  .toLowerCase()
                  .replace(/\s+/g, '-')
                  .slice(0, 200)
          }
      },
    ]
}