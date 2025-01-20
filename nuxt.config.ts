// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  css: ['~/app.css'],

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  image:{},
  app: {
    head: {
      link: [{ rel: 'icon', type:'image/x-icon', href:'/favicon.ico' }]
    }
  },
  router: {
    options: {
      scrollBehaviorType: 'smooth'
    }
  },

  modules: ['@nuxt/image', 'nuxt-anchorscroll', '@nuxt/ui', 
    ['nuxt-mail',
      {
        message: {
          from: 'no-reply@billy-wood.com',
          to: process.env.BILLYEMAIL,
          subject: 'New Submission from Portfolio Contact Form!',
        },
        smtp: {
          host: "smtp.resend.com",
          port: 465,
          secure: true,
          auth:{
            user: 'resend',
            pass: process.env.RESEND_API_KEY
          }
        }
      }
    ],
  ],
})