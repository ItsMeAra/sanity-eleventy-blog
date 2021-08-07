export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-eleventy-blog'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '610ddb408e155c6d23fb14f0',
                  title: 'Sanity Studio',
                  name: 'sanity-eleventy-blog-studio-7mm7dgha',
                  apiId: 'bfdd3ee6-20d2-41ea-9b6a-6071a03cb07d'
                },
                {
                  buildHookId: '610ddb41f1508f5ee59416bd',
                  title: 'Blog Website',
                  name: 'sanity-eleventy-blog-web-7ty5qq5a',
                  apiId: 'da088fd9-3096-47a4-8176-6135c1e7ea7c'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/ItsMeAra/sanity-eleventy-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-eleventy-blog-web-7ty5qq5a.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
