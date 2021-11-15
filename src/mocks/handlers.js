import {rest} from 'msw'

export const handlers = [
  rest.get('/', (req, res, ctx) => {
    res(
      ctx.status(200),
      ctx.json({
        count: 2,
        next: null,
        previous: null,
        results: [
          {
            id: 563533,
            created_at: '2021-11-13T20:25:00.969576Z',
            updated_at: '2021-11-13T20:25:15.402749Z',
            deleted_at: null,
            tenant_id: 9417,
            delivery_method: {
              id: 1,
              created_at: '2019-03-08T15:42:50.196000Z',
              updated_at: '2019-03-08T15:42:51.741000Z',
              deleted_at: null,
              name: 'Cliente recoge'
            },
            content_type: 55,
            category: {
              id: 9679,
              created_at: '2021-11-13T14:09:32.184584Z',
              updated_at: '2021-11-13T14:09:32.184598Z',
              deleted_at: null,
              tenant_id: 9417,
              name: 'Sin Asignar',
              discount: null,
              default_for_tenant: true,
              commission: null,
              parent: null
            },
            subcategory: {
              id: 9223,
              created_at: '2021-11-13T14:09:32.187157Z',
              updated_at: '2021-11-13T14:09:32.187171Z',
              deleted_at: null,
              tenant_id: 9417,
              name: 'Sin Asignar',
              discount: null,
              default_for_tenant: true,
              commission: null,
              parent: null
            },
            business_name: null,
            business_email: 'demo2@gmail.com',
            name: 'Demo 2 & Asociados S.A.',
            reference_name: 'Demo 2',
            position: null,
            contact_email: null,
            contact_name: 'Mr Demo 2',
            contact_phone: '66655444',
            contact_phone_number: '66655544',
            contact_phone_number_extra: '66677788',
            country: 'BOL',
            city: null,
            nit: '123456789',
            delivery_time: 0,
            credit_days: 0,
            comment: null,
            latitude: -16.51678280622718,
            longitude: -68.12649389584892,
            priority: null,
            code: null,
            birthdate: null,
            discount: '10.0000',
            address: null,
            merged: false,
            payment_method: 1
          },
          {
            id: 563532,
            created_at: '2021-11-13T20:10:57.707786Z',
            updated_at: '2021-11-13T20:19:12.012147Z',
            deleted_at: null,
            tenant_id: 9417,
            delivery_method: {
              id: 1,
              created_at: '2019-03-08T15:42:50.196000Z',
              updated_at: '2019-03-08T15:42:51.741000Z',
              deleted_at: null,
              name: 'Cliente recoge'
            },
            content_type: 55,
            category: {
              id: 9679,
              created_at: '2021-11-13T14:09:32.184584Z',
              updated_at: '2021-11-13T14:09:32.184598Z',
              deleted_at: null,
              tenant_id: 9417,
              name: 'Sin Asignar',
              discount: null,
              default_for_tenant: true,
              commission: null,
              parent: null
            },
            subcategory: {
              id: 9223,
              created_at: '2021-11-13T14:09:32.187157Z',
              updated_at: '2021-11-13T14:09:32.187171Z',
              deleted_at: null,
              tenant_id: 9417,
              name: 'Sin Asignar',
              discount: null,
              default_for_tenant: true,
              commission: null,
              parent: null
            },
            business_name: 'Es un demo 1',
            business_email: 'demo1@gmail.com',
            name: 'Demo 1 SRL',
            reference_name: 'Demo 1',
            position: null,
            contact_email: null,
            contact_name: 'Mr Demo',
            contact_phone: '77788899',
            contact_phone_number: '77788999',
            contact_phone_number_extra: '77766555',
            country: 'BO',
            city: 'La Paz',
            nit: '123456789',
            delivery_time: 0,
            credit_days: 0,
            comment: 'comentario de demo 1',
            latitude: null,
            longitude: null,
            priority: '1',
            code: 'demo-1-11-2021',
            birthdate: '2005-03-18',
            discount: '0.0000',
            address: null,
            merged: false,
            payment_method: 1
          }
        ],
        take: 5,
        skip: 0,
        all: false
      })
    )
  })
]
