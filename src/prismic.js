import * as prismic from '@prismicio/client'


export const repositoryName = 'profil'

export const client = prismic.createClient(repositoryName, {
 
  accessToken:
    'MC5ZejdoZ0JFQUFDSUFpUGo0.77-9Cu-_vXEL77-977-977-977-977-9U0Tvv73vv73vv73vv73vv73vv71P77-9M1lo77-977-977-977-9GVvvv71H77-9',

  
  routes: [
    {
      type: 'post',
      path: '/'
    }
  ]
})