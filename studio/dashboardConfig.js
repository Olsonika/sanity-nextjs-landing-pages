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
                  buildHookId: '617e5c7d21a4995e05a057ba',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-ktr2vbtq',
                  apiId: '5b898770-7799-41f2-87fd-2ac9df8a15e5'
                },
                {
                  buildHookId: '617e5c7ed8361f06464fd06b',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-sjkrrofc',
                  apiId: 'a9605583-2971-468a-8ffe-89e8eb59a846'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/Olsonika/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-sjkrrofc.netlify.app', category: 'apps'}
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
