/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  // tutorialSidebar: [{type: 'autogenerated', dirName: '.'}],

  cssInterviewSidebar: [
    {
      type: 'category',
      label: 'CSS Interviews',
      items: [
        {
          type: 'autogenerated',
          dirName: 'css',
        }
      ],
    }
  ],

  jsInterviewSidebar: [
    {
      type: 'category',
      label: 'JS Interviews',
      items: [
        {
          type: 'autogenerated',
          dirName: 'js',
        }
      ],
    }
  ],

  nodejsInterviewSidebar: [
    {
      type: 'category',
      label: 'NodeJS Interviews',
      items: [
        {
          type: 'autogenerated',
          dirName: 'nodejs',
        }
      ],
    }
  ],

  designSystemInterviewSidebar: [
    {
      type: 'category',
      label: 'Design System',
      items: [
        {
          type: 'autogenerated',
          dirName: 'system-design',
        }
      ],
    }
  ],

  mongodbInterviewSidebar: [
    {
      type: 'category',
      label: 'MongoDB',
      items: [
        {
          type: 'autogenerated',
          dirName: 'mongodb',
        }
      ],
    }
  ],

  postgresInterviewSidebar: [
    {
      type: 'category',
      label: 'Postgres',
      items: [
        {
          type: 'autogenerated',
          dirName: 'postgresql',
        }
      ],
    }
  ],

  socketioInterviewSidebar: [
    {
      type: 'category',
      label: 'Socket.IO Interviews',
      items: [
        {
          type: 'autogenerated',
          dirName: 'socketio',
        }
      ],
    }
  ],

  cSharpInterviewSidebar: [
    {
      type: 'category',
      label: 'C# Interviews',
      items: [
        {
          type: 'autogenerated',
          dirName: 'c-sharp',
        }
      ],
    }
  ],

  
  javaInterviewSidebar: [
    {
      type: 'category',
      label: 'Java Interviews',
      items: [
        {
          type: 'autogenerated',
          dirName: 'java',
        }
      ],
    }
  ],
  
  reactnativeInterviewSidebar: [
    {
      type: 'category',
      label: 'Reactnative Interviews',
      items: [
        {
          type: 'autogenerated',
          dirName: 'react-native',
        }
      ],
    }
  ],
    
  phpInterviewSidebar: [
    {
      type: 'category',
      label: 'PHP Interviews',
      items: [
        {
          type: 'autogenerated',
          dirName: 'php',
        }
      ],
    }
  ],
      
  kotllinInterviewSidebar: [
    {
      type: 'category',
      label: 'Kotlin Interviews',
      items: [
        {
          type: 'autogenerated',
          dirName: 'kotlin',
        }
      ],
    }
  ],
  djangoInterviewSidebar: [
    {
      type: 'category',
      label: 'Django Interviews',
      items: [
        {
          type: 'autogenerated',
          dirName: 'django',
        }
      ],
    }
  ],
  apolloInterviewSidebar: [
    {
      type: 'category',
      label: 'Apollo GraphQl Interviews',
      items: [
        {
          type: 'autogenerated',
          dirName: 'apollographql',
        }
      ],
    }
  ],
  helmInterviewSidebar: [
    {
      type: 'category',
      label: 'Helm Interviews',
      items: [
        {
          type: 'autogenerated',
          dirName: 'helm',
        }
      ],
    }
  ],
  kafkaInterviewSidebar: [
    {
      type: 'category',
      label: 'Kafka Interviews',
      items: [
        {
          type: 'autogenerated',
          dirName: 'kafka',
        }
      ],
    }
  ],
  dockerInterviewSidebar: [
    {
      type: 'category',
      label: 'Docker Interviews',
      items: [
        {
          type: 'autogenerated',
          dirName: 'docker',
        }
      ],
    }
  ],
  kubernetesInterviewSidebar: [
    {
      type: 'category',
      label: 'Kubernetes Interviews',
      items: [
        {
          type: 'autogenerated',
          dirName: 'kubernetes',
        }
      ],
    }
  ],
  terraformInterviewSidebar: [
    {
      type: 'category',
      label: 'Terraform Interviews',
      items: [
        {
          type: 'autogenerated',
          dirName: 'terraform',
        }
      ],
    }
  ],
  // But you can create a sidebar manually
  /*
  tutorialSidebar: [
    {
      type: 'category',
      label: 'Tutorial',
      items: ['hello'],
    },
  ],
   */
};

module.exports = sidebars;
