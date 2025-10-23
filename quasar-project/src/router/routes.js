const routes = [
  {
    path: '/', // Osnovni dio URL-a
    component: () => import('layouts/MainLayout.vue'), // Raspored elemenata
    children: [
      // Postojeće putanje (npr. početna stranica)
      { path: '', component: () => import('pages/IndexPage.vue') },
      // ... ostale putanje ...

      // OVDJE DODAJETE NOVU PUTANJU:
      { 
        path: '/popisnovihKnjiga', // URL putanja (što se upisuje u preglednik)
        component: () => import('pages/NoveKnjigePage.vue') // Putanja do .vue datoteke
      },

      { 
        path: '/PopisKnjiga', // URL putanja (što se upisuje u preglednik)
        component: () => import('pages/PopisKnjigaPage.vue') // Putanja do .vue datoteke
      },
    ]
  },

  // ... (ostali kod, npr. 404 stranica)
]

export default routes