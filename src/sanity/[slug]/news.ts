export default {
  name: 'news',
  type: 'document',
  title: 'News',
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
  ]
}

// import { useRouter } from 'next/router'
 
// export default function Page() {
//   const router = useRouter()
//   return <p>Post: {router.query.slug}</p>
// }