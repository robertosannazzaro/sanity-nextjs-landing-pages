export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
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
                  buildHookId: '5f6e21865a36ef01361c230b',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-2qcz9puj',
                  apiId: 'f5e3ebfb-d280-4fec-90c7-27d78010b26a'
                },
                {
                  buildHookId: '5f6e2186aef79a00afbe7074',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-dz7s5m5s',
                  apiId: 'cd252cda-9742-4482-82da-6b7e1dce21a6'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/robertosannazzaro/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-dz7s5m5s.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
