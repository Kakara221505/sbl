import { MenuItem } from './menu.model';

export const MENU: MenuItem[] = [
  {
    label: 'SFTP Server',
    icon: 'server',
    link: '/sftp/list'
  },

  {
    label: 'Unified Registry Stored Data', 
    icon: 'database',
    subItems: [
      {
        label: 'PII',
        link: '/pii/data',
      },
      {
        label: 'Non PII Food Dept',
        link: '/non-pii/data1'
      },
      {
        label: 'Non PII Local Govt',
        link: '/non-pii/data2'
      },
     
    ]
  }, 
  {
    label: 'Blockchain Data',
    icon: 'server',
    link: '/blockchain'
  },
  {
    label: 'Reward & Payment',
    icon: 'server',
    link: '/reward&payment'
  },
  {
    label: 'Data Verification',
    icon: 'server',
    link: '/dataVerification'
  },
  {
    label : 'Data Analysis',
    icon : 'server',
    link: '/dataAnalysis'
  },
  {
    label : 'Data Inference',
    icon : 'server',
    link: '/dataInference'
  },
 
];
