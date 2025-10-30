const routes = [
  {
    path: '/', // Osnovni dio URL-a
    component: () => import('layouts/MainLayout.vue'), // Raspored elemenata
    children: [
      // Postojeće putanje (npr. početna stranica)
      { path: '', component: () => import('pages/IndexPage.vue') },
    
      { 
        path: '/popisnovihKnjiga', // URL putanja (što se upisuje u preglednik)
        component: () => import('pages/NoveKnjigePage.vue') // Putanja do .vue datoteke
      },

      { 
        path: '/PopisKnjiga', 
        component: () => import('pages/PopisKnjigaPage.vue')
        
      },

      { 
        path: '/pretrazivanje', 
        component: () => import('pages/PretrazivanjePage.vue') 
      },

      { 
        path: '/login', 
        component: () => import('pages/LoginPage.vue') 
      },

      { 
        path: '/registracija', 
        component: () => import('pages/RegistracijaPage.vue') 
      },

      { 
        path: '/lokacija', 
        component: () => import('pages/LokacijaPage.vue') 
      },
    ]
  },

 
]

export default routes