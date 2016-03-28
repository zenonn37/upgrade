import React from 'react';
import {mount} from 'react-mounter';
import {Layout} from './layout.jsx';
import {Home} from './home.jsx';
import {ApiTest} from './api.jsx';
import {C3Api} from './c3.jsx';


FlowRouter.route('/',{
  name:'Home',
  action(){
    mount(Layout,{
      content:(<Home/>)
    })
  }
});

FlowRouter.route('/api',{
  name:'API',
  action(){
    mount(Layout,{
      content:(<ApiTest/>)
    })
  }
});

FlowRouter.route('/c3',{
  name:'C3',
  action(){
    mount(Layout,{
      content:(<C3Api/>)
    })
  }
});
